import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="static">
        <Container>
          <Tabs value={pathname}>
            <Tab value="/" component={Link} label="Main page" to="/" />
            <Tab value="/users" component={Link} label="News" to="/users" />
            <Tab
              value="/profile"
              component={Link}
              label="Profile"
              to="/profile"
            />
          </Tabs>
        </Container>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
