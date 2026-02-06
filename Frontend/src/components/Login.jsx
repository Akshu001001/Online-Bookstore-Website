import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    document.getElementById("login_modal").close();
  };

  return (
    <dialog id="login_modal" className="modal">
      <div className="modal-box bg-base-100 shadow-2xl rounded-xl">

        {/* ❌ CLOSE */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          onClick={() => document.getElementById("login_modal").close()}
        >
          ✕
        </button>

        {/* TITLE */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-purple-500">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="label">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" size={18} />
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full pl-10"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="text-error text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <label className="label">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input input-bordered w-full pl-10 pr-10"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-error text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* REMEMBER */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex gap-2 items-center">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>
            <span className="text-primary cursor-pointer">
              Forgot password?
            </span>
          </div>

          <button className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* 🔁 SWITCH TO SIGNUP (MODAL) */}
        <p className="text-center text-sm mt-5">
          Not registered?{" "}
          <button
            className="text-primary font-medium hover:underline"
            onClick={() => {
              document.getElementById("login_modal").close();
              document.getElementById("signup_modal").showModal();
            }}
          >
            Signup
          </button>
        </p>
      </div>
    </dialog>
  );
}

export default Login;
