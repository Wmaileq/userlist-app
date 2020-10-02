import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const UsersComponent = ({ isLoading, users, isError }) => (
  <List>
    <Typography variant="h4">The most awesome users list</Typography>
    {isLoading ? (
      <CircularProgress />
    ) : isError ? (
      <Alert severity="error">Oops... some error happened</Alert>
    ) : (
      users.map((user) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={
                <Typography
                  component="span"
                  variant="body2"
                  color="textPrimary"
                >
                  {user.email} - Registered{" "}
                  {new Date(user.createdAt).toLocaleDateString()}
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))
    )}
  </List>
);

UsersComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      gender: PropTypes.oneOf(["female", "male"]).isRequired,
      createdAt: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default UsersComponent;
