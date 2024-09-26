import { ColorRGB } from "../types";

/**
 * Asserts that the given RGB color object is valid.
 * Throws an error if any of the RGB values are out of range.
 *
 * @param {ColorRGB} color - The RGB color object to validate.
 * @throws {Error} If any of the RGB values are out of range.
 *
 * @example
 * // Asserts that { r: 255, g: 0, b: 0, a: 1 } is a valid RGB color object
 * assertValidRGB({ r: 255, g: 0, b: 0, a: 1 }); // no error thrown
 *
 * @example
 * // Throws an error for { r: 256, g: 0, b: 0, a: 1 }
 * assertValidRGB({ r: 256, g: 0, b: 0, a: 1 }); // throws "RGB values must be between 0 and 255"
 */
export function assertValidRGB(color: ColorRGB): void {
  const { r, g, b, a = 1 } = color;

  if (r < 0 || r > 255) {
    throw new Error("RGB values must be between 0 and 255");
  }

  if (g < 0 || g > 255) {
    throw new Error("RGB values must be between 0 and 255");
  }

  if (b < 0 || b > 255) {
    throw new Error("RGB values must be between 0 and 255");
  }

  if (a < 0 || a > 1) {
    throw new Error("Alpha value must be between 0 and 1");
  }
}
