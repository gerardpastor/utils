import { describe, it } from 'vitest';
import cycle from './cycle';

describe("cycle", () => {
  it.concurrent("should return the correct value for a given index within the array length", ({ expect }) => {
    const result = cycle(['a', 'b', 'c'], 1);
    expect(result).toBe('b');
  });

  it.concurrent("should wrap around and return the correct value for an index greater than the array length", ({ expect }) => {
    const result = cycle(['a', 'b', 'c'], 4);
    expect(result).toBe('b');
  });

  it.concurrent("should return the correct value for an index equal to the array length", ({ expect }) => {
    const result = cycle(['a', 'b', 'c'], 3);
    expect(result).toBe('a');
  });

  it.concurrent("should handle arrays with a single element", ({ expect }) => {
    const result = cycle(['a'], 5);
    expect(result).toBe('a');
  });

  it.concurrent("should throw an error for an empty array", ({ expect }) => {
    expect(() => cycle([], 1)).toThrow("Values array cannot be empty");
  });

  it.concurrent("should return the correct value for a negative index", ({ expect }) => {
    const result = cycle(['a', 'b', 'c'], -1);
    expect(result).toBe('c');
  });

  it.concurrent("should return the correct value for a large negative index", ({ expect }) => {
    const result = cycle(['a', 'b', 'c'], -4);
    expect(result).toBe('c');
  });
});