// write factorial function

function fact(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

//Recursion solution:-

function factTwo(num) {
  // base case
  if (num == 1) {
    //exist
    return 1;
  }
  // recursive case
  return num * factTwo(num - 1);
}
