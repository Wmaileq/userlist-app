import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProfile,
  selectIsError,
  selectIsLoading,
} from "../../store/selectors/profile";
import { loadProfile, resetProfile } from "../../store/actions/profile";

import ProfileComponent from "./components/ProfileComponent";
import { logout } from "../../store/actions/auth";

const ProfileContainer = () => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(loadProfile());

    return () => {
      dispatch(resetProfile());
    };
  }, [dispatch]);

  const onLogoutClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <ProfileComponent
      profile={profile}
      isLoading={isLoading}
      isError={isError}
      onLogoutClick={onLogoutClick}
    />
  );
};

export default ProfileContainer;
