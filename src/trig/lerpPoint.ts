import { Point } from "./types";

/**
 * Linearly interpolates between two points.
 *
 * @param {Object} p1 - The starting point object with `x` and `y` properties.
 * @param {Object} p2 - The ending point object with `x` and `y` properties.
 * @param {number} t - The interpolation factor, typically between 0 and 1.
 * @returns {Object} The interpolated point object with `x` and `y` properties.
 */
export function lerpPoint(p1: Point, p2: Point, t: number): Point {
  return {
    x: p1.x * (1 - t) + p2.x * t,
    y: p1.y * (1 - t) + p2.y * t,
  };
}
