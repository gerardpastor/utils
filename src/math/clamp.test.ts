import { describe, it } from "vitest";
import clamp from "./clamp";

describe("clamp", () => {
  it.concurrent("should clamp a value within the default range 0 to 1", ({ expect }) => {
    expect(clamp(0.5)).toBe(0.5);
    expect(clamp(-1)).toBe(0);
    expect(clamp(2)).toBe(1);
  });

  it.concurrent("should clamp a value within a specified range", ({ expect }) => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-5, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
  });

  it.concurrent("should handle edge cases correctly", ({ expect }) => {
    expect(clamp(1, 1, 10)).toBe(1);
    expect(clamp(10, 1, 10)).toBe(10);
    expect(clamp(0, 0, 0)).toBe(0);
  });

  it.concurrent("should handle negative ranges correctly", ({ expect }) => {
    expect(clamp(-5, -10, -1)).toBe(-5);
    expect(clamp(-15, -10, -1)).toBe(-10);
    expect(clamp(0, -10, -1)).toBe(-1);
  });

  it.concurrent("should handle inverted ranges by treating min as max and vice versa", ({ expect }) => {
    expect(clamp(5, 10, 1)).toBe(5);
    expect(clamp(-5, 10, 1)).toBe(1);
    expect(clamp(15, 10, 1)).toBe(10);
  });
});
