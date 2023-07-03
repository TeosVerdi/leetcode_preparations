function merge(intervals: number[][]): number[][] {
    intervals.sort((a, b) => a[0] - b[0]);
    let currentInterval: number[] = [intervals[0][0], intervals[0][1]];
    const result: number[][] = [];

    for (let i = 0; i < intervals.length; i++) {
        if (currentInterval[1] >= intervals[i][0]) {
            currentInterval = [Math.min(currentInterval[0], intervals[i][0]), Math.max(currentInterval[1], intervals[i][1])]
        } else {
            result.push(currentInterval);
            currentInterval = [intervals[i][0], intervals[i][1]];
        }
    }
    result.push(currentInterval);
    return result;
};
