import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  password: string;
  repassword: string;
};

const Login = () => {
  const [loginflag, setLoginFlag] = useState(false); // Change to
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">{!loginflag ? "Login" : "Signup"}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name Field */}
        {loginflag && (
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
        )}

        {/* Email Field */}
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters" },
            })}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
         {/* Password Field */}
         {loginflag && (
        <div>
          <label className="block font-medium text-gray-700">Re-enter Password</label>
          <input
            type="password"
            {...register("repassword", {
              required: "Please re-enter your password",
            })}
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
          {errors.repassword && <p className="text-red-500 text-sm mt-1">{errors.repassword.message}</p>}
        </div>)}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition disabled:bg-blue-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <a href="#" onClick={()=>{setLoginFlag(!loginflag)}} className="text-blue-600 hover:underline mt-4 block text-center">
        {loginflag ? "Already have an account? Login" : "Don't have an account? Signup"}</a>
    </div>
  );
};

export default Login;
