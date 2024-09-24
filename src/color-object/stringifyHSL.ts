import assertValidHSL from "./guards/assertValidHSL";
import { ColorHSL } from "./types";

/**
 * Converts an HSL or HSLA color object to an HSL or HSLA color string.
 *
 * @param {ColorHSL} color - The HSL or HSLA color object to convert.
 * @param {boolean} [alpha=false] - Whether to include the alpha channel in the output string.
 *   - true: include alpha channel in the format "hsla(h, s%, l%, a)".
 *   - false: omit alpha channel in the format "hsl(h, s%, l%)".
 * @returns {string} The HSL or HSLA color string.
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 1 } to "hsl(0, 100%, 50%)"
 * stringifyHSL({ h: 0, s: 100, l: 50, a: 1 }); // returns "hsl(0, 100%, 50%)"
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 0.5 } to "hsla(0, 100%, 50%, 0.5)"
 * stringifyHSL({ h: 0, s: 100, l: 50, a: 0.5 }, true); // returns "hsla(0, 100%, 50%, 0.5)"
 */
function stringifyHSL(color: ColorHSL, alpha = false): string {
  assertValidHSL(color);
  const { h, s, l, a } = color;
  return alpha ? `hsla(${h}, ${s}%, ${l}%, ${a})` : `hsl(${h}, ${s}%, ${l}%)`;
}

export default stringifyHSL;