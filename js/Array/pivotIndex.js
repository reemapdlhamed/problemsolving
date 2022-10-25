//Given an array of integers nums, calculate the pivot index of this array.
//  [1,7,3,6,5,6] => total sum is 28
// left =0 +1 +7 +3 = 11
// 28 - 1 -0
// 28 - 7 -1
// 28 - 3 -8
// 28 -6 -11 => 28-17 = 11  => left side now equal the right side .
function pivotIndex(nums) {
  let sum = 0;
  let left = 0;
  nums.forEach((element) => {
    sum += element;
  });
  for (let i = 0; i < nums.length; i++) {
    if (sum - nums[i] - left === left) {
      return i;
    }
    left += nums[i];
  }
  return -1;
}
