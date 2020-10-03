import React, { memo } from "react";
import {
  Box,
  Grid,
  CircularProgress,
  Container,
  Typography,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const ProfileComponent = ({ isLoading, profile, isError }) => (
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
          </Grid>
        </Grid>
      )
    )}
  </Container>
);

export default memo(ProfileComponent);
