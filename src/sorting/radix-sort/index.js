/**
 * Returns the length of the longest number in an array
 * @param {number[]} - arr The array of numbers to sort
 * @return {number} - The length of the longest number in the array.
 */
const getMaxDigitsLength = (arr) => {
  let length = 0
  arr.forEach((num) => {
    const numLen = num.toString().length
    if (numLen > length) {
      length = numLen
    }
  })

  return length
}

/**
 * Returns the digit in num at the given place value
 * @param {number} num - the number we're trying to get the digit of
 * @param {number} i - the current digit we're on
 * @return {number} - The digit at the index of the number.
 */
const getDigit = (num, i) => {
  const pow = 10 ** i
  const intDividend = Math.floor(num / pow)

  return intDividend % 10
}

/**
 * We loop through each digit of the largest number in the array, and for each digit, we put each
 * number in the array in the corresponding bucket based on that digit
 * @param {number[]} arr - The array to sort
 * @returns {number[]} - sorted array
 */
const radixSort = (arr) => {
  const maxLen = getMaxDigitsLength(arr)

  for (let i = 0; i < maxLen; i++) {
    const buckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigit(arr[j], i)
      buckets[digit].push(arr[j])
    }

    arr = [].concat(...buckets)
  }

  return arr
}

console.log(radixSort([7, 6234, 21, 46, 18, 192, 1]))
