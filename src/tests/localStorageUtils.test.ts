import { describe, it, expect, beforeEach, vi } from "vitest";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from "../utils/storage/localStorage";

describe("localStorage utilities", () => {
  beforeEach(() => {
    vi.spyOn(Storage.prototype, "setItem");
    vi.spyOn(Storage.prototype, "getItem");
    vi.spyOn(Storage.prototype, "removeItem");
    localStorage.clear();
  });

  it("should store an item in localStorage", () => {
    setLocalStorageItem("testKey", { name: "John Doe" });
    expect(localStorage.setItem).toHaveBeenCalledWith("testKey", JSON.stringify({ name: "John Doe" }));
  });

  it("should retrieve an item from localStorage", () => {
    localStorage.setItem("testKey", JSON.stringify({ name: "John Doe" }));
    const item = getLocalStorageItem<{ name: string }>("testKey");
    expect(item).toEqual({ name: "John Doe" });
  });

  it("should return undefined if key is not found", () => {
    const item = getLocalStorageItem<{ name: string }>("nonExistentKey");
    expect(item).toBeUndefined();
  });

  it("should remove an item from localStorage", () => {
    localStorage.setItem("testKey", JSON.stringify({ name: "John Doe" }));
    removeLocalStorageItem("testKey");
    expect(localStorage.removeItem).toHaveBeenCalledWith("testKey");
    expect(localStorage.getItem("testKey")).toBeNull();
  });
});