import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Grid,
  CircularProgress,
  Container,
  Typography,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const ProfileComponent = ({ isLoading, profile, isError, onLogoutClick }) => (
  <Container>
    <Box mb={2}>
      <Typography variant="h3">My profile</Typography>
    </Box>
    {isLoading ? (
      <CircularProgress />
    ) : isError ? (
      <Alert severity="error">Oops... Profile loading error.</Alert>
    ) : (
      profile && (
        <Grid container>
          <Grid xs="auto" item>
            <img alt={profile.name} src={profile.image} />
          </Grid>
          <Grid xs="auto" item>
            <Box mb={2}>
              <Typography variant="h4">{profile.name}</Typography>
            </Box>
            <Box mb={2}>
              <Typography variant="h5">{profile.email}</Typography>
            </Box>
            <Box mb={2}>
              <Button variant="contained" onClick={onLogoutClick}>
                Logout
              </Button>
            </Box>
          </Grid>
        </Grid>
      )
    )}
  </Container>
);

ProfileComponent.defaultProps = {
  profile: null,
};

ProfileComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    gender: PropTypes.string,
    createdAt: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
    image: PropTypes.string,
  }),
  isError: PropTypes.bool.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default memo(ProfileComponent);
