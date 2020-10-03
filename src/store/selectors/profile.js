export const selectProfileStore = (state) => state.profile;

export const selectProfile = (state) => selectProfileStore(state).profile;

export const selectIsLoading = (state) => selectProfileStore(state).isLoading;

export const selectIsError = (state) => selectProfileStore(state).isError;
