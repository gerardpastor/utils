import { describe, it } from 'vitest';
import inverseLerp from './inverseLerp';

describe("inverseLerp", () => {
  it.concurrent("should calculate the interpolation factor correctly within a range", ({ expect }) => {
    const start = 0;
    const end = 10;
    const value = 5;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(0.5);
  });

  it.concurrent("should return 0 when start and end are the same", ({ expect }) => {
    const start = 10;
    const end = 10;
    const value = 5;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(0);
  });

  it.concurrent("should handle negative ranges correctly", ({ expect }) => {
    const start = -10;
    const end = 0;
    const value = -5;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(0.5);
  });

  it.concurrent("should handle values outside the range correctly", ({ expect }) => {
    const start = 0;
    const end = 10;
    const value = 15;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(1.5);
  });

  it.concurrent("should handle inverted ranges correctly", ({ expect }) => {
    const start = 10;
    const end = 0;
    const value = 5;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(0.5);
  });

  it.concurrent("should return 0 when value is equal to start", ({ expect }) => {
    const start = 0;
    const end = 10;
    const value = 0;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(0);
  });

  it.concurrent("should return 1 when value is equal to end", ({ expect }) => {
    const start = 0;
    const end = 10;
    const value = 10;
    const result = inverseLerp(start, end, value);
    expect(result).toBe(1);
  });
});