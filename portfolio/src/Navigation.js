import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tab from "@mui/material/Tab";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import signature from "./images/Signature6.png";

function Navigation() {
  return (
    <AppBar sx={{backgroundColor: "black"}} position="static" color="secondary">
      <Toolbar>
        <Tab label="Home" component={Link} to="./Home" />
        <Tab label="Courses" component={Link} to="./Courses" />
        <Tab label="Projects" component={Link} to="./Projects" />
        <LinkedIn />
        <GitHub />
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
