/**
 * Checks if a value is not null or undefined.
 *
 * @param {T | null | undefined} value - The value to check.
 * @returns {value is T} True if the value is not null or undefined, false otherwise.
 *
 * @example
 * // Returns true for a non-null value
 * notNullable("hello"); // true
 *
 * @example
 * // Returns false for null
 * notNullable(null); // false
 *
 * @example
 * // Returns false for undefined
 * notNullable(undefined); // false
 */
export function notNullable<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}
