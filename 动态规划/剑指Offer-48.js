var lengthOfLongestSubstring = function (s) {
  let str = [], maxLength = 0;
  for (let i = 0; i < s.length; i++) {
    let index = str.indexOf(s[i]);
    if (index != -1) {
      str.splice(0, index + 1);

    }
    str.push(s[i]);
    maxLength = Math.max(maxLength, str.length);
  }
  return maxLength;

  // 用集合
  let str = new Set(), maxLength = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    while (str.has(s[i])) {
      str.delete(s[j++]);
    }
    str.add(s[i]);
    maxLength = Math.max(maxLength, str.size);
  }
  return maxLength;
};

lengthOfLongestSubstring('abcabcbb');

