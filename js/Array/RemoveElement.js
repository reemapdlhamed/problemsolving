// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
//  [1,2,3,4,5,5,5,6] , 5
function removeEle(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1), i--;
    }
  }
  return nums;
}

//*************************************** */
function remove(arr, target) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
