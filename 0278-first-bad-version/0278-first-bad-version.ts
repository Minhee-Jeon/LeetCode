/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

//  let idx: number = 1;

var solution = function(isBadVersion: any) {
    
    return function(n: number): number {
        let left = 1;
        let right = n;

        while(left <= right) {
            const middle = Math.round((left + right) / 2);

            if (isBadVersion(middle) === false) left = middle + 1;
            else {
                if (isBadVersion(middle - 1) === false) return middle;
                right = middle - 1;
            }
        }
    };
};