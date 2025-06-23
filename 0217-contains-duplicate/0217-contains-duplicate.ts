function containsDuplicate(nums: number[]): boolean {
    const set = Array.from(new Set(nums));
    return set.length !== nums.length;
};