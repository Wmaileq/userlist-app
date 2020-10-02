export const selectUsersStore = (state) => state.users;

export const selectUsers = (state) => selectUsersStore(state).users;

export const selectIsLoading = (state) => selectUsersStore(state).isLoading;

export const selectIsError = (state) => selectUsersStore(state).isError;
