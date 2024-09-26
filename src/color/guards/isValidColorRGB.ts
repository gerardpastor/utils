import { inRange } from "../../math/inRange";
import { RGB_MAX } from "../constants";
import { ColorRGB } from "../types";

/**
 * Checks if a given object represents a valid RGB color.
 *
 * @param {ColorRGB} color - The RGB color object. Each property (r, g, b) should be an integer between 0 and 255.
 * @returns {boolean} True if the color is valid, false otherwise.
 *
 * @example
 * // Checks if { r: 255, g: 0, b: 0 } is a valid RGB object
 * isColorRGB({ r: 255, g: 0, b: 0 }); // returns true
 *
 * @example
 * // Checks if { r: 256, g: 0, b: 0 } is a valid RGB object
 * isColorRGB({ r: 256, g: 0, b: 0 }); // returns false
 *
 * @example
 * // Checks if { r: 255, g: -1, b: 0 } is a valid RGB object
 * isColorRGB({ r: 255, g: -1, b: 0 }); // returns false
 *
 * @example
 * // Checks if { r: 255, g: 0, b: 0, a: 0.5 } is a valid RGB object
 * isColorRGB({ r: 255, g: 0, b: 0, a: 0.5 }); // returns true
 */
export function isValidColorRGB(color: ColorRGB): boolean {
  const { r, g, b, a = 1 } = color;
  return inRange(r, 0, RGB_MAX) && inRange(g, 0, RGB_MAX) && inRange(b, 0, RGB_MAX) && inRange(a, 0, 1);
}
