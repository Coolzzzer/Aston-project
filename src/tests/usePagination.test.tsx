import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { usePagination } from "../utils/hooks/usePagination";

describe("usePagination", () => {
  it("should initialize with the first page and correct movies per page", () => {
    const movies = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Movie ${i + 1}`,
    }));

    const { result } = renderHook(() => usePagination(movies, 6));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.currentMovies.length).toBe(6);
  });

  it("should go to the next page", () => {
    const movies = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Movie ${i + 1}`,
    }));

    const { result } = renderHook(() => usePagination(movies, 6));

    act(() => {
      result.current.nextPage();
    });

    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentMovies.length).toBe(6);
  });

  it("should go to the previous page", () => {
    const movies = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Movie ${i + 1}`,
    }));

    const { result } = renderHook(() => usePagination(movies, 6));

    act(() => {
      result.current.nextPage();
    });

    console.log("Before prevPage:", result.current.currentPage);

    act(() => {
      result.current.prevPage();
    });

    console.log("After prevPage:", result.current.currentPage);

    expect(result.current.currentPage).toBe(1);
  });

  it("should not go below page 1", () => {
    const movies = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Movie ${i + 1}`,
    }));

    const { result } = renderHook(() => usePagination(movies, 6));

    act(() => {
      result.current.prevPage();
    });

    expect(result.current.currentPage).toBe(1);
  });

  it("should handle an empty movies array", () => {
    const { result } = renderHook(() => usePagination([], 6));

    expect(result.current.currentMovies).toEqual([]);
    expect(result.current.currentPage).toBe(1);
  });
});
