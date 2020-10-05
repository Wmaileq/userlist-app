import {
  selectAuthStore,
  selectError,
  selectIsAuthenticated,
  selectIsLoading,
} from "../auth";

describe("auth selectors tests", () => {
  const mockIsAuthenticated = true;
  const mockError = "som error";
  const mockIsLoading = true;
  const mockState = {
    auth: {
      isAuthenticated: mockIsAuthenticated,
      error: mockError,
      isLoading: mockIsLoading,
    },
    anotherStore: {
      isAuthenticated: false,
    },
  };

  it("should select auth store", () => {
    expect(selectAuthStore(mockState)).toStrictEqual({
      isAuthenticated: mockIsAuthenticated,
      error: mockError,
      isLoading: mockIsLoading,
    });
  });

  it("should select isAuthenticated from auth store", () => {
    expect(selectIsAuthenticated(mockState)).toBe(mockIsAuthenticated);
  });

  it("should select error from auth store", () => {
    expect(selectError(mockState)).toBe(mockError);
  });

  it("should select isAuthenticated from auth store", () => {
    expect(selectIsLoading(mockState)).toBe(mockIsLoading);
  });
});
