import * as React from "react";
import { Link } from "react-scroll";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
  const [state, setState] = React.useState({
    mobile: false,
    drawerOpen: false,
  });

  const { mobile, drawerOpen } = state;

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800
        ? setState((prevState) => ({ ...prevState, mobile: true }))
        : setState((prevState) => ({ ...prevState, mobile: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const menuChoices = ["Home", "Courses", "Projects"];

  function getMenuChoices() {
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return menuChoices.map((text) => {
      return (
        <Grid item align="center">
          <Link
            activeClass="active"
            to={text}
            spy={true}
            smooth={true}
            duration={1500}
            style={{ textDecoration: "none", color: "white" }}
            key={text}
            onClick={() => (mobile ? handleDrawerClose() : {})}
          >
            <Tab label={text} />
          </Link>
        </Grid>
      );
    });
  }

  function displayMobile() {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <SwipeableDrawer
              sx={{
                "& .MuiPaper-root": {
                  background: "black",
                  width: "50%",
                },
              }}
              anchor={"left"}
              open={drawerOpen}
              onClose={handleDrawerClose}
            >
              <div>{getMenuChoices()}</div>
            </SwipeableDrawer>
          </Grid>
          <Grid item xs />
          <Grid item>
            <IconButton
              aria-label="Linkedin"
              onClick={() =>
                window.open("http://www.linkedin.com/in/rohanamjad", "_blank")
              }
            >
              <LinkedIn sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="GitHub"
              onClick={() =>
                window.open("http://www.github.com/RohanAmjad123", "_blank")
              }
            >
              <GitHub sx={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }

  function displayDesktop() {
    return (
      <Toolbar>
        <Grid container alignItems="center">
          {getMenuChoices()}
          <Grid item xs />
          <Grid item>
            <IconButton
              aria-label="Linkedin"
              onClick={() =>
                window.open("http://www.linkedin.com/in/rohanamjad", "_blank")
              }
            >
              <LinkedIn sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="GitHub"
              onClick={() =>
                window.open("http://www.github.com/RohanAmjad123", "_blank")
              }
            >
              <GitHub sx={{ color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  }

  return (
    <AppBar sx={{ backgroundColor: "black" }} position="fixed">
      {mobile ? displayMobile() : displayDesktop()}
    </AppBar>
  );
}

export default Navigation;
