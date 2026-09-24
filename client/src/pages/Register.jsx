import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router"
import { AuthContext } from "../context/AuthContext";

const Register = () => {

  const navigate = useNavigate()
  const { registerUser } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
  <form
    onSubmit={handleSubmit(async (data) => {
      const success = await registerUser(data);

      if(success) {
        navigate("/main")
      }
    })}
    className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md space-y-5 shadow-md"
  >
    <h2 className="text-gray-800 text-2xl font-semibold text-center">
      Register
    </h2>

    <div>
      <input
        type="text"
        placeholder="Name"
        {...register("name", { required: "Name is required" })}
        className="w-full p-3 rounded-lg bg-gray-50 text-gray-800 outline-none border border-gray-300 focus:ring-2 focus:ring-[#c1f026]"
      />
      {errors.name && (
        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
      )}
    </div>

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

    <button className="w-full bg-[#c1f026] text-black py-3 rounded-lg font-semibold hover:opacity-90 transition">
      Register
    </button>

    <div className="text-center text-sm text-gray-600">
      <p>
        Already have an account?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-blue-600 cursor-pointer font-medium"
        >
          Login
        </span>
      </p>
    </div>
  </form>
</div>
  );
};

export default Register;
