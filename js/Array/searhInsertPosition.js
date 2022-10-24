// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// Input: nums = [1,3,5,6], target = 7
// Output: 4
// Input: nums = [1,3,5,6], target = 2
// Output: 1

function searachInsert(nums, target) {
  let index = 0;
  if (nums.length === 0) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    // if target value exists in the arr
    if (nums[i] === target) {
      index = i;
    }
    // if target value  doesn't exist in the arr .
    // to be inside the array
    else if (nums[i] < target && nums[i + 1] > target) {
      index = i + 1;
    }
    //to be the last elemen
    else if (nums[nums.length - 1] < target) {
      index = nums.length;
    }
  }

  return index;
}
//*************************************** */
function searchInsertTwo(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      return i;
    }
  }
  return nums.length;
}
