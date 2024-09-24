// TODO: Check if the emptyArrayValue is a good idea. It's not very intuitive to have a default value for an empty array.
// TODO: Consider accept numbers as a rest parameter instead of an array.
/**
 * Calculates the average of an array of numbers.
 *
 * @param {number[]} numbers - The array of numbers to average.
 * @param {number} [emptyArrayValue] - The value to return if the array is empty.
 * @returns {number} The average of the numbers, or the emptyArrayValue if the array is empty.
 *
 * @example
 * // Calculates the average of [1, 2, 3, 4, 5]
 * avg([1, 2, 3, 4, 5]); // returns 3
 *
 * @example
 * // Calculates the average of [10, 20, 30]
 * avg([10, 20, 30]); // returns 20
 *
 * @example
 * // Returns 0 for an empty array with emptyArrayValue set to 0
 * avg([], 0); // returns 0
 */
export default function avg(numbers: number[], emptyArrayValue?: number): number {
  if (numbers.length === 0) {
    if (emptyArrayValue !== undefined) {
      return emptyArrayValue;
    } else {
      throw new Error("Array cannot be empty");
    }
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
