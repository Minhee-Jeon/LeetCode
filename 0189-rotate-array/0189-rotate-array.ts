/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    k %= nums.length;
    if (k < nums.length / 2) {
        const temp = nums.splice(nums.length - k, k);
        nums.unshift(...temp);
    } else {
        const temp = nums.splice(0, nums.length -  k);
        nums.push(...temp);
    }
};