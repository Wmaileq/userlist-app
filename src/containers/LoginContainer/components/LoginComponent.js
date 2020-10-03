import React, { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const LoginComponent = ({ isLoading, error, onLoginClick }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClick = useCallback(() => {
    onLoginClick(username, password);
  }, [onLoginClick, username, password]);

  const onUsernameChange = useCallback((e) => {
    setUsername(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Container maxWidth="xs">
      <Box mb={2} mt={6}>
        <TextField
          value={username}
          onChange={onUsernameChange}
          fullWidth
          label="Username"
        />
      </Box>
      <Box mb={4}>
        <TextField
          value={password}
          onChange={onPasswordChange}
          fullWidth
          label="Password"
        />
      </Box>
      {isLoading && (
        <Box mb={2} display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box mb={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      <Button onClick={onClick} fullWidth variant="contained" color="primary">
        Login
      </Button>
    </Container>
  );
};

LoginComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  onLoginClick: PropTypes.func.isRequired,
};

export default memo(LoginComponent);
