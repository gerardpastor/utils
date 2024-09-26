import { describe, it } from "vitest";
import { stringifyRGB } from "./stringifyRGB";
import { ColorRGB } from "./types";

describe("stringifyRGB", () => {
  it.concurrent("should convert RGB color object to RGB string without alpha", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    const result = stringifyRGB(color);
    expect(result).toBe("rgb(255, 0, 0)");
  });

  it.concurrent("should convert RGBA color object to RGBA string with alpha", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 0.5 };
    const result = stringifyRGB(color, true);
    expect(result).toBe("rgba(255, 0, 0, 0.5)");
  });

  it.concurrent("should convert RGB color object to RGB string with default alpha", ({ expect }) => {
    const color: ColorRGB = { r: 0, g: 255, b: 0, a: 1 };
    const result = stringifyRGB(color);
    expect(result).toBe("rgb(0, 255, 0)");
  });

  it.concurrent("should convert RGB color object to RGB string with alpha .5", ({ expect }) => {
    const color: ColorRGB = { r: 0, g: 0, b: 255, a: 0.5 };
    const result = stringifyRGB(color);
    expect(result).toBe("rgb(0, 0, 255)");
  });

  it.concurrent("should convert RGBA color object to RGBA string with alpha 0", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 255, b: 0, a: 0 };
    const result = stringifyRGB(color, true);
    expect(result).toBe("rgba(255, 255, 0, 0)");
  });
});
