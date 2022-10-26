import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // SignIn with google
  const googleSignIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
  // create new user with email and pass
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login with email and apss
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe();
  }, []);

  //   toggle theme
  const blackTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    logout,
    createNewUser,
    userLogin,
    blackTheme,
    lightTheme,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
