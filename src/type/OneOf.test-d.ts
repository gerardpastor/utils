import { describe, it, expectTypeOf } from "vitest";

import { OneOf } from "./OneOf";

describe("OneOf type", () => {
  it("should allow only one of the types at a time", () => {
    // Valid examples

    type A = { status: "success"; data: string };
    type B = { status: "error"; message: string };

    type C = OneOf<[A, B]>;

    // Type assertions
    expectTypeOf<C>().toMatchTypeOf<A | B>();
    expectTypeOf<C>().not.toMatchTypeOf<A & B>();
  });

  it("should handle more complex types", () => {
    // Define more complex types
    type SuccessResponse = { status: "success"; data: { id: number; value: string } };
    type ErrorResponse = { status: "error"; error: { code: number; message: string } };
    type LoadingResponse = { status: "loading"; progress: number };

    type Response = OneOf<[SuccessResponse, ErrorResponse, LoadingResponse]>;

    // Type assertions
    expectTypeOf<Response>().toMatchTypeOf<SuccessResponse | ErrorResponse | LoadingResponse>();
    expectTypeOf<Response>().not.toMatchTypeOf<SuccessResponse & ErrorResponse & LoadingResponse>();
  });

  it("should handle nested OneOf types", () => {
    // Define nested types
    type InnerA = { type: "A"; value: number };
    type InnerB = { type: "B"; value: string };

    type OuterA = { outer: OneOf<[InnerA, InnerB]>; extra: boolean };
    type OuterB = { outer: { type: "C"; value: boolean }; extra: string };

    type Outer = OneOf<[OuterA, OuterB]>;

    // Type assertions
    expectTypeOf<Outer>().toMatchTypeOf<OuterA | OuterB>();
    expectTypeOf<Outer>().not.toMatchTypeOf<OuterA & OuterB>();
  });
});
