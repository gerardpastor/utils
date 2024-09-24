// import { ColorRGB } from "./types";

// /**
//  * Parses an RGB or RGBA color string and returns an RGB or RGBA color object.
//  *
//  * @param {string} colorString - The RGB or RGBA color string to parse. It should be in the format "rgb(r, g, b)" or "rgba(r, g, b, a)" where r, g, and b are integers between 0 and 255, and a is a number between 0 and 1.
//  * @returns {ColorRGB | ColorRGBA | null} An object containing the RGB or RGBA values, or null if the input string is invalid.
//  *
//  * @example
//  * // Parses "rgb(255, 0, 0)" to { r: 255, g: 0, b: 0, a: 1 }
//  * parseColor("rgb(255, 0, 0)"); // returns { r: 255, g: 0, b: 0, a: 1 }
//  *
//  * @example
//  * // Parses "rgba(255, 0, 0, 0.5)" to { r: 255, g: 0, b: 0, a: 0.5 }
//  * parseColor("rgba(255, 0, 0, 0.5)"); // returns { r: 255, g: 0, b: 0, a: 0.5 }
//  *
//  * @example
//  * // Parses "rgb(0, 255, 0)" to { r: 0, g: 255, b: 0, a: 1 }
//  * parseColor("rgb(0, 255, 0)"); // returns { r: 0, g: 255, b: 0, a: 1 }
//  *
//  * @example
//  * // Parses "rgba(0, 0, 255, 0.75)" to { r: 0, g: 0, b: 255, a: 0.75 }
//  * parseColor("rgba(0, 0, 255, 0.75)"); // returns { r: 0, g: 0, b: 255, a: 0.75 }
//  *
//  * @example
//  * // Returns null for an invalid RGB string
//  * parseColor("rgb(256, 0, 0)"); // returns null
//  *
//  * @example
//  * // Returns null for an invalid RGBA string
//  * parseColor("rgba(0, 0, 255, 1.5)"); // returns null
//  */
// function parseRGB(colorString: string): ColorRGB  {
//   const RGB_REGEX = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
//   const RGBA_REGEX = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0|1|0?\.\d+)\s*\)$/;

//   let match = colorString.match(RGB_REGEX);
//   if (match) {
//     const [r, g, b] = match.slice(1).map(Number) as [number, number, number];
//     if (r <= 255 && g <= 255 && b <= 255) {
//       return { r, g, b, a: 1 } as ColorRGB
//     }
//   }

//   match = colorString.match(RGBA_REGEX);
//   if (match) {
//     const [r, g, b, a] = match.slice(1).map(Number) as [number, number, number, number];
//     if (r <= 255 && g <= 255 && b <= 255 && a >= 0 && a <= 1) {
//       return { r, g, b, a: parseFloat(a) };
//     }
//   }

//   return null;
// }

// export default parseColor;
