import { describe, it } from 'vitest';
import { ColorHSL } from '../types';
import assertValidHSL from './assertValidHSL';

describe("assertValidHSL", () => {
  it.concurrent("should not throw an error for a valid HSL object", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1 };
    expect(() => assertValidHSL(color)).not.toThrow();
  });

  it.concurrent("should throw an error for an HSL object with h out of range", ({ expect }) => {
    const color: ColorHSL = { h: 361, s: 100, l: 50, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Hue value must be between 0 and 360");
  });

  it.concurrent("should throw an error for an HSL object with s out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 101, l: 50, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Saturation value must be between 0 and 100");
  });

  it.concurrent("should throw an error for an HSL object with l out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 101, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Lightness value must be between 0 and 100");
  });

  it.concurrent("should throw an error for an HSL object with a out of range", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 1.5 };
    expect(() => assertValidHSL(color)).toThrow("Alpha value must be between 0 and 1");
  });

  it.concurrent("should not throw an error for a valid HSLA object with alpha less than 1", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: 0.5 };
    expect(() => assertValidHSL(color)).not.toThrow();
  });

  it.concurrent("should throw an error for an HSL object with negative h value", ({ expect }) => {
    const color: ColorHSL = { h: -1, s: 100, l: 50, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Hue value must be between 0 and 360");
  });

  it.concurrent("should throw an error for an HSL object with negative s value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: -1, l: 50, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Saturation value must be between 0 and 100");
  });

  it.concurrent("should throw an error for an HSL object with negative l value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: -1, a: 1 };
    expect(() => assertValidHSL(color)).toThrow("Lightness value must be between 0 and 100");
  });

  it.concurrent("should throw an error for an HSL object with negative a value", ({ expect }) => {
    const color: ColorHSL = { h: 0, s: 100, l: 50, a: -0.5 };
    expect(() => assertValidHSL(color)).toThrow("Alpha value must be between 0 and 1");
  });
});