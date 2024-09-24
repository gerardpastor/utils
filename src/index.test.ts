import { describe, it } from "vitest";
import {
  randBelow,
  randRange,
  randIndex,
  randElement,
  randSubset,
  randArrayInRange,
  shuffle,
  randKey,
  randValue,
  randWeightedValue,
} from "./index";

describe("randBelow", () => {
  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with the specified step",
    async ({ expect }) => {
      const max = 100;
      const step = 5;
      const result = randBelow(max, step);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
      expect(result % step).toBe(0);
    },
  );

  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with the default step",
    async ({ expect }) => {
      const max = 100;
      const result = randBelow(max);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
      expect(result % 1).toBe(0);
    },
  );

  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with step equal to 1",
    async ({ expect }) => {
      const max = 100;
      const step = 1;
      const result = randBelow(max, step);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
      expect(result % step).toBe(0);
    },
  );

  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with step greater than max",
    async ({ expect }) => {
      const max = 10;
      const step = 15;
      const result = randBelow(max, step);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
    },
  );

  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with step equal to max",
    async ({ expect }) => {
      const max = 10;
      const step = 10;
      const result = randBelow(max, step);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).toBeLessThan(max);
    },
  );

  it.concurrent(
    "randBelow should generate a random number from 0 to max (exclusive) with the specified step with a custom random function",
    async ({ expect }) => {
      const max = 100;
      const step = 5;
      const customRandFn = () => 0.5; // Always return 0.5, which is within the max range
      const result = randBelow(max, step, customRandFn);
      expect(result).toBe(50);
    },
  );
});

describe("randRange", () => {
  it.concurrent("randRange should generate a random number from a specified range", async ({ expect }) => {
    const min = 10;
    const max = 50;
    const result = randRange(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThan(max);
  });

  it.concurrent(
    "randRange should generate a random number from a specified range with the default step",
    async ({ expect }) => {
      const min = 10;
      const max = 50;
      const result = randRange(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
      expect(result % 1).toBe(0);
    },
  );

  it.concurrent(
    "randRange should generate a random number from a specified range with a custom step",
    async ({ expect }) => {
      const min = 10;
      const max = 50;
      const step = 5;
      const result = randRange(min, max, step);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
      expect((result - min) % step).toBe(0);
    },
  );

  it.concurrent(
    "randRange should generate a random number from a range where min and max are equal",
    async ({ expect }) => {
      const min = 10;
      const max = 10;
      const result = randRange(min, max);
      expect(result).toEqual(min);
    },
  );

  it.concurrent(
    "randRange should generate a random number from a range where min is greater than max",
    async ({ expect }) => {
      const min = 50;
      const max = 10;
      const result = randRange(min, max);
      expect(result).toBeGreaterThanOrEqual(max);
      expect(result).toBeLessThan(min);
    },
  );

  it.concurrent(
    "randRange should generate a random number from a specified range with a custom random function",
    async ({ expect }) => {
      const min = 10;
      const max = 50;
      const step = 5;
      const customRandFn = () => 0.5; // Always return 0.5, which is within the range
      const result = randRange(min, max, step, customRandFn);
      expect(result).toBe(30);
    },
  );
});

describe("randIndex", () => {
  it.concurrent("randIndex should generate a random index from the given array", async ({ expect }) => {
    const array = ["a", "b", "c", "d", "e"];
    const index = randIndex(array);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(array.length);
  });

  it.concurrent("randIndex should generate a random index from an empty array and return -1", async ({ expect }) => {
    const array: any[] = [];
    const index = randIndex(array);
    expect(index).toBe(-1);
  });

  it.concurrent(
    "randIndex should generate a random index from an array with a single element and return 0",
    async ({ expect }) => {
      const array = ["single"];
      const index = randIndex(array);
      expect(index).toBe(0);
    },
  );

  it.concurrent(
    "randIndex should generate a random index from the given array with a custom random function",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => 2 / 3; // Always return 2/3, which is within the array length range
      const index = randIndex(array, customRandFn);
      expect(index).toBe(2);
    },
  );

  it.concurrent(
    "randIndex should generate a random index from an array with a custom random function that returns negative values",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => -1; // Always return -1, which is out of the array length range
      const index = randIndex(array, customRandFn);
      expect(index).toBe(-1);
    },
  );

  it.concurrent(
    "randIndex should generate a random index from an array with a custom random function that returns values greater than or equal to array length",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => 2; // Always return 2, which generates an index out of the array length range
      const index = randIndex(array, customRandFn);
      expect(index).toBe(-1);
    },
  );
});

