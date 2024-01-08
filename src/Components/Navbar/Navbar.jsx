// Navbar.jsx
import { IoSearchOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  return (
    <header>
      <div className="booking-logo">
        <h1>Booking</h1>
      </div>
      <nav>
        <div
          className="menu-toggle"
          // onClick={handleMenuToggle}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul>
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tours">Tours</NavLink>
          </li>
          <li>
            <NavLink to="/destinations">Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/pages">Pages</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-user-icons">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
          />
          <IoSearchOutline className="search-icon" />
        </div>
        <div className="user-icon">
          <FiUser />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
