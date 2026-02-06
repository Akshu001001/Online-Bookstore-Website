import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, X } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      console.log("Signup Data:", data);
      setLoading(false);
      document.getElementById("signup_modal").close();
    }, 1200);
  };

  return (
    <dialog id="signup_modal" className="modal">
      <div className="modal-box relative bg-base-100">

        {/* ❌ CLOSE */}
        <button
          onClick={() => document.getElementById("signup_modal").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-purple-500">
          Create Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* NAME */}
          <div>
            <label>Name</label>
            <input
              className="input input-bordered w-full"
              placeholder="Your name"
              {...register("name", { required: "Name required" })}
            />
            {errors.name && <p className="text-error text-xs">{errors.name.message}</p>}
          </div>

          {/* EMAIL */}
          <div>
            <label>Email</label>
            <input
              className="input input-bordered w-full"
              placeholder="Your email"
              {...register("email", { required: "Email required" })}
            />
            {errors.email && <p className="text-error text-xs">{errors.email.message}</p>}
          </div>

          {/* PASSWORD */}
          <div>
            <label>Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input input-bordered w-full pr-10"
                placeholder="Create password"
                {...register("password", { required: "Password required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full" disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        {/* 🔁 BACK TO LOGIN */}
        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <button
            className="text-primary font-medium hover:underline"
            onClick={() => {
              document.getElementById("signup_modal").close();
              document.getElementById("login_modal").showModal();
            }}
          >
            Login
          </button>
        </p>
      </div>
    </dialog>
  );
}

export default Signup;
