import { vi, describe, it, expect } from "vitest";
import { MiddlewareAPI, Dispatch, AnyAction } from "@reduxjs/toolkit";
import loggerMiddleware from "./../store/loggerMiddleware";

describe("loggerMiddleware", () => {
  it("logs actions and updated state", () => {
    const consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    const mockDispatch = vi.fn() as Dispatch<AnyAction>;

    const mockStore: MiddlewareAPI<Dispatch<AnyAction>> = {
      getState: () => ({ test: "state" }),
      dispatch: mockDispatch, 
    };

    const next: (action: unknown) => unknown = vi.fn((action) => action);

    const action: AnyAction = { type: "test/action" };

    loggerMiddleware(mockStore)(next)(action);

    expect(consoleLogSpy).toHaveBeenCalledWith("Dispatching action:", action);
    expect(consoleLogSpy).toHaveBeenCalledWith("Updated state:", { test: "state" });

    consoleLogSpy.mockRestore();
  });
});
