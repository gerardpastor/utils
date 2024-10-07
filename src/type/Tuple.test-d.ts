import { describe, it, expectTypeOf } from "vitest";
import Tuple from "./Tuple";

describe.concurrent("Tuple utility type", () => {
  it("should create a tuple of length 3 with number type elements", () => {
    type RGBTuple = Tuple<3, number>;
    expectTypeOf<RGBTuple>().toEqualTypeOf<readonly [number, number, number]>();
  });

  it("should create a tuple of length 4 with number type elements", () => {
    type RGBATuple = Tuple<4, number>;
    expectTypeOf<RGBATuple>().toEqualTypeOf<readonly [number, number, number, number]>();
  });

  it("should create a tuple of length 3 or 4 with number type elements", () => {
    type RGBTuple = Tuple<3 | 4, number>;
    expectTypeOf<RGBTuple>().toEqualTypeOf<
      readonly [number, number, number] | readonly [number, number, number, number]
    >();
  });

  it("should create a tuple of length 2 with number or string type elements", () => {
    type NumberStringTuple = Tuple<2, number | string>;
    expectTypeOf<NumberStringTuple>().toEqualTypeOf<readonly [number | string, number | string]>();
  });
});
