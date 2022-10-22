/**
 * We start at the second element in the array and compare it to the element before it. If the element
 * before it is greater than the current element, we swap the two elements. We then move on to the next
 * element and repeat the process
 * @param {number[]} arr - the array to be sorted
 * @returns {number[]} - sorted array
 */
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currIndexVal = arr[i]
    for (let j = i - 1; j >= 0 && arr[j] >= currIndexVal; j--) {
      if (currIndexVal < arr[j]) {
        arr[j + 1] = arr[j]
      }

      if (j === 0 || arr[j - 1] <= currIndexVal) {
        arr[j] = currIndexVal
        break
      }
    }
  }

  return arr
}

console.log(insertionSort([7, 6, 2, 4, 18, 192, 1]))
