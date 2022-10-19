// write a function that takes 3 parameters and return an array with the range of theses numbers  then sum the numbers of this array with another function
// if you given 1,2,5 the output :- [1,2,3,4,5]
// the smalles number and the highest = 1 ,5 and output tne numbers from the smallest to the highest

function range(start, end, step) {
  let arr = [];
  if (step < 0 && start < end) {
    [start, end] = [end, start];
  }
  if (start > end && step > 0) {
    [start, end] = [end, start];
  }
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }

  return arr;
}

function sum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

sum(range(1, 5, 1));
