import React, { use } from "react";
import logo from "../../public/logo.png";
import { NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogout = () => {
    logOut;
    console.log("logged out");
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow z-20"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl">
          <img src={logo} alt="logo" className="h-6 mr-0.5" />
          <div>
            <span className="text-amber-600">Warm</span>Paws
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <button onClick={handleLogout} className="btn">
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <NavLink to="/login" className="btn">
            Login
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
