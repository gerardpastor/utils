import { clamp } from "../math";
import { RGB_MAX } from "./constants";
import { ColorRGB } from "./types";

/**
 * Clamps the RGB(A) values of a color to ensure they are within the valid range.
 *
 * @param {ColorRGB} color - The color object containing r, g, b, and optionally a values.
 * @returns {ColorRGB} - The clamped color object.
 *
 * @example
 * const color = { r: 300, g: -20, b: 255, a: 1.5 };
 * const clampedColor = clampRGB(color);
 * // clampedColor will be { r: 255, g: 0, b: 255, a: 1 }
 */
export function clampRGB(color: ColorRGB): ColorRGB {
  const r = clamp(color.r, 0, RGB_MAX);
  const g = clamp(color.g, 0, RGB_MAX);
  const b = clamp(color.b, 0, RGB_MAX);
  const a = clamp(color.a ?? 1, 0, 1);

  return color.a === undefined ? { r, g, b } : { r, g, b, a };
}
