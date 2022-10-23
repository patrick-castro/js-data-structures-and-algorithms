const { swap } = require('../helper')

/**
 * We're going to take the first element in the array and use it as a pivot. We're going to move all
 * the elements that are less than the pivot to the left of the pivot, and all the elements that are
 * greater than the pivot to the right of the pivot
 *
 * @param {number[]} - arr the array we're sorting
 * @param {number} start - the index of the first element in the array
 * @param {number} end - the last index of the array
 * @return {number} - the index of the pivot
 */
const pivot = (arr, start = 0, end = arr.length - 1) => {
  const pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx
}

/**
 * If the left index is less than the right index, then we partition the array and recursively call
 * quickSort on the left and right sides of the pivot
 *
 * @param {number[]} arr the array we're sorting
 * @param {number} left - the left index of the array
 * @param {number} right the last index of the array
 * @return {number[]} - the sorted array
 */
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex - 1)

    //right
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3, 7]))
