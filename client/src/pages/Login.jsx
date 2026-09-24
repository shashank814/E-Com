import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <form
    onSubmit={handleSubmit(async (data) => {
      const success = await loginUser(data);

      if(success) {
        navigate("/main")
      }
    })}
    className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md space-y-5 shadow-md"
  >
    <h2 className="text-gray-800 text-2xl font-semibold text-center">
      Login
    </h2>

    <div>
      <input
        type="email"
        placeholder="Email"
        {...register("email", { required: "Email is required" })}
        className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#c1f026]"
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>

    <div>
      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#c1f026]"
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
      )}
    </div>

    <div>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword", { required: "confirm password is required" })}
        className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#c1f026]"
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
      )}
    </div>

    <button className="w-full bg-[#c1f026] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition">
      Login
    </button>

    <div className="text-center text-sm text-gray-600">
      <p>
        Didn't have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-600 cursor-pointer font-medium"
        >
          Register
        </span>
      </p>
    </div>
  </form>
</div>
  );
};

export default Login;
