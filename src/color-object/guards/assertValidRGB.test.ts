import { describe, it } from 'vitest';
import { ColorRGB } from '../types';
import assertValidRGB from './assertValidRGB';

describe("assertValidRGB", () => {
  it.concurrent("should not throw an error for a valid RGB object", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1 };
    expect(() => assertValidRGB(color)).not.toThrow();
  });

  it.concurrent("should throw an error for an RGB object with r out of range", ({ expect }) => {
    const color: ColorRGB = { r: 256, g: 0, b: 0, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with g out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: -1, b: 0, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with b out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 256, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with a out of range", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 1.5 };
    expect(() => assertValidRGB(color)).toThrow("Alpha value must be between 0 and 1");
  });

  it.concurrent("should not throw an error for a valid RGBA object with alpha less than 1", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: 0.5 };
    expect(() => assertValidRGB(color)).not.toThrow();
  });

  it.concurrent("should throw an error for an RGB object with negative r value", ({ expect }) => {
    const color: ColorRGB = { r: -1, g: 0, b: 0, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with negative g value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: -1, b: 0, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with negative b value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: -1, a: 1 };
    expect(() => assertValidRGB(color)).toThrow("RGB values must be between 0 and 255");
  });

  it.concurrent("should throw an error for an RGB object with negative a value", ({ expect }) => {
    const color: ColorRGB = { r: 255, g: 0, b: 0, a: -0.5 };
    expect(() => assertValidRGB(color)).toThrow("Alpha value must be between 0 and 1");
  });
});