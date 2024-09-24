import hexToRGB from "./hexToRGB";
import RGBToHSL from "./RGBToHSL";
import { ColorHex, ColorHSL } from "./types";

/**
 * Converts a hexadecimal color string to an HSL color object.
 *
 * @param {ColorHex} hex - The hexadecimal color string to convert. It can be in shorthand (e.g., "#123") or full form (e.g., "#123456"). The leading '#' is optional.
 * @returns {ColorHSL} An object containing the HSL values.
 *
 * @example
 * // Converts "#123456" to { h: 210, s: 65, l: 33, a: 1 }
 * hexToHSL("#123456"); // returns { h: 210, s: 65, l: 33, a: 1 }
 *
 * @example
 * // Converts "123456" to { h: 210, s: 65, l: 33, a: 1 }
 * hexToHSL("123456"); // returns { h: 210, s: 65, l: 33, a: 1 }
 *
 * @example
 * // Converts "#123" to { h: 210, s: 50, l: 20, a: 1 }
 * hexToHSL("#123"); // returns { h: 210, s: 50, l: 20, a: 1 }
 *
 * @example
 * // Converts "123" to { h: 210, s: 50, l: 20, a: 1 }
 * hexToHSL("123"); // returns { h: 210, s: 50, l: 20, a: 1 }
 *
 * @example
 * // Converts "#12345678" to { h: 210, s: 65, l: 33, a: 0.47 }
 * hexToHSL("#12345678"); // returns { h: 210, s: 65, l: 33, a: 0.47 }
 *
 * @example
 * // Converts "12345678" to { h: 210, s: 65, l: 33, a: 0.47 }
 * hexToHSL("12345678"); // returns { h: 210, s: 65, l: 33, a: 0.47 }
 */
function hexToHSL(hex: ColorHex): ColorHSL {
  const rgb = hexToRGB(hex);
  return RGBToHSL(rgb);
}

export default hexToHSL;
