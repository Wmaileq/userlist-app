import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import UsersComponent from "./components/UsersComponent";

import {
  selectIsError,
  selectIsLoading,
  selectUsers,
} from "../../store/selectors/users";
import { loadUsers } from "../../store/actions/users";

const UsersContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <UsersComponent users={users} isLoading={isLoading} isError={isError} />
  );
};

export default UsersContainer;
