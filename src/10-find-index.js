/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let currInd = Math.floor(array.length / 2);
  let top = array.length - 1;
  let bottom = 0;
  while (array[currInd] !== value) {
    if (array[currInd] > value) {
      top = currInd;
      currInd = Math.floor((currInd - bottom) / 2);
    } else {
      bottom = currInd;
      currInd += Math.ceil((top - currInd) / 2);
    }
  }
  return currInd;
}

module.exports = findIndex;
