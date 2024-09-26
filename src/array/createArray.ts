/**
 * Creates an array of a specified length and fills it with the result of a callback function.
 *
 * @param {number} length - The length of the array to create.
 * @param {(v: T, k: number) => T} [mapfn] - The callback function to generate each element of the array. If not provided, the array will be filled with the index of each element.
 * @returns {any[]} An array of the specified length.
 *
 * @example
 * // Creates an array of length 5 filled with the index of each element
 * arrayFrom(5); // returns [0, 1, 2, 3, 4]
 *
 * @example
 * // Creates an array of length 5 filled with the result of the callback function
 * arrayFrom(5, () => Math.random()); // returns [0.123, 0.456, 0.789, 0.012, 0.345]
 */
export function createArray<T = number>(length: number, mapfn?: (v: unknown, k: number) => T): T[] {
  return Array.from({ length }, mapfn ?? ((_, i) => i as T));
}

// const arrayFromDefault = arrayFrom(5); // returns [0, 1, 2, 3, 4]
// const arrayFromNumbers = arrayFrom(5, () => Math.random()); // returns [0.123, 0.456, 0.789, 0.012, 0.345]
// const arrayFromStrings = arrayFrom(3, (_, i) => `item${i + 1}`); // returns ["item1", "item2", "item3"]
// const arrayFromBooleans = arrayFrom(4, (_, i) => i % 2 === 0); // returns [true, false, true, false]
// const arrayFromArrays = arrayFrom(3, (_, i) => [i, `item${i + 1}`]); // returns [[], [], []]
// const arrayFromObjects = arrayFrom(2, (_, i) => ({ key: i })); // returns [{}, {}]
