/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr;
  const indexes = arr.map((val, ind) => (val === -1 ? val : ind)).filter((v) => v !== -1);
  const sorted = arr.filter((v) => v !== -1).sort((a, b) => {
    let res = 0;
    if (a > b) res = 1;
    if (a === b) res = 0;
    if (a < b) res = -1;
    return res;
  });
  for (let i = 0; i < sorted.length; i++) {
    result[indexes[i]] = sorted[i];
  }
  return result;
}

module.exports = sortByHeight;
// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
// console.log(sortByHeight([2,2,4,9,11,16]));
