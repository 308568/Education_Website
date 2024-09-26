import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

   return (
    <>
      <div className="nl1">
        <p
          style={{
            float: "left",
            marginTop: "2%",
            marginLeft: "5%",
            color: "green",
          }}
        >

          {" "}
          Have a questions?
        </p>
        <p
          className="mx-1 text-success"
          style={{ float: "left", marginTop: "2%" }}
        >
          {" "}
          <b>Phone:</b>10 20 123 456
        </p>
        <p
          className="mx-1 text-success"
          style={{ float: "left", marginTop: "2%" }}
        >
          {" "}
          <b>Email:</b> info@mydomain.com
        </p>

        <div className="auth-links">
          <NavLink
            to="/Register"
            className="nav-link p-1 px-4 text-light"
            activeClassName="active"
            style={{ backgroundColor: "#51BE78" }}
          >
            Register
          </NavLink>
          <NavLink
            to="/Login"
            className="nav-link1"
            activeClassName="active"
            style={{ color: "#51BE78" }}
          >
            <b>Log in</b>
          </NavLink>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg ">
        <a href="/" className="navbar-brand">
          <img src="assests/name.jpg" alt="" className="brand-logo" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav m-auto">
            <li
              className="nav-item"
              style={{ marginLeft: "5%", float: "left" }}
            >
              <NavLink to="/" className="nav-link" activeClassName="active">
                HOME
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="/About"
                className="nav-link"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="/Services"
                className="nav-link"
                activeClassName="active"
              >
                ADMISSIONS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Courses1"
                className="nav-link"
                activeClassName="active"
              >
                COURSES
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink
                to="/Contact"
                className="nav-link"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
            <li
              className="nav-item social-icons"
              style={{ marginLeft: "8%", float: "left" }}
            >
              <NavLink
                to="https://www.facebook.com/login.php/"
                className="nav-link"
                activeClassName="active"
              >
                <img src="assests/faceb.png" alt="" className="social-icon" />
              </NavLink>
              <NavLink
                to="https://in.linkedin.com/"
                className="nav-link"
                activeClassName="active"
              >
                <img src="assests/linkd.png" alt="" className="social-icon" />
              </NavLink>
              <NavLink
                to="https://x.com/login="
                className="nav-link"
                activeClassName="active"
              >
                <img src="assests/twitter.png" alt="" className="social-icon" />
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar;


