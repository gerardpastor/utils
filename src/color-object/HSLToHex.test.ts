import { describe, it } from "vitest";
import HSLToHex from "./HSLToHex";
import { ColorHSL } from "./types";

describe("HSLToHex", () => {
  it.concurrent(
    "should convert HSLA color object to hexadecimal string with alpha if alpha is less than 1 and withAlpha is undefined",
    ({ expect }) => {
      const color: ColorHSL = { h: 0, s: 100, l: 50, a: 0.5 };
      const result = HSLToHex(color);
      expect(result).toBe("#ff000080");
    }
  );

  it.concurrent(
    "should convert HSL color object to hexadecimal string without alpha if alpha is 1 and withAlpha is false",
    ({ expect }) => {
      const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
      const result = HSLToHex(color, false);
      expect(result).toBe("#ff0000");
    }
  );

  it.concurrent(
    "should convert HSL color object to hexadecimal string without alpha if alpha is less than 1 and withAlpha is false",
    ({ expect }) => {
      const color: ColorHSL = { h: 0, s: 100, l: 50, a: 0.5 };
      const result = HSLToHex(color, false);
      expect(result).toBe("#ff0000");
    }
  );

  it.concurrent(
    "should convert HSLA color object to hexadecimal string with alpha if alpha is 1 and withAlpha is true",
    ({ expect }) => {
      const color: ColorHSL = { h: 240, s: 100, l: 50, a: 1 };
      const result = HSLToHex(color, true);
      expect(result).toBe("#0000ffff");
    }
  );

  it.concurrent(
    "should convert HSLA color object to hexadecimal string with alpha if alpha is less than 1 and withAlpha is true",
    ({ expect }) => {
      const color: ColorHSL = { h: 60, s: 100, l: 50, a: 0 };
      const result = HSLToHex(color, true);
      expect(result).toBe("#ffff0000");
    }
  );

  it.concurrent("should throw an error if HSL values are out of range", ({ expect }) => {
    const color: ColorHSL = { h: 361, s: 100, l: 50, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Hue value must be between 0 and 360"));
  });

  it.concurrent("should throw an error if saturation value is out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 101, l: 50, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Saturation value must be between 0 and 100"));
  });

  it.concurrent("should throw an error if lightness value is out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 101, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Lightness value must be between 0 and 100"));
  });

  it.concurrent("should throw an error if alpha value is out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1.5 };
    expect(() => HSLToHex(color)).toThrow(new Error("Alpha value must be between 0 and 1"));
  });

  it.concurrent("should throw an error if HSL values are negative", ({ expect }) => {
    const color: ColorHSL = { h: -1, s: 100, l: 50, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Hue value must be between 0 and 360"));
  });

  it.concurrent("should throw an error if saturation value is negative", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: -1, l: 50, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Saturation value must be between 0 and 100"));
  });

  it.concurrent("should throw an error if lightness value is negative", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: -1, a: 1 };
    expect(() => HSLToHex(color)).toThrow(new Error("Lightness value must be between 0 and 100"));
  });

  it.concurrent("should throw an error if alpha value is negative", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: -0.5 };
    expect(() => HSLToHex(color)).toThrow(new Error("Alpha value must be between 0 and 1"));
  });
});
