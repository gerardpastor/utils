import lerp from "./lerp";

/**
 * Linearly interpolates between two values over a specified range.
 *
 * @param {number} start - The starting value.
 * @param {number} end - The ending value.
 * @param {number} t - The interpolation factor.
 * @param {number} [tMin=0] - The minimum value of the interpolation factor range. Default is 0.
 * @param {number} [tMax=1] - The maximum value of the interpolation factor range. Default is 1.
 * @returns {number} The interpolated value.
 */
export default function lerpRange(start: number, end: number, t: number, tMin: number = 0, tMax: number = 1): number {
  return lerp(start, end, (t - tMin) / (tMax - tMin));
}
