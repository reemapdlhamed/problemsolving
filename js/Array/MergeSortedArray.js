//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
//Merge nums1 and nums2 into a single array sorted in non-decreasing order.

function merge(nums1, m, nums2, n) {
  while (n) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[m + n - 1] = nums1[--m];
    } else {
      nums1[m + n - 1] = nums2[--n];
    }
  }
  return nums1;
}
