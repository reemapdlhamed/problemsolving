// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only
//once. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part
//of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the
//final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.

//
function removeDuplicate(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      continue;
    }
    newarr.push(arr[i]);
  }
  return newarr;
}

// we can't use allocate extra space for another array
//another way to do is we must use O(1) extra memory .
// we can only use the array they given to us
//[0,0,1,1,1,2,2,3,3,4]  => output k=5 ,nums= [0,1,2,3,4,_,_,_,_,_]

function removeDup(nums) {
  if (nums.length === 0) {
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1), i--;
    }
  }
  return nums;
}
