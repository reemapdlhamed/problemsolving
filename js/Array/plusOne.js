// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
// Input: digits = [4,3,2,1] Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

//convrt to str  then to number adding one then to digits to the array .
// OR
//handling many cases
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      console.log(digits[i]);
      digits[i] = 0;
    } else {
      console.log(digits[i]);
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}