describe("randElement", () => {
  it.concurrent("randElement should get a random element from the given array", async ({ expect }) => {
    const array = ["a", "b", "c", "d", "e"];
    const element = randElement(array);
    expect(array).toContain(element);
  });

  it.concurrent("randElement should get undefined from an empty array", async ({ expect }) => {
    const array: any[] = [];
    const element = randElement(array);
    expect(element).toBe(undefined);
  });

  it.concurrent("randElement should get the only element from an array with a single element", async ({ expect }) => {
    const array = ["single"];
    const element = randElement(array);
    expect(element).toBe("single");
  });

  it.concurrent(
    "randElement should get a random element from the given array with a custom random function",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => 2 / 3; // Always return 2/3, which is within the array length range
      const element = randElement(array, customRandFn);
      expect(element).toBe("c");
    },
  );

  it.concurrent(
    "randIndex should generate a random index from an array with a custom random function that returns negative values",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => -1; // Always return -1, which is out of the array length range
      const element = randElement(array, customRandFn);
      expect(element).toBe(undefined);
    },
  );

  it.concurrent(
    "randIndex should generate a random index from an array with a custom random function that returns values greater than or equal to array length",
    async ({ expect }) => {
      const array = ["a", "b", "c"];
      const customRandFn = () => 2; // Always return 2, which generates an index out of the array length range
      const element = randElement(array, customRandFn);
      expect(element).toBe(undefined);
    },
  );
});

describe("randSubset", () => {
  it.concurrent("randSubset should get a random subset of elements from the given array", async ({ expect }) => {
    const array = ["a", "b", "c", "d", "e"];
    const size = 3;
    const subset = randSubset(array, size);
    expect(subset).toHaveLength(size);
    subset.forEach((element) => {
      expect(array).toContain(element);
    });
  });
  it.concurrent("randSubset should return an empty array when the size is 0", async ({ expect }) => {
    const array = ["a", "b", "c", "d", "e"];
    const size = 0;
    const subset = randSubset(array, size);
    expect(subset).toHaveLength(0);
  });

  it.concurrent(
    "randSubset should return an array containing all elements when the size is greater than the array length",
    async ({ expect }) => {
      const array = ["a", "b", "c", "d", "e"];
      const size = 10;
      const subset = randSubset(array, size);
      expect(subset).toHaveLength(5);
      subset.forEach((element) => {
        expect(array).toContain(element);
      });
    },
  );

  it.concurrent(
    "randSubset should get the full array when the size is equal to the array length",
    async ({ expect }) => {
      const array = ["a", "b", "c", "d", "e"];
      const size = array.length;
      const subset = randSubset(array, size);
      expect(subset).toHaveLength(size);
      subset.forEach((element) => {
        expect(array).toContain(element);
      });
    },
  );

  it.concurrent(
    "randSubset should get the full array when the size is greater than the array length",
    async ({ expect }) => {
      const array = ["a", "b", "c", "d", "e"];
      const size = 10;
      const subset = randSubset(array, size);
      expect(subset).toHaveLength(array.length);
      subset.forEach((element) => {
        expect(array).toContain(element);
      });
    },
  );

  it.concurrent(
    "randSubset should get a random subset of elements from the given array with a custom random function",
    async ({ expect }) => {
      const array = ["a", "b", "c", "d", "e"];
      const size = 3;
      const customRandFn = () => 0.5; // Always return 0.5, which will cause the array to be split in half and shuffled accordingly
      const subset = randSubset(array, size, customRandFn);
      expect(subset).toHaveLength(size);
      expect(subset).toEqual(["a", "b", "c"]);
    },
  );
});

