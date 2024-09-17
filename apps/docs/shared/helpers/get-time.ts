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
