"use client";

import { PropsWithChildren, useEffect, useState } from "react";

import { ErrorBoundary } from "@shared/layouts/main/error-boundary";
import { ErrorPage } from "@shared/layouts/main/error-page";

import { useLockBodyScroll } from "react-use";
import { useDidMount } from "@shared/hooks/use-did-mount";
import { useDisableScroll } from "@shared/hooks/use-disable-scroll";
import { useAppDispatch } from "@store/index";
import { toast } from "@shared/hooks/use-toast";

import { axiosInstance } from "@api/axios";
import { BACKGROUNDS } from "@shared/constants";

import {
    setBlogs,
    setHasVisited,
    setInitBackground,
    setInitProgress,
    setProfile,
    setProjects,
    setTags,
} from "@store/app-slice";

import useBreakpoint from "@shared/hooks/use-break-point";

import LazyWrapper from "@ui/molecules/frame/lazy-wrapper";
import MacUiProvider from "@shared/layouts/main/mac-ui-provider";

function InitInner({ children }: PropsWithChildren) {
    const dispatch = useAppDispatch();
    const breakpoint = useBreakpoint();

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (dispatch) {
            const initializeApp = async () => {
                async function getProfile() {
                    const response = axiosInstance.get("/api/profile");
                    const result = await response;
                    return result;
                }

                async function getProject() {
                    const response = axiosInstance.get("/api/project");
                    const result = await response;
                    return result;
                }

                async function getBlog() {
                    const response = axiosInstance.get("/api/blog");
                    const result = await response;
                    return result;
                }

                async function getTag() {
                    const response = axiosInstance.get("/api/tag");
                    const result = await response;
                    return result;
                }

                const apis = [
                    {
                        func: getProfile,
                        action: (response: any) => dispatch(setProfile(response.data)),
                    },
                    {
                        func: getBlog,
                        action: (response: any) => dispatch(setBlogs(response.data)),
                    },
                    {
                        func: getTag,
                        action: (response: any) => dispatch(setTags(response.data)),
                    },
                    {
                        func: getProject,
                        action: (response: any) => dispatch(setProjects(response.data)),
                    },
                ];

                const totalTasks = apis.length;
                let completedTasks = 0;

                try {
                    for (const api of apis) {
                        const data = await api.func();
                        api.action(data);
                        completedTasks += 1;
                        setProgress((completedTasks / totalTasks) * 100);
                    }
                } catch (error) {
                    console.error("Error initializing app:", error);
                } finally {
                    dispatch(setHasVisited(true));
                    dispatch(setInitProgress((completedTasks / totalTasks) * 100));

                    //Background
                    const randomIndex = Math.floor(Math.random() * BACKGROUNDS.length);
                    const randomBackground = BACKGROUNDS[randomIndex];
                    if (randomBackground) {
                        dispatch(setInitBackground(randomBackground));
                    }
                }
            };
            initializeApp();
        } else {
            toast({
                variant: "destructive",
                title: `Failed to get information from web`,
            });
        }
    }, []);

    //   useDisableScroll();

    useLockBodyScroll(breakpoint !== "xs" && breakpoint !== "sm" ? true : false);

    return (
        <LazyWrapper>
            {children}
            <MacUiProvider progress={progress} />
        </LazyWrapper>
    );
}

export default function InitContainer(props: PropsWithChildren) {
    const didMount = useDidMount();

    return didMount ? (
        <ErrorBoundary fallback={ErrorPage}>
            <InitInner {...props} />
        </ErrorBoundary>
    ) : (
        <></>
    );
}
