/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]
*/

function mergeTwoSortedArrays(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n;

    while (i >= 0 || j >= 0) {
        if (nums1[i] < nums2[j]) {
            nums1[k] = nums2[j];
            j--;
        } else {
            nums1[k] = nums1[i];
            i--;
        }
        k--;
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }

    return nums1;
}

console.log(mergeTwoSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
