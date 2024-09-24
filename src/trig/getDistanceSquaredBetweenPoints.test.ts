import { describe, it } from "vitest";
import getDistanceSquaredBetweenPoints from "./getDistanceSquaredBetweenPoints";

describe("getDistanceSquaredBetweenPoints", () => {
  it.concurrent("should calculate the squared distance between two point objects", ({ expect }) => {
    const p1 = { x: 0, y: 0 };
    const p2 = { x: 3, y: 4 };
    const distanceSquared = getDistanceSquaredBetweenPoints(p1, p2);
    expect(distanceSquared).toBe(25);
  });

  it.concurrent("should calculate the squared distance between four coordinates", ({ expect }) => {
    const distanceSquared = getDistanceSquaredBetweenPoints(0, 0, 3, 4);
    expect(distanceSquared).toBe(25);
  });

  it.concurrent("should return 0 when the points are the same", ({ expect }) => {
    const p1 = { x: 1, y: 1 };
    const p2 = { x: 1, y: 1 };
    const distanceSquared = getDistanceSquaredBetweenPoints(p1, p2);
    expect(distanceSquared).toBe(0);
  });

  it.concurrent("should handle negative coordinates correctly", ({ expect }) => {
    const p1 = { x: -1, y: -1 };
    const p2 = { x: -4, y: -5 };
    const distanceSquared = getDistanceSquaredBetweenPoints(p1, p2);
    expect(distanceSquared).toBe(25);
  });

  it.concurrent("should handle mixed positive and negative coordinates", ({ expect }) => {
    const distanceSquared = getDistanceSquaredBetweenPoints(-1, -1, 2, 3);
    expect(distanceSquared).toBe(25);
  });
});
