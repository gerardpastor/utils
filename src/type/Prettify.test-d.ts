import { describe, it, expectTypeOf } from "vitest";
import { Prettify } from "./Prettify";

describe.concurrent("Prettify utility type", () => {
  it("should flatten a complex type with nested properties", () => {
    type ComplexType = { a: number } & { b: string };
    type PrettifiedType = Prettify<ComplexType>;
    expectTypeOf<PrettifiedType>().toEqualTypeOf<{ a: number; b: string }>();
  });

  it("should flatten a type with optional properties", () => {
    type OptionalType = { a?: number; b?: string };
    type PrettifiedOptionalType = Prettify<OptionalType>;
    expectTypeOf<PrettifiedOptionalType>().toEqualTypeOf<{ a?: number; b?: string }>();
  });

  it("should flatten a type with readonly properties", () => {
    type ReadonlyType = { readonly a: number; readonly b: string };
    type PrettifiedReadonlyType = Prettify<ReadonlyType>;
    expectTypeOf<PrettifiedReadonlyType>().toEqualTypeOf<{ readonly a: number; readonly b: string }>();
  });

  it("should flatten a type with mixed properties", () => {
    type MixedType = { a: number } & { b?: string } & { readonly c: boolean };
    type PrettifiedMixedType = Prettify<MixedType>;
    expectTypeOf<PrettifiedMixedType>().toEqualTypeOf<{ a: number; b?: string; readonly c: boolean }>();
  });
});
