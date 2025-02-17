import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import Button from "./Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [formError, setFormError] = useState("");
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      setFormError("Invalid email");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }
    const { error } = await register(formData);

    if (error) {
      setFormError(error);
    }
  };

  return (
    <div className="border w-[600px] h-auto p-5 rounded-lg shadow-lg">
      <p className="text-center text-3xl font-bold">Register</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-10">
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-1 w-1/2">
            <label htmlFor="firstName" className="p-1 font-bold">
              First Name
            </label>
            <input
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="border p-2 rounded-lg"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="flex flex-col gap-1 w-1/2 ">
            <label htmlFor="lastName" className="p-1 font-bold">
              Last Name
            </label>
            <input
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={formData.lastName}
              className="border p-2 rounded-lg"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1  ">
          <label htmlFor="email" className="p-1 font-bold">
            Email
          </label>
          <input
            name="email"
            id="email"
            onChange={handleChange}
            value={formData.email}
            className="border p-2 rounded-lg"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col gap-1  ">
          <label htmlFor="password" className="p-1 font-bold">
            Password
          </label>
          <input
            name="password"
            id="password"
            onChange={handleChange}
            value={formData.password}
            className="border p-2 rounded-lg"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col gap-1  ">
          <label htmlFor="confirmPassword" className="p-1 font-bold">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            id="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            className="border p-2 rounded-lg"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </div>
        <Button width="100%" type="submit">
          Register
        </Button>
        <p className="text-red-500">{formError}</p>
      </form>
    </div>
  );
};

export default RegisterForm;
