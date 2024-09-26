import { inRange } from "../../math/inRange";
import { HSL_MAX, HUE_MAX } from "../constants";
import { ColorHSL } from "../types";

/**
 * Checks if a given array represents a valid HSL color.
 *
 * @param {number[]} color - The array of HSL values. It should contain 3 elements where the first element is an integer between 0 and 360 representing the hue, and the second and third elements are percentages between 0 and 100 representing the saturation and lightness.
 * @returns {boolean} True if the color is valid, false otherwise.
 *
 * @example
 * // Checks if [120, 100, 50] is a valid HSL array
 * isColorHSL([120, 100, 50]); // returns true
 *
 * @example
 * // Checks if [361, 100, 50] is a valid HSL array
 * isColorHSL([361, 100, 50]); // returns false
 *
 * @example
 * // Checks if [120, 101, 50] is a valid HSL array
 * isColorHSL([120, 101, 50]); // returns false
 *
 * @example
 * // Checks if [120, 100, 101] is a valid HSL array
 * isColorHSL([120, 100, 101]); // returns false
 */
export function isValidColorHSL(color: ColorHSL): boolean {
  const { h, s, l, a = 1 } = color;
  return inRange(h, 0, HUE_MAX) && inRange(s, 0, HSL_MAX) && inRange(l, 0, HSL_MAX) && inRange(a, 0, 1);
}
