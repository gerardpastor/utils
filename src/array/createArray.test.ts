import { describe, it } from "vitest";
import createArray from "./createArray";

describe("createArray", () => {
  it.concurrent("should create an array of length 5 filled with the index of each element", ({ expect }) => {
    const result = createArray(5);
    expect(result).toEqual([0, 1, 2, 3, 4]);
  });

  it.concurrent("should create an array of length 5 filled with the result of the callback function", ({ expect }) => {
    const result = createArray(5, () => Math.random());
    expect(result).toHaveLength(5);
    result.forEach((value) => expect(typeof value).toBe("number"));
  });

  it.concurrent("should create an array of length 3 filled with strings", ({ expect }) => {
    const result = createArray(3, (_, i) => `item${i + 1}`);
    expect(result).toEqual(["item1", "item2", "item3"]);
  });

  it.concurrent("should create an array of length 4 filled with booleans", ({ expect }) => {
    const result = createArray(4, (_, i) => i % 2 === 0);
    expect(result).toEqual([true, false, true, false]);
  });

  it.concurrent("should create an array of length 3 filled with arrays", ({ expect }) => {
    const result = createArray(3, (_, i) => [i, `item${i + 1}`]);
    expect(result).toEqual([
      [0, "item1"],
      [1, "item2"],
      [2, "item3"],
    ]);
  });

  it.concurrent("should create an array of length 2 filled with objects", ({ expect }) => {
    const result = createArray(2, (_, i) => ({ key: i }));
    expect(result).toEqual([{ key: 0 }, { key: 1 }]);
  });

  it.concurrent("should create an empty array when length is 0", ({ expect }) => {
    const result = createArray(0);
    expect(result).toEqual([]);
  });

  it.concurrent(
    "should create an array of length 5 filled with undefined when callback returns undefined",
    ({ expect }) => {
      const result = createArray(5, () => undefined);
      expect(result).toEqual([undefined, undefined, undefined, undefined, undefined]);
    }
  );
});
