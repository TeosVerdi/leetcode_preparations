/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {

    let pointer1 = m - 1;
    let pointer2 = n - 1;
    let filler = m + n - 1;

    while (pointer1 >= 0 && pointer2 >= 0) {
        if (nums2[pointer2] > nums1[pointer1]) {
            nums1[filler] = nums2[pointer2];
            pointer2--;
            filler--;
        } else {
            nums1[filler] = nums1[pointer1];
            pointer1--;
            filler--;
        }
    }

    while (pointer2 >= 0) {
        nums1[filler--] = nums2[pointer2--]
    }

 };