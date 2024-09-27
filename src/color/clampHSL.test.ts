import { describe, it } from "vitest";
import { clampHSL } from "./clampHSL";

describe("clampHSL", () => {
  it.concurrent("should clamp values within the valid range", ({ expect }) => {
    const color = { h: 180, s: 50, l: 50 };
    const clampedColor = clampHSL(color);
    expect(clampedColor).toEqual({ h: 180, s: 50, l: 50 });
  });

  it.concurrent("should clamp values exceeding the valid range", ({ expect }) => {
    const color = { h: 400, s: 150, l: 200 };
    const clampedColor = clampHSL(color);
    expect(clampedColor).toEqual({ h: 360, s: 100, l: 100 });
  });

  it.concurrent("should clamp negative values", ({ expect }) => {
    const color = { h: -50, s: -100, l: -150 };
    const clampedColor = clampHSL(color);
    expect(clampedColor).toEqual({ h: 0, s: 0, l: 0 });
  });

  it.concurrent("should clamp values with alpha channel", ({ expect }) => {
    const color = { h: 400, s: -20, l: 255, a: 1.5 };
    const clampedColor = clampHSL(color);
    expect(clampedColor).toEqual({ h: 360, s: 0, l: 100, a: 1 });
  });

  it.concurrent("should clamp values without alpha channel", ({ expect }) => {
    const color = { h: 400, s: -20, l: 255 };
    const clampedColor = clampHSL(color);
    expect(clampedColor).toEqual({ h: 360, s: 0, l: 100 });
  });
});