/**
 * Swaps the values of two elements in an array
 * @param {number[]} arr - the array we're sorting
 * @param {number} i - the index of the first item to swap
 * @param {number} j - the index of the first element in the subarray
 * @return {void}
 */

const swap = (arr, i, j) => {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

module.exports = { swap }
