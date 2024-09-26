import { describe, it } from "vitest";
import { ColorRGB } from "../types";
import { isValidColorRGB } from "./isValidColorRGB";

describe("isValidColorRGB", () => {
  it.concurrent("should return true for a valid RGB object", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for an RGB object with r out of range", ({ expect }) => {
    const color: ColorRGB = { r: 256, g: 0, b: 0, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with g out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: -1, b: 0, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with b out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 256, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with a out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1.5 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return true for a valid RGBA object with alpha less than 1", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 0.5 };
    const result = isValidColorRGB(color);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for an RGB object with negative r value", ({ expect }) => {
    const color: ColorRGB = { r: -1, g: 0, b: 0, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with negative g value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: -1, b: 0, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with negative b value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: -1, a: 1 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an RGB object with negative a value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: -0.5 };
    const result = isValidColorRGB(color);
    expect(result).toBe(false);
  });
});
