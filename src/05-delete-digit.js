/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return Math.max.apply(null, n.toString().split('').map((val, ind, arr) => Array.prototype.concat(arr.slice(0, ind), arr.slice(ind + 1)).join('')));
}

module.exports = deleteDigit;
