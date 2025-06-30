function intersect(nums1: number[], nums2: number[]): number[] {
    // 오름차순으로 정렬하기
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const result: number[] = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};