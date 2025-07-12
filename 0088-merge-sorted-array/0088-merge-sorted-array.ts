/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;         // nums1의 마지막 원소 인덱스
    let j = n - 1;         // nums2의 마지막 원소 인덱스
    let k = m + n - 1;     // nums1에서 값을 채워넣을 위치

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
        } else {
        nums1[k] = nums2[j];
        j--;
        }
        k--;
    }
};