export const selectAuthStore = (state) => state.auth;

export const selectIsAuthenticated = (state) =>
  selectAuthStore(state).isAuthenticated;

export const selectError = (state) => selectAuthStore(state).error;

export const selectIsLoading = (state) => selectAuthStore(state).isLoading;
