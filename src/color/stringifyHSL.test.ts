import { describe, it } from "vitest";
import { stringifyHSL } from "./stringifyHSL";
import { ColorHSL } from "./types";

describe("stringifyHSL", () => {
  it.concurrent("should convert HSL color object to HSL string without alpha", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
    const result = stringifyHSL(color);
    expect(result).toBe("hsl(0, 100%, 50%)");
  });

  it.concurrent("should convert HSLA color object to HSLA string with alpha", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 0.5 };
    const result = stringifyHSL(color, true);
    expect(result).toBe("hsla(0, 100%, 50%, 0.5)");
  });

  it.concurrent("should convert HSL color object to HSL string with default alpha", ({ expect }) => {
    const color: ColorHSL = { h: 120, s: 50, l: 50, a: 1 };
    const result = stringifyHSL(color);
    expect(result).toBe("hsl(120, 50%, 50%)");
  });

  it.concurrent("should convert HSL color object to HSL string with alpha .5", ({ expect }) => {
    const color: ColorHSL = { h: 240, s: 100, l: 50, a: 0.5 };
    const result = stringifyHSL(color);
    expect(result).toBe("hsl(240, 100%, 50%)");
  });

  it.concurrent("should convert HSLA color object to HSLA string with alpha 0", ({ expect }) => {
    const color: ColorHSL = { h: 60, s: 100, l: 50, a: 0 };
    const result = stringifyHSL(color, true);
    expect(result).toBe("hsla(60, 100%, 50%, 0)");
  });
});
