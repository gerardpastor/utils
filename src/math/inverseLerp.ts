/**
 * Calculates the interpolation factor (t) for a given value within a specified range.
 *
 * @param {number} start - The starting value of the range.
 * @param {number} end - The ending value of the range.
 * @param {number} value - The value for which to calculate the interpolation factor.
 * @returns {number} The interpolation factor (t), typically between 0 and 1.
 *
 * @example
 * // Calculates the interpolation factor for value 5 within the range 0 to 10
 * inverseLerp(0, 10, 5); // returns 0.5
 *
 * @example
 * // Calculates the interpolation factor for value 15 within the range 10 to 20
 * inverseLerp(10, 20, 15); // returns 0.5
 *
 * @example
 * // Calculates the interpolation factor for value -5 within the range -10 to 0
 * inverseLerp(-10, 0, -5); // returns 0.5
 */
export function inverseLerp(start: number, end: number, value: number): number {
  if (start === end) {
    return 0; // Avoid division by zero
  }
  return (value - start) / (end - start);
}
