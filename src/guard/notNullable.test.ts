import { describe, it } from "vitest";
import notNullable from "./notNullable";

describe("notNullable", () => {
  it.concurrent("should return true for a non-null string", ({ expect }) => {
    const result = notNullable("hello");
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null number", ({ expect }) => {
    const result = notNullable(123);
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null boolean", ({ expect }) => {
    const result = notNullable(true);
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null object", ({ expect }) => {
    const result = notNullable({ key: "value" });
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null array", ({ expect }) => {
    const result = notNullable([1, 2, 3]);
    expect(result).toBe(true);
  });

  it.concurrent("should return false for null", ({ expect }) => {
    const result = notNullable(null);
    expect(result).toBe(false);
  });

  it.concurrent("should return false for undefined", ({ expect }) => {
    const result = notNullable(undefined);
    expect(result).toBe(false);
  });

  it.concurrent("should return true for a non-null function", ({ expect }) => {
    const result = notNullable(() => {});
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null symbol", ({ expect }) => {
    const result = notNullable(Symbol("symbol"));
    expect(result).toBe(true);
  });

  it.concurrent("should return true for a non-null BigInt", ({ expect }) => {
    const result = notNullable(BigInt(123));
    expect(result).toBe(true);
  });
});
