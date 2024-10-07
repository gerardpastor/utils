import { describe, it, expect } from "vitest";
import { round } from "./round";

describe("round", () => {
  it.concurrent("rounds to 2 decimal places", () => {
    const result = round(1.2345, 2);
    expect(result).toBe(1.23);
  });

  it.concurrent("rounds to 0 decimal places", () => {
    const result = round(1.2345, 0);
    expect(result).toBe(1);
  });

  it.concurrent("rounds to 3 decimal places", () => {
    const result = round(1.2345, 3);
    expect(result).toBe(1.235);
  });

  it.concurrent("rounds negative numbers correctly", () => {
    const result = round(-1.2345, 2);
    expect(result).toBe(-1.23);
  });

  it.concurrent("rounds large numbers correctly", () => {
    const result = round(12345.6789, 2);
    expect(result).toBe(12345.68);
  });

  it.concurrent("rounds small numbers correctly", () => {
    const result = round(0.00012345, 5);
    expect(result).toBe(0.00012);
  });
});
