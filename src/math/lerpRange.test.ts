import { describe, it } from "vitest";
import lerpRange from "./lerpRange";

describe("lerpRange", () => {
  it.concurrent("should interpolate between two values correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 0.5;
    const result = lerpRange(start, end, t);
    expect(result).toBe(5);
  });

  it.concurrent("should return the starting value when t is equal to tMin", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 0;
    const tMin = 0;
    const tMax = 1;
    const result = lerpRange(start, end, t, tMin, tMax);
    expect(result).toBe(0);
  });

  it.concurrent("should return the ending value when t is equal to tMax", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 1;
    const tMin = 0;
    const tMax = 1;
    const result = lerpRange(start, end, t, tMin, tMax);
    expect(result).toBe(10);
  });

  it.concurrent("should handle custom tMin and tMax values correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 5;
    const tMin = 0;
    const tMax = 10;
    const result = lerpRange(start, end, t, tMin, tMax);
    expect(result).toBe(5);
  });

  it.concurrent("should handle negative values correctly", ({ expect }) => {
    const start = -10;
    const end = 10;
    const t = 0.5;
    const result = lerpRange(start, end, t);
    expect(result).toBe(0);
  });

  it.concurrent("should handle t values  below tMin correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = -1;
    const result = lerpRange(start, end, t);
    expect(result).toBe(-10);
  });

  it.concurrent("should handle t values above tMax correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const t = 2;
    const result = lerpRange(start, end, t);
    expect(result).toBe(20);
  });
});
