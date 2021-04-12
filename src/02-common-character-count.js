/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const setAll = new Set(s1.concat(s2));
  return Array.from(setAll.values()).map((val) => {return (s1.includes(val) && s2.includes(val)) ? (Math.min(s1.split('').filter((v) => v === val).length, s2.split('').filter((v) => v === val).length)) : 0}).reduce((prev, curr) => +prev + +curr);
}

module.exports = getCommonCharacterCount;
// debugger
// console.log(getCommonCharacterCount("aabcc", "adcaa"));
