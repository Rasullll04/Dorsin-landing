import React from "react";
import { navItems } from "../../data/navbar.data";
import Button from "../Button";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href className="navbar-brand p-0">
        <h1 className="m-0">
          <i className="fa fa-server me-3" />
          GreenHost
        </h1>
      </a>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="index.html" className="nav-item nav-link active">
            Home
          </a>
          <a href="about.html" className="nav-item nav-link">
            About
          </a>
          <a href="domain.html" className="nav-item nav-link">
            Domain
          </a>
          <a href="hosting.html" className="nav-item nav-link">
            Hosting
          </a>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <div className="dropdown-menu ">
              <a href="team.html" className="dropdown-item">
                Our Team
              </a>
              <a href="testimonial.html" className="dropdown-item">
                Testimonial
              </a>
              <a href="comparison.html" className="dropdown-item">
                Comparison
              </a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">
            Contact
          </a>
        </div>
        <Button title="Register" p="py-2 px-4" />
      </div>
    </nav>
  );
}

export default Navbar;
