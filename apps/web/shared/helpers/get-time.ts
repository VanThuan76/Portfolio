export const getTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();

  return {
    hoursTens: Math.floor(hours / 10),
    hoursOnes: hours % 10,
    minutesTens: Math.floor(minutes / 10),
    minutesOnes: minutes % 10,
  };
};

export function formatLocaleDate(dateString: string, locale: string) {
  if (!dateString || !locale) return;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function formatRelativeDate(dateString: string, locale: string = "en") {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return rtf.format(-minutes, "minute");
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return rtf.format(-hours, "hour");
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return rtf.format(-days, "day");
  } else {
    const weeks = Math.floor(diffInSeconds / 604800);
    return rtf.format(-weeks, "week");
  }
}