describe("randArrayInRange", () => {
  it.concurrent(
    "randArrayInRange should generate an array of n random numbers within the specified range",
    async ({ expect }) => {
      const n = 5;
      const min = 10;
      const max = 50;
      const step = 5;
      const result = randArrayInRange(n, min, max, step);
      expect(result).toHaveLength(n);
      result.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThan(max);
        expect((num - min) % step).toBe(0);
      });
    },
  );

  it.concurrent("randArrayInRange should generate an empty array when n is 0", async ({ expect }) => {
    const n = 0;
    const min = 10;
    const max = 50;
    const step = 5;
    const result = randArrayInRange(n, min, max, step);
    expect(result).toHaveLength(0);
  });

  it.concurrent("randArrayInRange should generate an empty array when n is negative", async ({ expect }) => {
    const n = -5;
    const min = 10;
    const max = 50;
    const step = 5;
    const result = randArrayInRange(n, min, max, step);
    expect(result).toHaveLength(0);
  });

  it.concurrent(
    "randArrayInRange should generate an array of n random numbers within the specified range with the default step",
    async ({ expect }) => {
      const n = 5;
      const min = 10;
      const max = 50;
      const result = randArrayInRange(n, min, max);
      expect(result).toHaveLength(n);
      result.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThan(max);
      });
    },
  );

  it.concurrent(
    "randArrayInRange should generate an array of n random numbers within the specified range with a custom step",
    async ({ expect }) => {
      const n = 5;
      const min = 10;
      const max = 50;
      const step = 5;
      const result = randArrayInRange(n, min, max, step);
      expect(result).toHaveLength(n);
      result.forEach((num) => {
        expect(num).toBeGreaterThanOrEqual(min);
        expect(num).toBeLessThan(max);
        expect((num - min) % step).toBe(0);
      });
    },
  );

  it.concurrent(
    "randArrayInRange should generate an array of n random numbers within the specified range with a custom random function",
    async ({ expect }) => {
      const n = 5;
      const min = 10;
      const max = 50;
      const step = 5;
      const customRandFn = () => 0.5; // Always return 0.5, which will cause the array to be split in half and shuffled accordingly
      const result = randArrayInRange(n, min, max, step, customRandFn);
      expect(result).toHaveLength(n);
      expect(result).toEqual([30, 30, 30, 30, 30]);
    },
  );
});

describe("shuffle", () => {
  it.concurrent(
    "shuffle should return a new array with the elements of the given array shuffled",
    async ({ expect }) => {
      const array = [1, 2, 3, 4, 5];
      const shuffledArray = shuffle(array);
      expect(shuffledArray).toHaveLength(array.length);
      expect(shuffledArray.sort()).toEqual(array.sort()); // Ensure all elements are preserved and no new elements added or removed
    },
  );

  it.concurrent("shuffle should not modify the original array", async ({ expect }) => {
    const array = [1, 2, 3, 4, 5];
    const originalArray = [...array];
    shuffle(array);
    expect(array).toEqual(originalArray);
  });

  it.concurrent("shuffle should return an empty array when the input array is empty", async ({ expect }) => {
    const array: any[] = [];
    const shuffledArray = shuffle(array);
    expect(shuffledArray).toHaveLength(0);
  });

  it.concurrent(
    "shuffle should return an array with a single element when the input array has only one element",
    async ({ expect }) => {
      const array = [42];
      const shuffledArray = shuffle(array);
      expect(shuffledArray).toHaveLength(1);
      expect(shuffledArray).toEqual(array);
    },
  );

  it.concurrent(
    "shuffle should return a new array with the elements of the given array shuffled with a custom random function",
    async ({ expect }) => {
      const array = [1, 2, 3, 4, 5];
      const customRandFn = () => 0.5; // Always return 0.5, which will cause the array to be split in half and shuffled accordingly
      const shuffledArray = shuffle(array, customRandFn);
      expect(shuffledArray).toEqual([1, 2, 3, 4, 5]);
    },
  );
});

