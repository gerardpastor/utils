export const HEX_REGEX = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
export const RGB_REGEX = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
export const RGBA_REGEX = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
export const HSL_REGEX = /^hsl\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
export const HSLA_REGEX = /^hsla\(\s*(\d{1,3})\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;

export const RGB_MAX = 255;
export const HSL_MAX = 100;
export const HUE_MAX = 360;
