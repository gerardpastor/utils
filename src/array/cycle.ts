/**
 * Cycles through an array of values, returning the value at the specified index.
 * If the index is greater than the length of the array, it wraps around.
 * If the index is negative, it wraps around from the end of the array.
 *
 * @param {T[]} values - The array of values to cycle through.
 * @param {number} index - The index to retrieve the value from.
 * @returns {T} The value at the specified index, wrapped around if necessary.
 *
 * @example
 * // Cycles through the array ['a', 'b', 'c'] and returns the value at index 4
 * cycle(['a', 'b', 'c'], 4); // returns 'b'
 *
 * @example
 * // Cycles through the array [1, 2, 3] and returns the value at index 5
 * cycle([1, 2, 3], 5); // returns 3
 *
 * @example
 * // Cycles through the array ['a', 'b', 'c'] and returns the value at index -1
 * cycle(['a', 'b', 'c'], -1); // returns 'c'
 */
export default function cycle<T>(values: T[], index: number): T {
  if (values.length === 0) {
    throw new Error("Values array cannot be empty");
  }
  const adjustedIndex = ((index % values.length) + values.length) % values.length;
  return values[adjustedIndex]!;
}

// const cycleString = cycle(["a", "b", "c"], 4); // returns 'b'
// const cycleNumbers = cycle([1, 2, 3], 5); // returns 3
// const cycleBooleans = cycle([true, false], 2); // returns true
// const cycleArrays = cycle([[1, 2], [3, 4], [5, 6]], 3); // returns [5, 6]
// const cycleObjects = cycle([{ key: "value" }, { key: "value" }], 2); // returns { key: "value" }
