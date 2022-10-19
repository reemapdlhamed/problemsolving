/**
 * Median of Two Sorted Arrays
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 * Example 2:
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 */
/*** Find the median from two sorted arrays */

// Median => the middle element is found by ordering all elements in sorted order picking out the one in the middle
// So , What is Median in math ?!
// [1,2,900,6,7]  => length :5 | median : 900   *as asingle odd array
// [1,2,3,4] => length : 4 | median :- 2,3 -> 2+3/2 ->5/2 =2.5   * as a single even array
// # combine arrays => [1,3] | [2] => [1,3,2]
// #sort the combination => [1,2,3] ..... is this array even or odd length  ?!!  if this newarr %2 === 0 => even | newarr%2 !=0 => odd
// # Find The middle number

function findMedian(arr1, arr2) {
  let mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  //   console.log(mergedArr);
  let middlePint = Math.floor(mergedArr.length / 2);

  if (mergedArr.length % 2 !== 0) {
    //odd
    return mergedArr[middlePint];
  } else if (mergedArr.length % 2 === 0) {
    // even
    return (mergedArr[middlePint] + mergedArr[middlePint - 1]) / 2;
  }
}
