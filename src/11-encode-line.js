/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new Error('Not implemented');
  let result = '';
  let lastChar = str[0];
  let cnt = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === lastChar) {
      cnt++;
    } else {
      result += cnt === 1 ? lastChar : cnt + lastChar;
      lastChar = str[i];
      cnt = 1;
    }
    if (i === str.length - 1) {
      result += cnt === 1 ? lastChar : cnt + lastChar;
    }
  }
  return result;
}

module.exports = encodeLine;
