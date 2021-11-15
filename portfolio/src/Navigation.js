import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import signature from "./images/Signature6.png";

function Navigation() {
  return (
    <AppBar
      sx={{ backgroundColor: "black" }}
      position="sticky"
      color="secondary"
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <Tab label="Home" component={Link} to="./Home" />
          </Grid>
          <Grid item>
            <Tab label="Courses" component={Link} to="./Courses" />
          </Grid>
          <Grid item>
            <Tab label="Projects" component={Link} to="./Projects" />
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
    </AppBar>
  );
}

export default Navigation;
