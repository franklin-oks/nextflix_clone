import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/play.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { logout } from "../../firebase";

const Navbar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <h2>NETFLIX</h2>
        <ul>
          <li>Home</li>
          <li>Tv shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <IoSearchSharp className="icons" />
        <p className="icons" style={{ marginRight: "2rem" }}>
          Children
        </p>
        <FaRegBell className="icons" />
        <div className="navbar-profile">
          <FaRegUser
            className="profile"
            onClick={() => {
              logout();
            }}
          />
          <IoMdArrowDropdown className="profile icons" />
          <div className="drop-down">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
