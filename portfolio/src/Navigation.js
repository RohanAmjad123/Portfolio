import { useState, useEffect } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";

function Navigation() {
  const [state, setState] = useState({
    mobile: false,
    drawerOpen: false,
  });

  const { mobile, drawerOpen } = state;

  const setResponsiveness = () => {
    return window.innerWidth < 800
      ? setState((state) => ({ ...state, mobile: true }))
      : setState((state) => ({ ...state, mobile: false }));
  };

  const handleDrawer = () => {
    return drawerOpen
      ? setState((state) => ({ ...state, drawerOpen: false }))
      : setState((state) => ({ ...state, drawerOpen: true }));
  }; 

  useEffect(() => {
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const menuChoices = ["Home", "Courses", "Projects"];

  function getMenuChoices() {
    return menuChoices.map((choice) => {
      return (
        <Grid item align="center">
          <Link
            activeClass="active"
            to={choice}
            spy={true}
            smooth={true}
            duration={1500}
            key={choice}
            onClick={handleDrawer}
          >
            <Button sx={{ mx: 1, color: "white" }}>{choice}</Button>
          </Link>
        </Grid>
      );
    });
  }

  function displayMobile() {
    return (
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <IconButton onClick={handleDrawer}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <SwipeableDrawer
              sx={{
                "& .MuiPaper-root": {
                  background: "black",
                  width: "300px",
                },
              }}
              anchor={'left'}
              open={drawerOpen}
              onClose={handleDrawer}
            > 
            <Grid container direction="column">
              <Grid item p={2} >
                <IconButton onClick={handleDrawer}>
                  <CloseIcon sx={{ color: "white" }}/>
                </IconButton>
              </Grid>
              <Grid container spacing={2} direction="column">
                {getMenuChoices()}
              </Grid>
            </Grid>
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
