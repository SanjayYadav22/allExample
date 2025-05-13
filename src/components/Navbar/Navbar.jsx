import "./Navbar.css";
import logo from "../../assets/logo.jpg";

import { Link } from "react-router";

function Navbar() {
  return (
    <div className="container">
      <div className="nav">
        <div className="img-logo">
          <Link to="/">
            {" "}
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="menu-list">
          <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/Approach">Approach</Link>
            <Link to="/Industries">Industries</Link>
            <Link to="/Training">Training</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
