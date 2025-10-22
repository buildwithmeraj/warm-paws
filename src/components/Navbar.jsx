import React, { use } from "react";
import logo from "../../public/logo.png";
import { NavLink, Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { HiUserCircle } from "react-icons/hi2";

const Navbar = () => {
  const { user, setUser, logOut } = use(AuthContext);
  const handleLogout = () => {
    toast.success("Logged out successfully");
    setInterval(
      2000,
      logOut()
        .then(() => {
          setUser(null);
        })
        .catch((error) => {
          toast.error("Logout error:", error);
        })
    );
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
        <Link className="btn btn-ghost text-2xl" to="/">
          <img src={logo} alt="logo" className="h-6 mr-0.5" />
          <div>
            <span className="text-amber-600">Warm</span>Paws
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <div
            className="mr-2 text-5xl tooltip tooltip-bottom cursor-help"
            data-tip={user?.displayName || "User"}
          >
            <HiUserCircle />
          </div>

          <Link to="/profile" className="btn mr-2 btn-info text-white">
            Profile
          </Link>
          <button onClick={handleLogout} className="btn btn-error text-white">
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to="/login" className="btn mr-2 btn-info text-white">
            Login
          </Link>
          <Link to="/register" className="btn btn-success text-white">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
