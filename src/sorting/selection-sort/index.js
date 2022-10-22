const { swap } = require('../helper')

/**
 * We loop through the array, and for each element, we find the smallest
 * element to the right of it, and swap it with the current element
 * @param {number[]} arr - the array to be sorted
 * @returns {number[]} - sorted array
 */
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let smallestNumIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNumIdx]) {
        smallestNumIdx = j
      }
    }

    if (i !== smallestNumIdx) {
      swap(arr, i, smallestNumIdx)
    }
  }

  return arr
}

console.log(selectionSort([6, 8, 2, 4, 5, 19, 23, 1]))
