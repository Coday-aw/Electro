import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = async () => {
      if (token) return;
      const userToken = localStorage.getItem("token");

      if (userToken) {
        setToken(userToken);
      }
    };
    getToken();
  }, [token]);

  const register = async (formData) => {
    try {
      const res = await fetch("http://localhost:8080/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(res, data);
      if (res.status !== 201) {
        return { error: data.message };
      }
      setToken(data.token);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.log(error);
      return { error: "An error occurred during registration." };
    }
  };

  const login = async (formData) => {
    try {
      const res = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(res, data);

      if (!res.ok) {
        return { error: data.message || "An error occurred during login." };
      }

      setToken(data.token);
      localStorage.setItem("token", data.token);
      return { success: true };
    } catch (error) {
      console.log(error);
      return { error: "An error occurred during login." };
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const value = { token, setToken, register, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
