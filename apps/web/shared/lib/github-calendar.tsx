"use client";

import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";
import dynamic from "next/dynamic";
import Calendar, {
  type Props as ActivityCalendarProps,
} from "react-activity-calendar";

import {
  Activity,
  ApiErrorResponse,
  ApiResponse,
  ThemeInput,
  Year,
} from "../../types";

import { API_URL, DEFAULT_THEME } from "@shared/constants";

import { SkeletonCard } from "@ui/molecules/cards/skeleton-card";

export interface Props extends Omit<ActivityCalendarProps, "data" | "theme"> {
  username: string;
  errorMessage?: string;
  theme?: ThemeInput;
  throwOnError?: boolean;
  transformData?: (data: Array<Activity>) => Array<Activity>;
  transformTotalCount?: boolean;
  year?: Year;
}

const transformData = (
  data: Array<Activity>,
  transformFn?: Props["transformData"],
): Array<Activity> => {
  if (typeof transformFn !== "function") {
    return data;
  }

  const transformedData = transformFn(data);

  if (!Array.isArray(transformedData)) {
    throw Error(
      `Passed function transformData must return a list of Day objects.`,
    );
  }

  if (transformedData.length > 0) {
    const testObj = transformedData[0];
    if (!testObj) throw Error(`Data Error`);

    if (typeof testObj.count !== "number" || testObj.count < 0) {
      throw Error(
        `Required property "count: number" missing or invalid. Got: ${testObj.count}`,
      );
    }

    if (!/\d{4}-\d{2}-\d{2}/.test(testObj.date)) {
      throw Error(
        `Required property "date: YYYY-MM-DD" missing or invalid. Got: ${testObj.date}`,
      );
    }

    if (
      typeof testObj.level !== "number" ||
      testObj.level < 0 ||
      testObj.level > 4
    ) {
      throw Error(
        `Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${testObj.level}.`,
      );
    }
  }

  return transformedData;
};

async function fetchCalendarData(
  username: string,
  year: Year,
): Promise<ApiResponse> {
  const response = await fetch(`${API_URL}${username}?y=${year}`);
  const data: ApiResponse | ApiErrorResponse = await response.json();

  if (!response.ok) {
    throw Error(
      `Fetching GitHub contribution data for "${username}" failed: ${(data as ApiErrorResponse).error}`,
    );
  }

  return data as ApiResponse;
}

const GitHubCalendar: FunctionComponent<Props> = ({
  username,
  year = "last",
  labels,
  transformData: transformFn,
  transformTotalCount = true,
  throwOnError = false,
  errorMessage = `Error – Fetching GitHub contribution data for "${username}" failed.`,
  ...props
}) => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchCalendarData(username, year)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [username, year]);

  useEffect(fetchData, [fetchData]);

  // React error boundaries can't handle asynchronous code, so rethrow.
  if (error) {
    if (throwOnError) {
      throw error;
    } else {
      return <div>{errorMessage}</div>;
    }
  }

  if (loading || !data) {
    return <SkeletonCard />;
  }

  const theme = props.theme ?? DEFAULT_THEME;

  const defaultLabels = {
    totalCount: `{{count}} contributions in ${
      year === "last" ? "the last year" : "{{year}}"
    }`,
  };

  const totalCount =
    year === "last" ? data.total["lastYear"] : data.total[year];

  return (
    <Calendar
      data={transformData(data.contributions, transformFn)}
      theme={theme}
      labels={Object.assign({}, defaultLabels, labels)}
      totalCount={transformFn && transformTotalCount ? undefined : totalCount}
      {...props}
      loading={Boolean(props.loading) || loading}
      maxLevel={4}
    />
  );
};

export default dynamic(() => Promise.resolve(GitHubCalendar), {
  loading: () => <SkeletonCard />,
  ssr: false,
});
