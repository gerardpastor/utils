import { describe, it } from "vitest";
import RGBToHSL from "./RGBToHSL";
import { ColorHSL, ColorRGB } from "./types";

describe("RGBToHSL", () => {
  it.concurrent("should convert RGB color object to HSL color object", ({ expect }) => {
    const rgb: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    const expected: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
    const result = RGBToHSL(rgb);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert another RGB color object to HSL color object", ({ expect }) => {
    const rgb: ColorRGB = { r: 0, g: 255, b: 0, a: 0.5 };
    const expected: ColorHSL = { h: 120, s: 100, l: 50, a: 0.5 };
    const result = RGBToHSL(rgb);
    expect(result).toEqual(expected);
  });

  it.concurrent(
    "should convert RGB color object with equal RGB values to achromatic HSL color object",
    ({ expect }) => {
      const rgb: ColorRGB = { r: 128, g: 128, b: 128, a: 1 };
      const expected: ColorHSL = { h: 0, s: 0, l: 50, a: 1 };
      const result = RGBToHSL(rgb);
      expect(result).toEqual(expected);
    }
  );

  it.concurrent("should convert RGB color object with max red and green to HSL color object", ({ expect }) => {
    const rgb: ColorRGB = { r: 255, g: 255, b: 0, a: 1 };
    const expected: ColorHSL = { h: 60, s: 100, l: 50, a: 1 };
    const result = RGBToHSL(rgb);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert RGB color object with max green and blue to HSL color object", ({ expect }) => {
    const rgb: ColorRGB = { r: 0, g: 255, b: 255, a: 1 };
    const expected: ColorHSL = { h: 180, s: 100, l: 50, a: 1 };
    const result = RGBToHSL(rgb);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert RGB color object with max red and blue to HSL color object", ({ expect }) => {
    const rgb: ColorRGB = { r: 255, g: 0, b: 255, a: 1 };
    const expected: ColorHSL = { h: 300, s: 100, l: 50, a: 1 };
    const result = RGBToHSL(rgb);
    expect(result).toEqual(expected);
  });
});
