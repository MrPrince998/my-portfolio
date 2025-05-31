import React, { createContext, useContext, useState } from "react";

const authContext = createContext();
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    console.log("object")
  }
  return (
    <authContext.Provider value={{ isLoggedIn, setIsLoggedIn, login }}>
      {children}
    </authContext.Provider>
  );
};

const loggedIn = () => {
  const context = useContext(authContext);
  if (!context)
    throw new Error("useToggle must be used within a ToggleProvider");
  return context;
};

export { AuthProvider, loggedIn, authContext };
