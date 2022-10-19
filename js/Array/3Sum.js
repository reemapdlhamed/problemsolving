/**
 * Three Sum
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique
 * triplets in the array which gives the sum of zero.
 *
 * Note:
 *
 * The solution set must not contain duplicate triplets.
 *
 * Example:
 *
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 *
 * A solution set is:
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 */
// function threeSum(arr) {
//   const res = [];
//   // sort the array
//   arr.sort((a, b) => a - b);
//   //looping on the sorted array to avoid duplication
//   //[-4,-1,-1,0,1,2] => to arr[2] === arr[1] = -1 continue
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     let target = -arr[i]; // the opposite of current elem
//     let x = i + 1; // the second elem
//     let z = arr.length - 1; // the last

//     while (x < z) {
//       // we have a case => arr[x] + arr[z] = target => -1 +-1 =-2
//       if (arr[x] + arr[z] === target) {
//         res.push([arr[i], arr[x], arr[z]]); // res=[-1,-1,2]
//         while (x < z && arr[x] === arr[z + 1]) {
//           x++;
//         }
//         while (x < z && arr[z] === arr[x - 1]) {
//           z--;
//         }
//         x++;
//         z--;
//       } else if (arr[x] + arr[z] > target) {
//         z--;
//       } else {
//         x++;
//       }
//     }
//   }
//   return res;
// }
function threeSum(arr) {
  const res = [];
  //case the array length less than three
  if (arr.length < 3) return res;
  //sort the array
  arr.sort((a, b) => a - b);
  //looping on the sorted array to avoid duplication
  for (let i = 0; i < arr.length; i++) {
    // in case there is no negative values
    if (arr[i] > 0) {
      break;
    }
    //if the current value equals the previous value you can skipe this iteration
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      const sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        res.push([arr[i], arr[start], arr[end]]);
        start++;
        end--;
        while (start < end && arr[start] === arr[start - 1]) start++;
        while (start < end && arr[end] === arr[end + 1]) end--;
      } else if (sum < 0) {
        start++;
      } else if (sum > 0) {
        end--;
      }
    }
  }
  return res;
}
