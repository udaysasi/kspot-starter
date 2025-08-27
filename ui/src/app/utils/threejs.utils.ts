export const percentageToVW = (percent: number) => {
    var w = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth || 0
    );
    return (percent * w) / 100;
};
export const percentageToVH = (percent: number) => {
    var w = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
    );
    return (percent * w) / 100;
};
