export const selectAuthStore = (state) => state.auth;

export const selectIsAuthenticated = (state) =>
  selectAuthStore(state).isAuthenticated;

export const selectError = (state) => selectAuthStore(state).error;
