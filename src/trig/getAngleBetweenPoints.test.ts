import { describe, it } from "vitest";
import { getAngleBetweenPoints } from "./getAngleBetweenPoints";

describe("getAngleBetweenPoints", () => {
  it.concurrent("should calculate the angle between two point objects", ({ expect }) => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 1, y: 1 };
    const angle = getAngleBetweenPoints(p1, p2);
    expect(angle).toBeCloseTo(Math.PI / 4);
  });

  it.concurrent("should calculate the angle between four coordinates", ({ expect }) => {
    const angle = getAngleBetweenPoints(0, 0, 1, 1);
    expect(angle).toBeCloseTo(Math.PI / 4);
  });

  it.concurrent("should return 0 when the points are horizontally aligned", ({ expect }) => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 1, y: 0 };
    const angle = getAngleBetweenPoints(p1, p2);
    expect(angle).toBe(0);
  });

  it.concurrent("should return PI/2 when the points are vertically aligned", ({ expect }) => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 0, y: 1 };
    const angle = getAngleBetweenPoints(p1, p2);
    expect(angle).toBeCloseTo(Math.PI / 2);
  });

  it.concurrent("should handle negative coordinates correctly", ({ expect }) => {
    const p1 = { x: -1, y: -1 };
    const p2 = { x: -2, y: -2 };
    const angle = getAngleBetweenPoints(p1, p2);
    expect(angle).toBeCloseTo((-3 * Math.PI) / 4);
  });

  it.concurrent("should handle mixed positive and negative coordinates", ({ expect }) => {
    const angle = getAngleBetweenPoints(-1, -1, 1, 1);
    expect(angle).toBeCloseTo(Math.PI / 4);
  });
});
