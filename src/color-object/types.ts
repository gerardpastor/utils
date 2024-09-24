export type ColorHex = string;

export type ColorRGB = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type ColorHSL = {
  h: number;
  s: number;
  l: number;
  a: number;
};

export type Color = ColorHex | ColorRGB | ColorHSL;
