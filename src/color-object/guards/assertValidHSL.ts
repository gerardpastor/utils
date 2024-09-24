import { ColorHSL } from "../types";

/**
 * Asserts that the given HSL color object is valid.
 * Throws an error if any of the HSL values are out of range.
 *
 * @param {ColorHSL} color - The HSL color object to validate.
 * @throws {Error} If any of the HSL values are out of range.
 *
 * @example
 * // Asserts that { h: 0, s: 100, l: 50, a: 1 } is a valid HSL color object
 * assertValidHSL({ h: 0, s: 100, l: 50, a: 1 }); // no error thrown
 *
 * @example
 * // Throws an error for { h: 361, s: 100, l: 50, a: 1 }
 * assertValidHSL({ h: 361, s: 100, l: 50, a: 1 }); // throws "Hue value must be between 0 and 360"
 */
function assertValidHSL(color: ColorHSL): void {
  const { h, s, l, a } = color;

  if (h < 0 || h > 360) {
    throw new Error("Hue value must be between 0 and 360");
  }

  if (s < 0 || s > 100) {
    throw new Error("Saturation value must be between 0 and 100");
  }

  if (l < 0 || l > 100) {
    throw new Error("Lightness value must be between 0 and 100");
  }

  if (a < 0 || a > 1) {
    throw new Error("Alpha value must be between 0 and 1");
  }
}

export default assertValidHSL;