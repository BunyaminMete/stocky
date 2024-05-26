import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedFirstName = localStorage.getItem("firstName");
    const storedLastName = localStorage.getItem("lastName");

    if (storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
    if (storedFirstName) {
      setFirstName(storedFirstName);
    }
    if (storedLastName) {
      setLastName(storedLastName);
    }
  }, []);

  const login = (firstName, lastName) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setFirstName(firstName);
    setLastName(lastName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    setFirstName("");
    setLastName("");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, firstName, lastName, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
