import assertValidRGB from "./guards/assertValidRGB";
import { ColorRGB } from "./types";

/**
 * Converts an RGB or RGBA color object to a hexadecimal color string.
 *
 * @param {ColorRGB} rgb - The RGB or RGBA color object to convert.
 * @param {boolean} [withAlpha] - Whether to include the alpha channel in the output string.
 *   - true: include alpha channel (set to 1 if not provided in rgb).
 *   - false: omit alpha channel (even if provided in rgb).
 *   - undefined: include alpha channel if provided in rgb and less than 1, omit if not provided or equal to 1.
 * @returns {string} The hexadecimal color string.
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 1 } to "#ff0000"
 * RGBToHex({ r: 255, g: 0, b: 0, a: 1 }); // returns "#ff0000"
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 0.5 } to "#ff000080"
 * RGBToHex({ r: 255, g: 0, b: 0, a: 0.5 }, true); // returns "#ff000080"
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0 } to "#ff0000"
 * RGBToHex({ r: 255, g: 0, b: 0 }); // returns "#ff0000"
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 0.5 } to "#ff000080"
 * RGBToHex({ r: 255, g: 0, b: 0, a: 0.5 }); // returns "#ff000080"
 */
export default function RGBToHex(rgb: ColorRGB, withAlpha?: boolean): string {
  assertValidRGB(rgb);

  const { r, g, b, a } = rgb;

  // if (!isValidColorRGB(rgb)) {
  //   throw new TypeError(`Expected a valid RGB color object but received: ${JSON.stringify(rgb)}`);
  // }

  const hex = (value: number) => value.toString(16).padStart(2, "0");

  if (withAlpha === true || (withAlpha === undefined && a < 1)) {
    const alpha = Math.round(a * 255);
    return `#${hex(r)}${hex(g)}${hex(b)}${hex(alpha)}`;
  }

  return `#${hex(r)}${hex(g)}${hex(b)}`;
}
