import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUsingEmail, setUser, firebaseErrors } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    signInUsingEmail(email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        toast.success("Login Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errMsg = firebaseErrors.find(
          (err) => err.code === error.code
        ).message;
        toast.error(errMsg);
      });
  };
  return (
    <div className="hero min-h-[60vh]">
      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 shrink-0 shadow-2xl">
            <div className="card-body">
              <h1>Login</h1>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                />
                <div className="mt-2">
                  <NavLink to="/forget-password" className="link link-hover">
                    Forgot password?
                  </NavLink>
                </div>
                <div className="mt-2">
                  <NavLink to="/register" className="link link-hover">
                    Create an account
                  </NavLink>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
