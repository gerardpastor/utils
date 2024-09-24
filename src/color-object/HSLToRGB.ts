import { HSL_MAX, HUE_MAX, RGB_MAX } from "./constants";
import assertValidHSL from "./guards/assertValidHSL";
import { ColorHSL, ColorRGB } from "./types";

/**
 * Converts an HSL or HSLA color object to an RGB or RGBA color object.
 *
 * @param {ColorHSL} hsl - The HSL or HSLA color object to convert.
 * @returns {ColorRGB} An object containing the RGB or RGBA values.
 *
 * @example
 * // Converts { h: 0, s: 100, l: 50, a: 1 } to { r: 255, g: 0, b: 0, a: 1 }
 * HSLToRGB({ h: 0, s: 100, l: 50, a: 1 }); // returns { r: 255, g: 0, b: 0, a: 1 }
 *
 * @example
 * // Converts { h: 120, s: 100, l: 50, a: 0.5 } to { r: 0, g: 255, b: 0, a: 0.5 }
 * HSLToRGB({ h: 120, s: 100, l: 50, a: 0.5 }); // returns { r: 0, g: 255, b: 0, a: 0.5 }
 */
function HSLToRGB(hsl: ColorHSL): ColorRGB {
  assertValidHSL(hsl);

  const h = hsl.h % HUE_MAX;
  const s = hsl.s / HSL_MAX;
  const l = hsl.l / HSL_MAX;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0;
  let g = 0;
  let b = 0;

  if (0 <= h && h < 60) {
    r = c;
    g = x;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
  } else if (120 <= h && h < 180) {
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    b = x;
  }

  r = Math.round((r + m) * RGB_MAX);
  g = Math.round((g + m) * RGB_MAX);
  b = Math.round((b + m) * RGB_MAX);

  return { r, g, b, a: hsl.a };
}

export default HSLToRGB;
