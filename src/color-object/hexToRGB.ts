import cleanHex from "./cleanHex";
import { ColorHex, ColorRGB } from "./types";

/**
 * Converts a hexadecimal color string to an RGB color object.
 *
 * @param {ColorHex} hex - The hexadecimal color string to convert. It can be in shorthand (e.g., "#123") or full form (e.g., "#123456"). The leading '#' is optional.
 * @returns {ColorRGB} An object containing the RGB or RGB values.
 *
 * @example
 * // Converts "#123456" to { r: 18, g: 52, b: 86, a: 1 }
 * hexToRGB("#123456"); // returns { r: 18, g: 52, b: 86, a: 1 }
 *
 * @example
 * // Converts "123456" to { r: 18, g: 52, b: 86, a: 1 }
 * hexToRGB("123456"); // returns { r: 18, g: 52, b: 86, a: 1 }
 *
 * @example
 * // Converts "#123" to { r: 17, g: 34, b: 51, a: 1 }
 * hexToRGB("#123"); // returns { r: 17, g: 34, b: 51, a: 1 }
 *
 * @example
 * // Converts "123" to { r: 17, g: 34, b: 51, a: 1 }
 * hexToRGB("123"); // returns { r: 17, g: 34, b: 51, a: 1 }
 *
 * @example
 * // Converts "#12345678" to { r: 18, g: 52, b: 86, a: 0.47 }
 * hexToRGB("#12345678"); // returns { r: 18, g: 52, b: 86, a: 0.47 }
 *
 * @example
 * // Converts "12345678" to { r: 18, g: 52, b: 86, a: 0.47 }
 * hexToRGB("12345678"); // returns { r: 18, g: 52, b: 86, a: 0.47 }
 */
function hexToRGB(hex: ColorHex): ColorRGB {
  hex = cleanHex(hex).substring(1);

  // Convert hex to RGB
  const bigint = parseInt(hex.slice(0, 6), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  const a = hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1;

  return { r, g, b, a };
}

export default hexToRGB;
