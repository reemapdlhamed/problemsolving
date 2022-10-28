// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Input : "III"  Output :- 3
function romanToInt(s) {
  const romans = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  if (!s || s.length == 0) return 0;
  s = s.toUpperCase();
  if (s in romans) {
    return romans[s];
  }
  let step = 0;
  //Iterate through this string we’ve received
  //As we iterate through characters accumulate the numbers we see and translate according to the rules we’ve received
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I" && s[i + 1] === "V") {
      step += 4;
      i++;
    } else if (s[i] === "I" && s[i + 1] === "X") {
      step += 9;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "L") {
      step += 40;
      i++;
    } else if (s[i] === "X" && s[i + 1] === "C") {
      step += 90;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "D") {
      step += 400;
      i++;
    } else if (s[i] === "C" && s[i + 1] === "M") {
      step += 900;
      i++;
    } else {
      romans[s[i]];
      step += romans[s[i]];
    }
  }
  return step;
}
