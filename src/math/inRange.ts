/**
 * Checks if a number is within a specified range.
 *
 * @param {number} value - The number to check.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {boolean} True if the number is within the range, false otherwise.
 *
 * @example
 * // Checks if 5 is within the range 1 to 10
 * inRange(5, 1, 10); // returns true
 *
 * @example
 * // Checks if 0 is within the range 1 to 10
 * inRange(0, 1, 10); // returns false
 */
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
