import { describe, it } from "vitest";
import isStringLike from "./isStringLike";

describe("isStringLike", () => {
  it.concurrent("should return true for a string", ({ expect }) => {
    const result = isStringLike("hello");
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a number", ({ expect }) => {
    const result = isStringLike(123);
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a boolean", ({ expect }) => {
    const result = isStringLike(true);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for an object", ({ expect }) => {
    const result = isStringLike({});
    expect(result).toBe(false);
  });

  it.concurrent("should return false for an array", ({ expect }) => {
    const result = isStringLike([]);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for null", ({ expect }) => {
    const result = isStringLike(null);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for undefined", ({ expect }) => {
    const result = isStringLike(undefined);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a function", ({ expect }) => {
    const result = isStringLike(() => {});
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a symbol", ({ expect }) => {
    const result = isStringLike(Symbol("symbol"));
    expect(result).toBe(false);
  });

  it.concurrent("should return false for a BigInt", ({ expect }) => {
    const result = isStringLike(BigInt(123));
    expect(result).toBe(false);
  });
});
