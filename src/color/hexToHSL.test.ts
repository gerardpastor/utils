import { describe, it, expect } from "vitest";
import { hexToHSL } from "./hexToHSL";
import { ColorHSL } from "./types";

describe("hexToHSL", () => {
  it.concurrent("converts full hex color with leading #", () => {
    const result: ColorHSL = hexToHSL("#123456");
    expect(result).toEqual({ h: 210, s: 65, l: 20, a: 1 });
  });

  it.concurrent("converts full hex color without leading #", () => {
    const result: ColorHSL = hexToHSL("123456");
    expect(result).toEqual({ h: 210, s: 65, l: 20, a: 1 });
  });

  it.concurrent("converts full hex color without leading #", () => {
    const result: ColorHSL = hexToHSL("808080");
    expect(result).toEqual({ h: 0, s: 0, l: 50, a: 1 });
  });

  it.concurrent("converts shorthand hex color with leading #", () => {
    const result: ColorHSL = hexToHSL("#123");
    expect(result).toEqual({ h: 210, s: 50, l: 13, a: 1 });
  });

  it.concurrent("converts shorthand hex color without leading #", () => {
    const result: ColorHSL = hexToHSL("123");
    expect(result).toEqual({ h: 210, s: 50, l: 13, a: 1 });
  });

  it.concurrent("converts full hex color with alpha and leading #", () => {
    const result: ColorHSL = hexToHSL("#12345680");
    expect(result).toEqual({ h: 210, s: 65, l: 20, a: 0.5 });
  });

  it.concurrent("converts full hex color with alpha without leading #", () => {
    const result: ColorHSL = hexToHSL("12345680");
    expect(result).toEqual({ h: 210, s: 65, l: 20, a: 0.5 });
  });
});
