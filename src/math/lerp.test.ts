import { describe, it } from "vitest";
import lerp from "./lerp";

describe("lerp", () => {
  it.concurrent("should interpolate between two values correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 0.5;
    const result = lerp(start, end, t);
    expect(result).toBe(5);
  });

  it.concurrent("should return the starting value when t is 0", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 0;
    const result = lerp(start, end, t);
    expect(result).toBe(0);
  });

  it.concurrent("should return the ending value when t is 1", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 1;
    const result = lerp(start, end, t);
    expect(result).toBe(10);
  });

  it.concurrent("should handle negative values correctly", ({ expect }) => {
    const start = -10;
    const end = 10;
    const t = 0.5;
    const result = lerp(start, end, t);
    expect(result).toBe(0);
  });

  it.concurrent("should handle t values below 0 correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = -1;
    const result = lerp(start, end, t);
    expect(result).toBe(-10);
  });

  it.concurrent("should handle t values above 1 correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 2;
    const result = lerp(start, end, t);
    expect(result).toBe(20);
  });

  it.concurrent("should handle reverse values correctly", ({ expect }) => {
    const start = 10;
    const end = 0;
    const t = 0.5;
    const result = lerp(start, end, t);
    expect(result).toBe(5);
  });
});
