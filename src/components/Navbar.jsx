import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { HiUserCircle } from "react-icons/hi2";
import { FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
    <div className="navbar bg-base-200 shadow-sm px-[3%] md:px-[5%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-20"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="btn btn-ghost text-2xl" to="/">
          <img src={logo} alt="logo" className="h-6 mr-0.5" />
          <div>
            <span className="text-amber-600">Warm</span>Paws
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {user ? (
        <div className="navbar-end items-center">
          <div
            className="relative tooltip tooltip-bottom mr-2 hidden md:flex"
            data-tip={user?.displayName || "User"}
          >
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="profile picture"
                className="w-10 h-10 rounded-full border-2 border-amber-600 cursor-help"
                referrerPolicy="no-referrer"
              />
            ) : (
              <HiUserCircle className="text-5xl" />
            )}
          </div>
          <Link to="/profile" className="btn mr-2 btn-primary text-white">
            <HiUserCircle className="text-xl" />
            Profile
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <HiUserCircle className="text-5xl mr-2 hidden md:flex" />
          <Link to="/login" className="btn mr-2 btn-primary text-white">
            <FaSignInAlt />
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
