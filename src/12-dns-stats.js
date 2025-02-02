/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const allArr = [];
  for (let i = 0; i < domains.length; i++) {
    const intArr = domains[i].split('.').reverse();
    for (let j = 1; j <= intArr.length; j++) {
      allArr.push(intArr.slice(0, j).join('.'));
    }
  }
  const appearances = {};
  allArr.forEach((dom) => {
    appearances[`.${dom}`] = (appearances[`.${dom}`] || 0) + 1;
  });
  return appearances;
}

module.exports = getDNSStats;
// debugger
// console.log(getDNSStats(['code.yandex.ru','music.yandex.ru','yandex.ru']));
