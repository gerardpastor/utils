import { describe, it } from "vitest";
import { clampRGB } from "./clampRGB";

describe("clampRGB", () => {
  it.concurrent("should clamp values within the valid range", ({ expect }) => {
    const color = { r: 100, g: 150, b: 200 };
    const clampedColor = clampRGB(color);
    expect(clampedColor).toEqual({ r: 100, g: 150, b: 200 });
  });

  it.concurrent("should clamp values exceeding the valid range", ({ expect }) => {
    const color = { r: 300, g: 400, b: 500 };
    const clampedColor = clampRGB(color);
    expect(clampedColor).toEqual({ r: 255, g: 255, b: 255 });
  });

  it.concurrent("should clamp negative values", ({ expect }) => {
    const color = { r: -50, g: -100, b: -150 };
    const clampedColor = clampRGB(color);
    expect(clampedColor).toEqual({ r: 0, g: 0, b: 0 });
  });

  it.concurrent("should clamp values with alpha channel", ({ expect }) => {
    const color = { r: 300, g: -20, b: 255, a: 1.5 };
    const clampedColor = clampRGB(color);
    expect(clampedColor).toEqual({ r: 255, g: 0, b: 255, a: 1 });
  });

  it.concurrent("should clamp values without alpha channel", ({ expect }) => {
    const color = { r: 300, g: -20, b: 255 };
    const clampedColor = clampRGB(color);
    expect(clampedColor).toEqual({ r: 255, g: 0, b: 255 });
  });
});
