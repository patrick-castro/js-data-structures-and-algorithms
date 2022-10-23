/**
 * Merge two sorted arrays
 * @param {number[]} arr1 - array to merge with arr2
 * @param {number[]} arr2 - array to merge with arr1
 * @return {number[]} - merged array
 */
const merge = (arr1 = [], arr2 = []) => {
  let i = 0
  let j = 0
  const combinedArr = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combinedArr.push(arr1[i])
      i++
    } else {
      combinedArr.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    combinedArr.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    combinedArr.push(arr2[j])
    j++
  }

  return combinedArr
}

/**
 * If the array is empty or has one element, return the array. Otherwise, split the array into two
 * halves, sort each half, and merge the sorted halves
 * @param {number[]} - arr the array to be sorted
 * @return {number[]} - The sorted array
 */
const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, middle))
  const right = mergeSort(arr.slice(middle))
  return merge(left, right)
}

console.log(mergeSort([2, 1, 4, 3, 9, 4, 9]))
