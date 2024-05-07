import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLoggedout } from "../../../Redux-Toolkit/Slice/AuthSlice";

export default function Header() {
  const { isloggedIn } = useSelector((state) => state?.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(handleLoggedout());
    navigate("/");
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
      <Navbar.Brand as={Link} to="/home">
        React Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto ms-auto">
          <Nav.Link as={Link} to="/home" className="text-white">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className="text-white">
            About Us
          </Nav.Link>
         
          <Nav.Link as={Link} to="/blog" className="text-white">
            Blogs
          </Nav.Link>
          <Nav.Link as={Link} to="/courses" className="text-white">
            Courses
          </Nav.Link>
          <Nav.Link href="" className="text-white">
            Contact Us
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <NavDropdown
            title={<FaUser />}
            id="basic-nav-dropdown"
            drop="down"
            style={{ position: "absolute", right: 150, top: 10 }}
          >
            {isloggedIn ? (
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            ) : (
              <NavDropdown.Item as={Link} to="/">
                Login
              </NavDropdown.Item>
            )}
            <NavDropdown.Item as={Link} to="/register">
              Register
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
