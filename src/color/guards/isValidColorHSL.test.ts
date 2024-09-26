import { describe, it } from "vitest";
import { ColorHSL } from "../types";
import { isValidColorHSL } from "./isValidColorHSL";

describe("isValidColorHSL", () => {
  it.concurrent("should return true for a valid HSL object", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for an HSL object with h out of range", ({ expect }) => {
    const color: ColorHSL = { h: 361, s: 100, l: 50, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with s out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 101, l: 50, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with l out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 101, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with a out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1.5 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return true for a valid HSLA object with alpha less than 1", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 0.5 };
    const result = isValidColorHSL(color);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for an HSL object with negative h value", ({ expect }) => {
    const color: ColorHSL = { h: -1, s: 100, l: 50, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with negative s value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: -1, l: 50, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with negative l value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: -1, a: 1 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an HSL object with negative a value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: -0.5 };
    const result = isValidColorHSL(color);
    expect(result).toBe(false);
  });
});
