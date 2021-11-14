import "./Navigation.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import signature from "./images/Signature6.png";

function Navigation() {
  return (
    <Navbar className="nav" expand="lg" variant="dark" sticky="top">
      <Navbar.Brand as={Link} to="/">
        <img src={signature} width="128" height="40" alt="Rohan Amjad" />
      </Navbar.Brand>
      <Nav>
        <NavItem>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link as={Link} to="/courses">
            Courses
          </Nav.Link>
        </NavItem>
        <NavItem>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
