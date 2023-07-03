/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        const range = [1, n];
        let m = Math.floor((n + 1) / 2);

        while (range[0] !== range[1]) {
            if (isBadVersion(m)) {
                range[1] = m;
            } else {
                range[0] = m + 1;
            }
            m = Math.floor(range[0] + (range[1] - range[0]) / 2 )
        }
        return m;
    };
};