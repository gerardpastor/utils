import { HSL_MAX, HUE_MAX, RGB_MAX } from "./constants";
import assertValidRGB from "./guards/assertValidRGB";
import { ColorHSL, ColorRGB } from "./types";

/**
 * Converts an RGB color object to an HSL color object.
 *
 * @param {ColorRGB} rgb - The RGB color object to convert.
 * @returns {ColorHSL} An object containing the HSL values.
 *
 * @example
 * // Converts { r: 255, g: 0, b: 0, a: 1 } to { h: 0, s: 100, l: 50, a: 1 }
 * RGBToHSL({ r: 255, g: 0, b: 0, a: 1 }); // returns { h: 0, s: 100, l: 50, a: 1 }
 *
 * @example
 * // Converts { r: 0, g: 255, b: 0, a: 0.5 } to { h: 120, s: 100, l: 50, a: 0.5 }
 * RGBToHSL({ r: 0, g: 255, b: 0, a: 0.5 }); // returns { h: 120, s: 100, l: 50, a: 0.5 }
 */
function RGBToHSL(rgb: ColorRGB): ColorHSL {
  assertValidRGB(rgb);

  const r = rgb.r / RGB_MAX;
  const g = rgb.g / RGB_MAX;
  const b = rgb.b / RGB_MAX;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return { h: Math.round(h * HUE_MAX), s: Math.round(s * HSL_MAX), l: Math.round(l * HSL_MAX), a: rgb.a ?? 1 };
}

export default RGBToHSL;
