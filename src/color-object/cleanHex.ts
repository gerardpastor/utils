/**
 * Cleans a hexadecimal color string by ensuring it starts with a '#' and is in the correct format.
 * Supports 3-digit, 6-digit, 4-digit (with alpha), and 8-digit (with alpha) hex formats.
 * Expands shorthand hex formats (e.g., "123" to "112233").
 *
 * @param {string} hex - The hexadecimal color string to clean.
 * @returns {string} The cleaned and expanded hexadecimal color string.
 *
 * @example
 * // Cleans and expands the hex string "123" to "#112233"
 * cleanHex("123"); // returns "#112233"
 *
 * @example
 * // Cleans and expands the hex string "#123456" to "#123456"
 * cleanHex("#123456"); // returns "#123456"
 *
 * @example
 * // Cleans and expands the hex string "abc" to "#aabbcc"
 * cleanHex("aBc"); // returns "#aabbcc"
 *
 * @example
 * // Cleans and expands the hex string "#1234" to "#11223344"
 * cleanHex("#1234"); // returns "#11223344"
 *
 * @example
 * // Cleans and expands the hex string "12345678" to "#12345678"
 * cleanHex("12345678"); // returns "#12345678"
 */
export default function cleanHex(hex: string): string {
  // Remove any leading '#' characters
  hex = hex.replace(/^#/, "");

  // Ensure the hex string is either 3, 6, 4, or 8 characters long
  if (![3, 6, 4, 8].includes(hex.length)) {
    throw new Error("Hex string must be either 3, 6, 4, or 8 characters long (excluding the leading '#')");
  }

  // Expand shorthand hex formats
  if (hex.length < 6) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("");
  }

  // Return the cleaned and expanded hex string with a leading '#'
  return `#${hex.toLocaleLowerCase()}`;
}
