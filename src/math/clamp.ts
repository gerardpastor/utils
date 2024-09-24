/**
 * Clamps a number within the inclusive range specified by the min and max values.
 *
 * @param {number} value - The number to clamp.
 * @param {number} [min=0] - The lower bound of the range. Defaults to 0.
 * @param {number} [max=1] - The upper bound of the range. Defaults to 1.
 * @returns {number} - The clamped value.
 *
 * @example
 * // Clamps 0.5 within the range 0 to 1
 * clamp(0.5); // returns 0.5
 *
 * @example
 * // Clamps -1 within the range 0 to 1
 * clamp(-1); // returns 0
 *
 * @example
 * // Clamps 2 within the range 0 to 1
 * clamp(2); // returns 1
 *
 * @example
 * // Clamps 5 within the range 1 to 10
 * clamp(5, 1, 10); // returns 5
 *
 * @example
 * // Clamps -5 within the range 1 to 10
 * clamp(-5, 1, 10); // returns 1
 *
 * @example
 * // Clamps 15 within the range 1 to 10
 * clamp(15, 1, 10); // returns 10
 */
function clamp(value: number, min: number = 0, max: number = 1): number {
  if (min > max) [min, max] = [max, min];
  return Math.min(Math.max(value, min), max);
}

export default clamp;
