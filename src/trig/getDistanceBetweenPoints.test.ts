import { describe, it } from "vitest";
import { getDistanceBetweenPoints } from "./getDistanceBetweenPoints";

describe("getDistanceBetweenPoints", () => {
  it.concurrent("should calculate the distance between two point objects", ({ expect }) => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 3, y: 4 };
    const distance = getDistanceBetweenPoints(p1, p2);
    expect(distance).toBe(5);
  });

  it.concurrent("should calculate the distance between four coordinates", ({ expect }) => {
    const distance = getDistanceBetweenPoints(0, 0, 3, 4);
    expect(distance).toBe(5);
  });

  it.concurrent("should return 0 when the points are the same", ({ expect }) => {
    const p1 = { x: 1, y: 1 };
    const p2 = { x: 1, y: 1 };
    const distance = getDistanceBetweenPoints(p1, p2);
    expect(distance).toBe(0);
  });

  it.concurrent("should handle negative coordinates correctly", ({ expect }) => {
    const p1 = { x: -1, y: -1 };
    const p2 = { x: -4, y: -5 };
    const distance = getDistanceBetweenPoints(p1, p2);
    expect(distance).toBe(5);
  });

  it.concurrent("should handle mixed positive and negative coordinates", ({ expect }) => {
    const distance = getDistanceBetweenPoints(-1, -1, 2, 3);
    expect(distance).toBe(5);
  });
});
