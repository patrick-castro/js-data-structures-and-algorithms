const { swap } = require('../helper')

/**
 * Loop through the array, and for each iteration, we find the largest element
 * in the array and swap it with the last element in the array
 * @param {number[]} arr - the array to be sorted
 * @returns {sorted array} - sorted array
 */
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let largestIndex = 0

    for (let j = 0; j < arr.length - i; j++) {
      if (arr[largestIndex] < arr[j]) {
        largestIndex = j
      }
    }

    let lastIndex = arr.length - 1 - i
    swap(arr, lastIndex, largestIndex)
  }

  return arr
}

// bubbleSort([6, 8, 2, 4])
console.log(bubbleSort([6, 8, 2, 4, 234, 1, 34, 7]))
