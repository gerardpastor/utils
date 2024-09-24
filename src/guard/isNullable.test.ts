import { describe, it } from "vitest";
import isNullable from "./isNullable";

describe("isNullable", () => {
  it.concurrent("should return true for null", ({ expect }) => {
    const result = isNullable(null);
    expect(result).toBe(true);
  });

  it.concurrent("should return true for undefined", ({ expect }) => {
    const result = isNullable(undefined);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for a number", ({ expect }) => {
    const result = isNullable(42);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for 0", ({ expect }) => {
    const result = isNullable(0);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a string", ({ expect }) => {
    const result = isNullable("hello");
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an empty string", ({ expect }) => {
    const result = isNullable("");
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an object", ({ expect }) => {
    const result = isNullable({ key: "value" });
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an array", ({ expect }) => {
    const result = isNullable([1, 2, 3]);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a true boolean", ({ expect }) => {
    const result = isNullable(true);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a false boolean", ({ expect }) => {
    const result = isNullable(false);
    expect(result).toBe(false);
  });
});
