import React, { useState } from "react";
import Button from "./Button";
import { useAuth } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Invalid email");
      return;
    }

    const { error } = await login(formData);
    if (error) {
      toast.error(error);
    } else {
      toast.success("Logged in successfully");
      navigate("/");
    }
  };

  return (
    <div className="border w-[400px] h-[400px] rounded-lg p-5 flex flex-col justify-center items-center gap-5 shadow-lg">
      <Toaster />
      <p className="text-center text-3xl font-bold">Login in</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className=" font-bold p-1">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            className="border w-full rounded-lg p-2"
            placeholder="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className=" font-bold p-1">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            className="border w-full rounded-lg p-2"
            placeholder="password"
          />
        </div>
        <div>
          Dont have an account? {""}
          <Link className="text-blue-500 underline" to="/register">
            Register
          </Link>
        </div>
        <Button type="submit" width={300}>
          Login
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
