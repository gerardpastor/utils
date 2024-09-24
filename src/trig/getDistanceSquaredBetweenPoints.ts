/**
 * Calculates the squared distance between two points.
 * 
 * This function can be called with either two point objects or four individual coordinates.
 *
 * @param {Object} p1 - The first point object with `x` and `y` properties.
 * @param {Object} p2 - The second point object with `x` and `y` properties.
 * @returns {number} The squared distance between the two points.
 *
 * @param {number} x1 - The x-coordinate of the first point.
 * @param {number} y1 - The y-coordinate of the first point.
 * @param {number} x2 - The x-coordinate of the second point.
 * @param {number} y2 - The y-coordinate of the second point.
 * @returns {number} The squared distance between the two points.
 */
function getDistanceSquaredBetweenPoints(p1: { x: number; y: number }, p2: { x: number; y: number }): number;
function getDistanceSquaredBetweenPoints(x1: number, y1: number, x2: number, y2: number): number;
function getDistanceSquaredBetweenPoints(
  ...args: [{ x: number; y: number }, { x: number; y: number }] | [number, number, number, number]
): number {
  const [x1, y1, x2, y2] = args.length === 2 ? [args[0].x, args[0].y, args[1].x, args[1].y] : args;

  const dx = x2 - x1;
  const dy = y2 - y1;

  return dx * dx + dy * dy;
}

export default getDistanceSquaredBetweenPoints;
