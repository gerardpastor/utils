import { describe, it } from "vitest";
import { range } from "./range";

describe("range", () => {
  it.concurrent("should generate an array from 1 to 5", ({ expect }) => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it.concurrent("should generate an array from 0 to 10 with a step of 2", ({ expect }) => {
    const result = range(0, 10, 2);
    expect(result).toEqual([0, 2, 4, 6, 8, 10]);
  });

  it.concurrent("should generate an array from -5 to 5", ({ expect }) => {
    const result = range(-5, 5);
    expect(result).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });

  it.concurrent("should generate an array from 5 to 1 with a step of 1", ({ expect }) => {
    const result = range(5, 1, 1);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it.concurrent("should throw an error if step is 0", ({ expect }) => {
    expect(() => range(1, 5, 0)).toThrow("Step must not be zero");
  });

  it.concurrent("should generate an array from 1 to 5 with a step of 0.5", ({ expect }) => {
    const result = range(1, 5, 0.5);
    expect(result).toEqual([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]);
  });

  it.concurrent("should generate an array from 5 to 1 with a step of -1", ({ expect }) => {
    const result = range(5, 1, -1);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it.concurrent("should generate an array from 1 to 5 with a negative step", ({ expect }) => {
    const result = range(1, 5, -1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it.concurrent("should generate an array from 5 to 1 with a positive step", ({ expect }) => {
    const result = range(5, 1, 1);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });
});
