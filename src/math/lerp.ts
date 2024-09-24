/**
 * Linearly interpolates between two values.
 *
 * @param {number} start - The starting value.
 * @param {number} end - The ending value.
 * @param {number} t - The interpolation factor, typically between 0 and 1.
 * @returns {number} The interpolated value.
 */
export default function lerp(start: number, end: number, t: number): number {
  return start * (1 - t) + end * t;
}
