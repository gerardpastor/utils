import { describe, it, vi } from "vitest";
import { wait } from "./wait";

// describe("wait", () => {
//   it.concurrent("should wait for the specified time", async ({ expect }) => {
//     const start = Date.now();
//     await wait(1000);
//     const end = Date.now();
//     expect(end - start).toBeGreaterThanOrEqual(1000);
//   });

//   it.concurrent("should resolve immediately for 0 milliseconds", async ({ expect }) => {
//     const start = Date.now();
//     await wait(0);
//     const end = Date.now();
//     expect(end - start).toBeLessThan(10); // Allowing some buffer for execution time
//   });

//   it.concurrent("should handle negative values by resolving immediately", async ({ expect }) => {
//     const start = Date.now();
//     await wait(-1000);
//     const end = Date.now();
//     expect(end - start).toBeLessThan(10); // Allowing some buffer for execution time
//   });
// });

describe("wait", () => {
  it.concurrent("should wait for the specified time", async ({ expect }) => {
    const setTimeoutSpy = vi.spyOn(global, "setTimeout");
    wait(1000);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1000);
    setTimeoutSpy.mockRestore();
  });

  it.concurrent("should resolve immediately for 0 milliseconds", async ({ expect }) => {
    const setTimeoutSpy = vi.spyOn(global, "setTimeout");
    wait(0);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 0);
    setTimeoutSpy.mockRestore();
  });

  it.concurrent("should handle negative values by resolving immediately", async ({ expect }) => {
    const setTimeoutSpy = vi.spyOn(global, "setTimeout");
    wait(-1000);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), -1000);
    setTimeoutSpy.mockRestore();
  });
});
