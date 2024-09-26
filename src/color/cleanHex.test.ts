import { describe, it } from "vitest";
import { cleanHex } from "./cleanHex";

describe("cleanHex", () => {
  it.concurrent("should clean and expand a 3-digit hex string", ({ expect }) => {
    const result = cleanHex("123");
    expect(result).toBe("#112233");
  });

  it.concurrent("should clean and expand a 6-digit hex string", ({ expect }) => {
    const result = cleanHex("#123456");
    expect(result).toBe("#123456");
  });

  it.concurrent("should clean and expand a 4-digit hex string with alpha", ({ expect }) => {
    const result = cleanHex("1234");
    expect(result).toBe("#11223344");
  });

  it.concurrent("should clean and expand an 8-digit hex string with alpha", ({ expect }) => {
    const result = cleanHex("#12345678");
    expect(result).toBe("#12345678");
  });

  it.concurrent("should throw an error for a hex string with invalid length", ({ expect }) => {
    expect(() => cleanHex("12345")).toThrow(
      "Hex string must be either 3, 6, 4, or 8 characters long (excluding the leading '#')"
    );
    expect(() => cleanHex("#12345")).toThrow(
      "Hex string must be either 3, 6, 4, or 8 characters long (excluding the leading '#')"
    );
  });

  it.concurrent("should clean and expand a 3-digit hex string with letters", ({ expect }) => {
    const result = cleanHex("abc");
    expect(result).toBe("#aabbcc");
  });

  it.concurrent("should clean and expand a 4-digit hex string with letters and alpha", ({ expect }) => {
    const result = cleanHex("abcd");
    expect(result).toBe("#aabbccdd");
  });

  it.concurrent("should clean and expand a 6-digit hex string with letters", ({ expect }) => {
    const result = cleanHex("abcdef");
    expect(result).toBe("#abcdef");
  });

  it.concurrent("should clean and expand an 8-digit hex string with letters and alpha", ({ expect }) => {
    const result = cleanHex("abcdef12");
    expect(result).toBe("#abcdef12");
  });

  it.concurrent("should clean and expand a hex string with mixed case", ({ expect }) => {
    const result = cleanHex("aBc");
    expect(result).toBe("#aabbcc");
  });
});
