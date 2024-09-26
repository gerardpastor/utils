import { describe, it } from "vitest";
import { RGBToHex } from "./RGBToHex";
import { ColorRGB } from "./types";

describe("RGBToHex", () => {
  it.concurrent(
    "should convert RGB color object to hexadecimal string without alpha if alpha is 1 and withAlpha is undefined",
    ({ expect }) => {
      const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
      const result = RGBToHex(color);
      expect(result).toBe("#ff0000");
    }
  );

  it.concurrent(
    "should convert RGBA color object to hexadecimal string with alpha if alpha is less than 1 and withAlpha is undefined",
    ({ expect }) => {
      const color: ColorRGB = { r: 255, g: 0, b: 0, a: 0.5 };
      const result = RGBToHex(color);
      expect(result).toBe("#ff000080");
    }
  );

  it.concurrent(
    "should convert RGB color object to hexadecimal string without alpha if alpha is 1 and withAlpha is false",
    ({ expect }) => {
      const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
      const result = RGBToHex(color, false);
      expect(result).toBe("#ff0000");
    }
  );

  it.concurrent(
    "should convert RGB color object to hexadecimal string without alpha if alpha is less than 1 and withAlpha is false",
    ({ expect }) => {
      const color: ColorRGB = { r: 255, g: 0, b: 0, a: 0.5 };
      const result = RGBToHex(color, false);
      expect(result).toBe("#ff0000");
    }
  );

  it.concurrent(
    "should convert RGBA color object to hexadecimal string with alpha if alpha is 1 and withAlpha is true",
    ({ expect }) => {
      const color: ColorRGB = { r: 0, g: 0, b: 255, a: 1 };
      const result = RGBToHex(color, true);
      expect(result).toBe("#0000ffff");
    }
  );

  it.concurrent(
    "should convert RGBA color object to hexadecimal string with alpha if alpha is less than 1 and withAlpha is true",
    ({ expect }) => {
      const color: ColorRGB = { r: 255, g: 255, b: 0, a: 0 };
      const result = RGBToHex(color, true);
      expect(result).toBe("#ffff0000");
    }
  );

  it.concurrent("should throw an error if RGB values are out of range", ({ expect }) => {
    const color: ColorRGB = { r: 256, g: 0, b: 0, a: 1 };
    expect(() => RGBToHex(color)).toThrow(new Error("RGB values must be between 0 and 255"));
  });

  it.concurrent("should throw an error if alpha value is out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1.5 };
    expect(() => RGBToHex(color)).toThrow(new Error("Alpha value must be between 0 and 1"));
  });

  it.concurrent("should throw an error if RGB values are negative", ({ expect }) => {
    const color: ColorRGB = { r: -1, g: 0, b: 0, a: 1 };
    expect(() => RGBToHex(color)).toThrow(new Error("RGB values must be between 0 and 255"));
  });

  it.concurrent("should throw an error if alpha value is negative", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: -0.5 };
    expect(() => RGBToHex(color)).toThrow(new Error("Alpha value must be between 0 and 1"));
  });
});
