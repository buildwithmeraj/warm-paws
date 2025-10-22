import React, { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const signInUsingEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const registerUsingEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authData = {
    user,
    setUser,
    signInUsingEmail,
    registerUsingEmail,
  };
  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
