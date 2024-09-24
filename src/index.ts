/**
 * Utility functions for generating random numbers and picking random elements from arrays and objects.
 */

/**
 * Generate a random number from 0 to max.
 * @param max - The upper bound for the random number (exclusive).
 * @param step - The step value for the random number generation (default is 1).
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random number from 0 to max (exclusive) with the specified step.
 */
export function randBelow(max: number, step: number = 1, customRandFn?: () => number): number {
  const randFn = customRandFn ?? Math.random;
  return Math.floor(randFn() * (max / step)) * step;
}

/**
 * Generate a random number from a specified range.
 * @param min - The lower bound of the range (inclusive).
 * @param max - The upper bound of the range (exclusive).
 * @param step - The step value for the random number generation (default is 1).
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random number from the specified range with the specified step.
 */
export function randRange(min: number, max: number, step: number = 1, customRandFn?: () => number): number {
  return randBelow(max - min, step, customRandFn) + min;
}

/**
 * Create a new array with the elements of the given array shuffled.
 * @param array - The array to be shuffled.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A new array containing the shuffled elements of the original array.
 */
export function shuffle<T extends any[] | readonly any[]>(array: T, customRandFn?: () => number): T[number][] {
  const randFn = customRandFn ?? Math.random;
  return [...array].sort(() => randFn() - 0.5);
}
/**
 * Get a random index from the given array.
 * @param array - The array from which the random index will be selected.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random index within the array bounds.
 */
export function randIndex<T extends any[] | readonly any[]>(array: T, customRandFn?: () => number): number {
  const index = randBelow(array.length, 1, customRandFn);
  return index in array ? index : -1;
}

/**
 * Get a random element from the given array.
 * @param array - The array from which the random element will be picked.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random element from the array.
 */
export function randElement<T extends any[] | readonly any[]>(
  array: T,
  customRandFn?: () => number,
): T[number] | undefined {
  const index = randIndex(array, customRandFn);
  return index in array ? array[index] : undefined;
}

/**
 * Get a random subset of elements from the given array.
 * @param array - The array from which the random subset will be picked.
 * @param size - The number of elements to pick in the random subset (default is 1).
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A new array containing a random subset of elements from the original array.
 */
export function randSubset<T extends any[] | readonly any[]>(
  array: T,
  size: number = 1,
  customRandFn?: () => number,
): T[number][] {
  const shuffledArray = shuffle(array, customRandFn);
  return shuffledArray.slice(0, Math.min(size, shuffledArray.length));
}

/**
 * Generate an array of n random numbers within the specified range.
 * @param n - The number of elements to generate in the array.
 * @param min - The lower bound of the range (inclusive).
 * @param max - The upper bound of the range (exclusive).
 * @param step - The step value for the random number generation (default is 1).
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns An array of n random numbers within the specified range with the specified step.
 */
export function randArrayInRange(
  n: number,
  min: number,
  max: number,
  step: number = 1,
  customRandFn?: () => number,
): number[] {
  const result: number[] = [];
  for (let i = 0; i < n; i++) {
    result.push(randRange(min, max, step, customRandFn));
  }
  return result;
}

/**
 * Get a random key from the given object.
 * @param object - The object from which a random key will be picked.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random key from the object.
 */
export function randKey<T extends { [key: string]: any }>(object: T, customRandFn?: () => number): keyof T | undefined {
  return randElement(Object.keys(object), customRandFn);
}

/**
 * Get a random value from the given object.
 * @param object - The object from which a random value will be picked.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random value from the object.
 */
export function randValue<T extends { [key: string]: any }>(
  object: T,
  customRandFn?: () => number,
): T[keyof T] | undefined {
  const key = randKey(object, customRandFn);
  return key && key in object ? object[key] : undefined;
}

/**
 * Get a random string from a weighted set of values.
 * @param weightedValues - An object where the keys are the values, and the values are the weights.
 * @param customRandFn - Optional custom random function. If provided, it will be used instead of Math.random().
 * @returns A random value from the weighted set.
 */
export function randWeightedValue<T extends { [key: string]: number }>(
  weightedValues: T,
  customRandFn?: () => number,
): keyof T {
  const randFn = customRandFn ?? Math.random;
  const totalWeight = Object.values(weightedValues).reduce((acc, weight) => acc + weight, 0);
  let rand = randFn() * totalWeight;
  for (const value in weightedValues) {
    rand -= weightedValues[value]!;
    if (rand <= 0) {
      return value;
    }
  }
  // This should never happen, but to satisfy TypeScript, return the first value.
  return Object.keys(weightedValues)[0] as string;
}

export default {
  below: randBelow,
  range: randRange,
  shuffle,
  index: randIndex,
  element: randElement,
  subset: randSubset,
  arrayInRange: randArrayInRange,
  key: randKey,
  value: randValue,
  weightedValue: randWeightedValue,
};
