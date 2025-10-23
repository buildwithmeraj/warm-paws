import React, { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";
import toast from "react-hot-toast";
import Error from "../components/Error";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Register = () => {
  const { registerUsingEmail, setUser, firebaseErrors } = use(AuthContext);
  const [error, setError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const handleForm = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    if (!emailRegex.test(email)) {
      return setError("Please enter a valid email address");
    }
    if (!passRegex.test(password)) {
      return setError(
        "Password Must have at least one uppercase letter, one lowercase letter and at least 6 characters long"
      );
    }
    registerUsingEmail(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Registration Successful, Redirecting to Homepage...");
        setInterval(() => {
          window.location.href = "/";
        }, 2000);
      })
      .catch((error) => {
        const errMsg = firebaseErrors.find(
          (err) => err.code === error.code
        ).message;
        setError(errMsg);
      });
  };
  return (
    <div className="hero min-h-[60vh]">
      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 lg:w-xl shadow-2xl">
            <div className="card-body">
              <h1>Register</h1>
              {error && <Error message={error} />}
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    name="password"
                  />
                  <span className="z-30" onClick={() => setShowPass(!showPass)}>
                    {showPass ? (
                      <IoEye className="absolute right-2 top-2 cursor-pointer text-2xl text-gray-600" />
                    ) : (
                      <IoEyeOff className="absolute right-2 top-2 cursor-pointer text-2xl text-gray-600" />
                    )}
                  </span>
                </div>
                <div className="mt-2">
                  <NavLink to="/login" className="link link-hover text-lg">
                    Already registered? Login here.
                  </NavLink>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Register
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
