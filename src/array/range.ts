/**
 * Generates an array of numbers within a specified range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @param {number} [step=1] - The step between each number in the range. The sign of the step will be adjusted based on the order of start and end.
 * @returns {number[]} An array of numbers within the specified range.
 *
 * @example
 * // Generates an array from 1 to 5
 * range(1, 5); // returns [1, 2, 3, 4, 5]
 *
 * @example
 * // Generates an array from 0 to 10 with a step of 2
 * range(0, 10, 2); // returns [0, 2, 4, 6, 8, 10]
 *
 * @example
 * // Generates an array from 5 to 1 with a step of 1
 * range(5, 1, 1); // returns [5, 4, 3, 2, 1]
 */
function range(end: number): number[];
function range(start: number, end: number, step?: number): number[];
function range(...args: [number, number?, number?]): number[] {
  const [start, end, step = 1] = args.length === 1 ? [0, args[0], 1] : (args as [number, number, number?]);

  if (step === 0) {
    throw new Error("Step must not be zero");
  }

  const adjustedStep = Math.abs(step);
  const result: number[] = [];

  if (start < end) {
    for (let i = start; i <= end; i += adjustedStep) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= adjustedStep) {
      result.push(i);
    }
  }

  return result;
}

export default range;
