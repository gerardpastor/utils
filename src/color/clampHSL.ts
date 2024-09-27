import { clamp } from "../math";
import { HUE_MAX, HSL_MAX } from "./constants";
import { ColorHSL } from "./types";

/**
 * Clamps the HSL(A) values of a color to ensure they are within the valid range.
 *
 * @param {ColorHSL} color - The color object containing h, s, l, and optionally a values.
 * @returns {ColorHSL} - The clamped color object.
 *
 * @example
 * const color = { h: 370, s: -10, l: 110, a: 1.5 };
 * const clampedColor = clampHSL(color);
 * // clampedColor will be { h: 360, s: 0, l: 100, a: 1 }
 */
export function clampHSL(color: ColorHSL): ColorHSL {
  const h = clamp(color.h, 0, HUE_MAX);
  const s = clamp(color.s, 0, HSL_MAX);
  const l = clamp(color.l, 0, HSL_MAX);
  const a = clamp(color.a ?? 1, 0, 1);

  return color.a === undefined ? { h, s, l } : { h, s, l, a };
}
