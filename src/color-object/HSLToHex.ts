import HSLToRGB from "./HSLToRGB";
import RGBToHex from "./RGBToHex";
import { ColorHSL } from "./types";

/**
 * Converts an HSL or HSLA color object to a hexadecimal color string.
 *
 * @param {ColorHSL} hsl - The HSL or HSLA color object to convert.
 * @param {boolean} [alpha] - Whether to include the alpha channel in the output string.
 *   - true: include alpha channel (set to 1 if not provided in hsl).
 *   - false: omit alpha channel (even if provided in hsl).
 *   - undefined: include alpha channel if provided in hsl and less than 1, omit if not provided or equal to 1.
 * @returns {string} The hexadecimal color string.
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 1 } to "#ff0000"
 * HSLToHex({ h: 0, s: 100, l: 50, a: 1 }); // returns "#ff0000"
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 0.5 } to "#ff000080"
 * HSLToHex({ h: 0, s: 100, l: 50, a: 0.5 }, true); // returns "#ff000080"
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50 } to "#ff0000"
 * HSLToHex({ h: 0, s: 100, l: 50 }); // returns "#ff0000"
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 0.5 } to "#ff000080"
 * HSLToHex({ h: 0, s: 100, l: 50, a: 0.5 }); // returns "#ff000080"
 */
export default function HSLToHex(hsl: ColorHSL, alpha?: boolean): string {
  const rgb = HSLToRGB(hsl);
  return RGBToHex(rgb, alpha);
}
