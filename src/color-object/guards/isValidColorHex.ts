const FULL_HEX_REGEX = /^#?[a-fA-F0-9]{8}$/;
const SHORTHAND_ALPHA_REGEX = /^#?[a-fA-F0-9]{4}$/;
const FULL_ALPHA_REGEX = /^#?[a-fA-F0-9]{8}$/;
const SHORTHAND_REGEX = /^#?[a-fA-F0-9]{3}$/;

/**
 * Checks if a given string is a valid hexadecimal color string.
 *
 * @param {string} hex - The hexadecimal color string to validate. It can be in shorthand (e.g., "#123") or full form (e.g., "#123456"). The leading '#' is optional.
 * @returns {boolean} True if the hexadecimal color string is valid, false otherwise.
 *
 * @example
 * // Checks if "#123456" is a valid hexadecimal color string
 * isValidColorHex("#123456"); // returns true
 *
 * @example
 * // Checks if "123456" is a valid hexadecimal color string
 * isValidColorHex("123456"); // returns true
 *
 * @example
 * // Checks if "#123" is a valid hexadecimal color string
 * isValidColorHex("#123"); // returns true
 *
 * @example
 * // Checks if "#1234" is a valid hexadecimal color string
 * isValidColorHex("#1234"); // returns true
 *
 * @example
 * // Checks if "123" is a valid hexadecimal color string
 * isValidColorHex("123"); // returns true
 *
 * @example
 * // Checks if "#12345678" is a valid hexadecimal color string
 * isValidColorHex("#12345678"); // returns true
 *
 * @example
 * // Checks if "12345678" is a valid hexadecimal color string
 * isValidColorHex("12345678"); // returns true
 *
 * @example
 * // Checks if "#12345G" is a valid hexadecimal color string
 * isValidColorHex("#12345G"); // returns false
 */
function isValidColorHex(hex: string): boolean {
  const HEX_REGEX = /^#?([a-fA-F0-9]{3}|[a-fA-F0-9]{4}|[a-fA-F0-9]{6}|[a-fA-F0-9]{8})$/;
  return HEX_REGEX.test(hex);
}

export default isValidColorHex;
