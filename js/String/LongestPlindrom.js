// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that
//  can be built with those letters.
//"abccccdd"
//"dccaccd"
function longestPalindrome(s) {
  const set = new Set();
  let count = 0; // count of pair

  for (let c of s) {
    if (set.has(c)) {
      set.delete(c);
      count++; // found a pair
    } else {
      set.add(c);
    }
  }

  return set.size > 0 ? 2 * count + 1 : 2 * count;
}
