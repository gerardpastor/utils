import { describe, it } from "vitest";
import inRange from "./inRange";

describe("inRange", () => {
  it.concurrent("should return true if the number is within the range", ({ expect }) => {
    const result = inRange(5, 1, 10);
    expect(result).toBe(true);
  });

  it.concurrent("should return false if the number is below the range", ({ expect }) => {
    const result = inRange(0, 1, 10);
    expect(result).toBe(false);
  });

  it.concurrent("should return false if the number is above the range", ({ expect }) => {
    const result = inRange(11, 1, 10);
    expect(result).toBe(false);
  });

  it.concurrent("should return true if the number is equal to the minimum of the range", ({ expect }) => {
    const result = inRange(1, 1, 10);
    expect(result).toBe(true);
  });

  it.concurrent("should return true if the number is equal to the maximum of the range", ({ expect }) => {
    const result = inRange(10, 1, 10);
    expect(result).toBe(true);
  });

  it.concurrent("should return false if the range is invalid (min > max)", ({ expect }) => {
    const result = inRange(5, 10, 1);
    expect(result).toBe(false);
  });

  it.concurrent("should return true if the number is within a negative range", ({ expect }) => {
    const result = inRange(-5, -10, -1);
    expect(result).toBe(true);
  });

  it.concurrent("should return false if the number is outside a negative range", ({ expect }) => {
    const result = inRange(-11, -10, -1);
    expect(result).toBe(false);
  });
});
