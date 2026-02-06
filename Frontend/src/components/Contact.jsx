import React from "react";
import { useForm } from "react-hook-form";
import { Mail, User, MessageSquare } from "lucide-react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
  };

  return (
    <div
      className="
        min-h-screen flex items-center justify-center px-4
        bg-gradient-to-br from-pink-50 to-purple-100
        dark:from-slate-900 dark:to-slate-800
      "
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full max-w-3xl rounded-3xl p-8 md:p-10
          bg-white dark:bg-slate-900
          shadow-2xl
        "
      >
        {/* HEADER */}
        <h2
          className="
            text-4xl font-extrabold text-center mb-2
            bg-gradient-to-r from-pink-500 to-purple-600
            bg-clip-text text-transparent
          "
        >
          Get in Touch
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Have a question or feedback? We’d love to hear from you 💬
        </p>

        {/* NAME */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Your full name"
              className="
                w-full pl-10 py-3 rounded-lg
                bg-gray-100 dark:bg-slate-800
                text-gray-900 dark:text-gray-100
                placeholder-gray-500 dark:placeholder-gray-400
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-pink-500
              "
              {...register("name", { required: "Name is required" })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="your@email.com"
              className="
                w-full pl-10 py-3 rounded-lg
                bg-gray-100 dark:bg-slate-800
                text-gray-900 dark:text-gray-100
                placeholder-gray-500 dark:placeholder-gray-400
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-pink-500
              "
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* MESSAGE */}
        <div className="mb-7">
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="
                w-full pl-10 py-3 rounded-lg
                bg-gray-100 dark:bg-slate-800
                text-gray-900 dark:text-gray-100
                placeholder-gray-500 dark:placeholder-gray-400
                border border-transparent
                focus:outline-none focus:ring-2 focus:ring-pink-500
              "
              {...register("message", { required: "Message is required" })}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="
            w-full py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-pink-500 to-purple-600
            hover:scale-[1.02] transition-transform duration-200
            shadow-lg
          "
        >
          Send Message 🚀
        </button>
      </form>
    </div>
  );
}

export default Contact;
