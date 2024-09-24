import { StringLike } from "./types";

/**
 * Checks if a value is string-like.
 *
 * @param {unknown} value - The value to check.
 * @returns {boolean} True if the value is string-like, false otherwise.
 *
 * @example
 * // Returns true for a string
 * isStringLike("hello"); // true
 *
 * @example
 * // Returns true for a number
 * isStringLike(123); // true
 *
 * @example
 * // Returns true for a boolean
 * isStringLike(true); // true
 *
 * @example
 * // Returns false for an object
 * isStringLike({}); // false
 *
 * @example
 * // Returns false for an array
 * isStringLike([]); // false
 */
function isStringLike(value: unknown): value is StringLike {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}

export default isStringLike;
