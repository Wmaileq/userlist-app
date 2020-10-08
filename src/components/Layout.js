import React from "react";
import PropTypes from "prop-types";
import { useLocation, Link } from "react-router-dom";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";

import { routes } from "../constants";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container>
          <Tabs value={pathname}>
            <Tab
              value={routes.main}
              component={Link}
              label="Main page"
              to={routes.main}
            />
            <Tab
              value={routes.users}
              component={Link}
              label="News"
              to={routes.users}
            />
            <Tab
              value={routes.profile}
              component={Link}
              label="Profile"
              to={routes.profile}
            />
          </Tabs>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
