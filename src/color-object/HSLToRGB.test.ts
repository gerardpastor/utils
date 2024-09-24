import { describe, it } from 'vitest';
import HSLToRGB from './HSLToRGB';
import { ColorHSL, ColorRGB } from './types';

describe("HSLToRGB", () => {
  it.concurrent("should convert HSL color object to RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
    const expected: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert another HSL color object to RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 120, s: 100, l: 50, a: 0.5 };
    const expected: ColorRGB = { r: 0, g: 255, b: 0, a: 0.5 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert HSL color object with zero saturation to achromatic RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 0, s: 0, l: 50, a: 1 };
    const expected: ColorRGB = { r: 128, g: 128, b: 128, a: 1 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert HSL color object with max lightness to white RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 0, s: 100, l: 100, a: 1 };
    const expected: ColorRGB = { r: 255, g: 255, b: 255, a: 1 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert HSL color object with min lightness to black RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 0, s: 100, l: 0, a: 1 };
    const expected: ColorRGB = { r: 0, g: 0, b: 0, a: 1 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });

  it.concurrent("should convert HSL color object with max hue to RGB color object", ({ expect }) => {
    const hsl: ColorHSL = { h: 360, s: 100, l: 50, a: 1 };
    const expected: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    const result = HSLToRGB(hsl);
    expect(result).toEqual(expected);
  });
});