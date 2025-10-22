import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router";

const Register = () => {
  const { registerUsingEmail } = use(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    registerUsingEmail(email, password)
      .then((userCredential) => {
        //setUser(userCredential.user);
        console.log("user", userCredential.user);
      })
      .catch((error) => {
        //const errorCode = error.code;
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-[60vh]">
      <form onSubmit={handleForm}>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 shrink-0 shadow-2xl">
            <div className="card-body">
              <h1>Register</h1>
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
                  <NavLink to="/login" className="link link-hover">
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
