# @gerardpastor/rand

**Typed utility functions for generating random numbers and picking random elements from arrays and objects.**

## Installation

To use the `@gerardpastor/rand` library in your project, you can install it via npm, yarn or pnpm:

```bash
npm i @gerardpastor/rand
```

```bash
yarn add @gerardpastor/rand
```

```bash
pnpm add @gerardpastor/rand
```

## Usage

Import the functions you need from the library:

```typescript
import {
  randBelow,
  randRange,
  randIndex,
  randElement,
  randSubset,
  randArrayInRange,
  shuffle,
  randKey,
  randValue,
  randWeightedValue,
  randNormal,
} from "@gerardpastor/rand";
```

or import the entire library:

```typescript
import rand from "@gerardpastor/rand";
rand.normal(0, 1);
```

## Summary

- `randBelow(max: number, step: number = 1): number`: Generate a random number from 0 to `max` (exclusive) with the specified `step`.

- `randRange(min: number, max: number, step: number = 1): number`: Generate a random number from a specified range.

- `shuffle(array: T): T[number][]`: Create a new array with the elements of the given array shuffled.

- `randIndex(array: T): number`: Get a random index from the given array.

- `randElement(array: T): T[number] | undefined`: Get a random element from the given array.

- `randSubset(array: T, size: number = 1): T[number][]`: Get a random subset of elements from the given array.

- `randArrayInRange(n: number, min: number, max: number, step: number = 1): number[]`: Generate an array of `n` random numbers within the specified range.

- `randKey(object: T): keyof T | undefined`: Get a random key from the given object.

- `randValue(object: T): T[keyof T] | undefined`: Get a random value from the given object.

- `randWeightedValue(weightedValues: T): keyof T`: Get a random string from a weighted set of values.

- `randNormal(mean: number, standardDeviation: number): number`: Generate a random number with a normal distribution (gaussian).

## Functions

### randBelow
#### `randBelow(max: number, step: number = 1, customRandFn?: () => number): number`

Generate a random number from 0 to `max` (exclusive) with the specified `step`.

##### Parameters

- `max`: The upper bound for the random number (exclusive).
- `step`: The step value for the random number generation (default is 1).
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random number from 0 to `max` (exclusive) with the specified `step`.

```typescript
randBelow(10); // 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
randBelow(10, 2); // 0 | 2 | 4 | 6 | 8
```

### randRange
#### `randRange(min: number, max: number, step: number = 1, customRandFn?: () => number): number`

Generate a random number from a specified range.

##### Parameters

- `min`: The lower bound of the range (inclusive).
- `max`: The upper bound of the range (exclusive).
- `step`: The step value for the random number generation (default is 1).
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random number from the specified range with the specified step.

```typescript
randRange(5, 10); // 5 | 6 | 7 | 8 | 9
randRange(5, 10, 2); // 5 | 7 | 9
```

<br/>

### shuffle
#### `shuffle<T extends any[] | readonly any[]>(array: T, customRandFn?: () => number): T[number][]`

Create a new array with the elements of the given array shuffled.

##### Parameters

- `array`: The array to be shuffled.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A new array containing the shuffled elements of the original array.

```typescript
shuffle([1, 2, 3, 4, 5]); // [3, 1, 5, 4, 2] | [5, 2, 1, 3, 4] | [2, 3, 4, 1, 5] | ...
```

<br/>

### randIndex
#### `randIndex<T extends any[] | readonly any[]>(array: T, customRandFn?: () => number): number`

Get a random index from the given array.

##### Parameters

- `array`: The array from which the random index will be selected.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random index within the array bounds.

```typescript
randIndex(["a", "b", "c", "d", "e"]); // 0 | 1 | 2 | 3 | 4
randIndex([]); // undefined
```

<br/>

### randElement
#### `randElement<T extends any[] | readonly any[]>(array: T,customRandFn?: () => number,): T[number] | undefined`

Get a random element from the given array.

##### Parameters

- `array`: The array from which the random element will be picked.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random element from the array.

```typescript
randElement(["a", "b", "c", "d", "e"]); // "a" | "b" | "c" | "d" | "e"
randElement([]); // undefined
```

<br/>

### randSubset
#### `randSubset<T extends any[] | readonly any[]>(array: T, size: number = 1, customRandFn?: () => number): T[number][]`

Get a random subset of elements from the given array.

##### Parameters

- `array`: The array from which the random subset will be picked.
- `size`: The number of elements to pick in the random subset (default is 1).
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A new array containing a random subset of elements from the original array.

```typescript
randSubset(["a", "b", "c", "d", "e"], 3); // ["a", "c", "e"] | ["a", "b", "d"] | ...
randSubset(["a", "b", "c", "d", "e"], 0); // []
randSubset(["a", "b", "c", "d", "e"], 10); // ["d", "a", "e", "c", "b"] | ...
```

<br/>

### randArrayInRange
#### `randArrayInRange(n: number, min: number, max: number, step: number = 1, customRandFn?: () => number): number[]`

Generate an array of n random numbers within the specified range.

##### Parameters

- `n`: The number of elements to generate in the array.
- `min`: The lower bound of the range (inclusive).
- `max`: The upper bound of the range (exclusive).
- `step`: The step value for the random number generation (default is 1).
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

An array of n random numbers within the specified range with the specified step.

```typescript
randArrayInRange(5, 5, 10); // [5, 7, 9, 6, 8] | [5, 8, 6, 9, 7] | ...
```

<br/>

### randKey
#### `randKey<T extends { [key: string]: any }>(object: T, customRandFn?: () => number): keyof T | undefined`

Get a random key from the given object.

##### Parameters

- `object`: The object from which a random key will be picked.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random key from the object.

```typescript
randKey({ a: 1, b: 2, c: 3, d: 4, e: 5 }); // "a" | "b" | "c" | "d" | "e"
randKey({}); // undefined
```

<br/>

### randValue
#### `randValue<T extends { [key: string]: any }>(object: T, customRandFn?: () => number): T[keyof T] | undefined`

Get a random value from the given object.

##### Parameters

- `object`: The object from which a random value will be picked.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random value from the object.

```typescript
randValue({ a: 1, b: 2, c: 3, d: 4, e: 5 }); // 1 | 2 | 3 | 4 | 5
randValue({}); // undefined
```

<br/>

### randWeightedValue
#### `randWeightedValue<T extends { [key: string]: number }>(weightedValues: T, customRandFn?: () => number): keyof T`

Get a random string from a weighted set of values.

##### Parameters

- `weightedValues`: An object where the keys are the values, and the values are the weights.
- `customRandFn`: Optional custom random function. If provided, it will be used instead of Math.random().

##### Returns

A random value from the weighted set.

```typescript
randWeightedValue({ a: 1, b: 2, c: 3, d: 4, e: 5 }); // "a" | "b" | "c" | "d" | "e"
```

## License

This library is released under the MIT License. See [LICENSE](LICENSE) for more information.

## Issues

If you find any bugs, have feature requests, or encounter any issues with this library, please open an issue on the [GitHub repository](https://github.com/gerardpastor/rand/issues).

Enjoy using `@gerardpastor/rand` for your random number generation and element picking needs! If you have any questions or need further assistance, feel free to reach out.

---

_This library was developed by Gerard Pastor. You can find more about me on my [personal website](https://www.gerardpastor.dev)._
