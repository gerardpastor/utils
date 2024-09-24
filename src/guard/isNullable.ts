/**
 * Checks if a value is null or undefined.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is null or undefined, false otherwise.
 */
function isNullable(value: unknown): boolean {
  return value === null || value === undefined;
}

export default isNullable;
