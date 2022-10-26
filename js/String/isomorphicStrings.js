//Given two strings s and t, determine if they are isomorphic.
// egg , add => if we replaced => egg = add
//foo , bar = > baa => false
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = t[i];
    } else {
      if (map[s[i]] !== t[i]) {
        return false;
      }
    }
  }
  return true;
}
// isIsomorphic ("badc", "baba") // false but till now gives true .

var isIsomorphicTwo = function (s, t) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) return false;
  }

  return true;
};
///
function isIsomorphicThree(s, t) {
  const mapOne = new Map();
  const mapTwo = new Map();
  for (let i = 0; i < s.length; i++) {
    if (mapOne.has(s.charAt(i))) {
      if (mapOne.get(s.charAt(i)) !== t.charAt(i)) return false;
    }
    if (mapTwo.has(t[i])) {
      if (mapTwo.get(t.charAt(i)) !== s.charAt(i)) return false;
    }
    mapOne.set(s.charAt(i), t.charAt(i));
    mapTwo.set(t.charAt(i), s.charAt(i));
  }
  return true;
}
