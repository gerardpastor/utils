import { describe, it, expect } from 'vitest';
import { hexToRGB } from './hexToRGB';
import { ColorRGB } from './types';

describe('hexToRGB', () => {
  it.concurrent('converts full hex color with leading #', () => {
    const result: ColorRGB = hexToRGB('#123456');
    expect(result).toEqual({ r: 18, g: 52, b: 86, a: 1 });
  });

  it.concurrent('converts full hex color without leading #', () => {
    const result: ColorRGB = hexToRGB('123456');
    expect(result).toEqual({ r: 18, g: 52, b: 86, a: 1 });
  });
  
  it.concurrent('converts full hex color without leading #', () => {
    const result: ColorRGB = hexToRGB('808080');
    expect(result).toEqual({ r: 128, g: 128, b: 128, a: 1 });
  });

  it.concurrent('converts shorthand hex color with leading #', () => {
    const result: ColorRGB = hexToRGB('#123');
    expect(result).toEqual({ r: 17, g: 34, b: 51, a: 1 });
  });

  it.concurrent('converts shorthand hex color without leading #', () => {
    const result: ColorRGB = hexToRGB('123');
    expect(result).toEqual({ r: 17, g: 34, b: 51, a: 1 });
  });

  it.concurrent('converts full hex color with alpha and leading #', () => {
    const result: ColorRGB = hexToRGB('#12345680');
    expect(result).toEqual({ r: 18, g: 52, b: 86, a: 0.5 });
  });

  it.concurrent('converts full hex color with alpha without leading #', () => {
    const result: ColorRGB = hexToRGB('12345680');
    expect(result).toEqual({ r: 18, g: 52, b: 86, a: 0.5 });
  });
});