describe("randKey", () => {
  it.concurrent("randKey should return a random key from the given object", async ({ expect }) => {
    const object = { foo: 1, bar: 2, baz: 3 };
    const randomKey = randKey(object);
    expect(Object.keys(object)).toContain(randomKey);
  });

  it.concurrent("randKey should return undefined when the input object is empty", async ({ expect }) => {
    const object: any = {};
    const randomKey = randKey(object);
    expect(randomKey).toBeUndefined();
  });

  it.concurrent(
    "randKey should return a random key from the given object with a custom random function",
    async ({ expect }) => {
      const object = { foo: 1, bar: 2, baz: 3 };
      const customRandFn = () => 0.5; // Always return 0.5, which will select the key "bar"
      const randomKey = randKey(object, customRandFn);
      expect(randomKey).toBe("bar");
    },
  );

  it.concurrent(
    "randKey should return undefined when the custom random function returns a value out of range",
    async ({ expect }) => {
      const object = { foo: 1, bar: 2, baz: 3 };
      const customRandFn = () => 2; // Always return 2, which is out of the range of the object keys
      const randomKey = randKey(object, customRandFn);
      expect(randomKey).toBeUndefined();
    },
  );
});

describe("randValue", () => {
  it.concurrent("randValue should return a random value from the given object", async ({ expect }) => {
    const object = { foo: 1, bar: 2, baz: 3 };
    const randomValue = randValue(object);
    expect(Object.values(object)).toContain(randomValue);
  });

  it.concurrent("randValue should return undefined when the input object is empty", async ({ expect }) => {
    const object: any = {};
    const randomValue = randValue(object);
    expect(randomValue).toBeUndefined();
  });

  it.concurrent(
    "randValue should return a random value from the given object with a custom random function",
    async ({ expect }) => {
      const object = { foo: 1, bar: 2, baz: 3 };
      const customRandFn = () => 0.5; // Always return 0.5, which will select the value 2
      const randomValue = randValue(object, customRandFn);
      expect(randomValue).toBe(2);
    },
  );

  it.concurrent(
    "randValue should return undefined when the custom random function returns a value out of range",
    async ({ expect }) => {
      const object = { foo: 1, bar: 2, baz: 3 };
      const customRandFn = () => 2; // Always return 2, which is out of the range of the object values
      const randomValue = randValue(object, customRandFn);
      expect(randomValue).toBeUndefined();
    },
  );
});

describe("randWeightedValue", () => {
  it.concurrent("randWeightedValue should return a random value from the weighted set", async ({ expect }) => {
    const weightedValues = { apple: 2, banana: 3, orange: 5 };
    const randomValue = randWeightedValue(weightedValues);
    expect(Object.keys(weightedValues)).toContain(randomValue);
  });

  it.concurrent(
    "randWeightedValue should return undefined when the input weighted set is empty",
    async ({ expect }) => {
      const weightedValues: { [key: string]: number } = {};
      const randomValue = randWeightedValue(weightedValues);
      expect(randomValue).toBeUndefined();
    },
  );

  it.concurrent(
    "randWeightedValue should return the only value when the weighted set contains only one value",
    async ({ expect }) => {
      const weightedValues = { apple: 1 };
      const randomValue = randWeightedValue(weightedValues);
      expect(randomValue).toBe("apple");
    },
  );

  it.concurrent(
    "randWeightedValue should return a random value from the weighted set with a custom random function",
    async ({ expect }) => {
      const weightedValues = { apple: 1, banana: 1, orange: 1 };
      const customRandFn = () => 0.5; // Always return 0.5, which will select the value "banana"
      const randomValue = randWeightedValue(weightedValues, customRandFn);
      expect(randomValue).toBe("banana");
    },
  );

  it.concurrent(
    "randWeightedValue should return the first value when the random number is below the weight of the first value",
    async ({ expect }) => {
      const weightedValues = { apple: 10, banana: 20, orange: 30 };
      const customRandFn = () => 0.25; // Random number is below the weight of "banana"
      const randomValue = randWeightedValue(weightedValues, customRandFn);
      expect(randomValue).toBe("banana");
    },
  );

  it.concurrent(
    "randWeightedValue should return the last value when the random number is above the weight of the last value",
    async ({ expect }) => {
      const weightedValues = { apple: 10, banana: 20, orange: 30 };
      const customRandFn = () => 0.75; // Random number is above the weight of "banana"
      const randomValue = randWeightedValue(weightedValues, customRandFn);
      expect(randomValue).toBe("orange");
    },
  );
});
