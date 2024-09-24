import assertValidRGB from "./guards/assertValidRGB";
import { ColorRGB } from "./types";

/**
 * Converts an RGB or RGBA color object to an RGB or RGBA color string.
 *
 * @param {ColorRGB} color - The RGB or RGBA color object to convert.
 * @param {boolean} [alpha=false] - Whether to include the alpha channel in the output string.
 *   - true: include alpha channel in the format "rgba(r, g, b, a)".
 *   - false: omit alpha channel in the format "rgb(r, g, b)".
 * @returns {string} The RGB or RGBA color string.
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 1 } to "rgb(255, 0, 0)"
 * stringifyRGB({ r: 255, g: 0, b: 0, a: 1 }); // returns "rgb(255, 0, 0)"
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 0.5 } to "rgba(255, 0, 0, 0.5)"
 * stringifyRGB({ r: 255, g: 0, b: 0, a: 0.5 }, true); // returns "rgba(255, 0, 0, 0.5)"
 */
function stringifyRGB(color: ColorRGB, alpha = false): string {
  assertValidRGB(color);
  const { r, g, b, a } = color;
  return alpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
}

export default stringifyRGB;
