import { describe, it } from "vitest";
import { lerpPoint } from "./lerpPoint";
import { Point } from "./types";

describe("lerpPoint", () => {
  it.concurrent("should interpolate between two points correctly", ({ expect }) => {
    const p1: Point = { x: 0, y: 0 };
    const p2: Point = { x: 10, y: 10 };
    const t = 0.5;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: 5, y: 5 });
  });

  it.concurrent("should return the starting point when t is 0", ({ expect }) => {
    const p1: Point = { x: 0, y: 0 };
    const p2: Point = { x: 10, y: 10 };
    const t = 0;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it.concurrent("should return the ending point when t is 1", ({ expect }) => {
    const p1: Point = { x: 0, y: 0 };
    const p2: Point = { x: 10, y: 10 };
    const t = 1;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: 10, y: 10 });
  });

  it.concurrent("should handle negative coordinates correctly", ({ expect }) => {
    const p1: Point = { x: -10, y: -10 };
    const p2: Point = { x: 10, y: 10 };
    const t = 0.5;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: 0, y: 0 });
  });

  it.concurrent("should handle t values below 0 correctly", ({ expect }) => {
    const p1: Point = { x: 0, y: 0 };
    const p2: Point = { x: 10, y: 10 };
    const t = -1;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: -10, y: -10 });
  });

  it.concurrent("should handle t values above 1 correctly", ({ expect }) => {
    const p1: Point = { x: 0, y: 0 };
    const p2: Point = { x: 10, y: 10 };
    const t = 2;
    const result = lerpPoint(p1, p2, t);
    expect(result).toEqual({ x: 20, y: 20 });
  });
});
