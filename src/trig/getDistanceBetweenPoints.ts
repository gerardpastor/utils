import { getDistanceSquaredBetweenPoints } from "./getDistanceSquaredBetweenPoints";

/**
 * Calculates the distance between two points.
 *
 * This function can be called with either two point objects or four individual coordinates.
 *
 * @param {Object} p1 - The first point object with `x` and `y` properties.
 * @param {Object} p2 - The second point object with `x` and `y` properties.
 * @returns {number} The distance between the two points.
 *
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} The distance between the two points.
 */
export function getDistanceBetweenPoints(p1: { x: number; y: number }, p2: { x: number; y: number }): number;
export function getDistanceBetweenPoints(x1: number, y1: number, x2: number, y2: number): number;
export function getDistanceBetweenPoints(
  ...args: [{ x: number; y: number }, { x: number; y: number }] | [number, number, number, number]
): number {
  const [x1, y1, x2, y2] = args.length === 2 ? [args[0].x, args[0].y, args[1].x, args[1].y] : args;
  return Math.sqrt(getDistanceSquaredBetweenPoints(x1, y1, x2, y2));
}
