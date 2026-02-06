import React from "react";
import banner from "../../public/banner2.jpg";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row dark:bg-slate-900 dark:text-white">

        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hello, Welcome here to learn something{" "}
              <span className="text-blue-400">new everyday!!!</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Every book has a story waiting just for you.
              Whether you're chasing adventure, love, or a little inspiration,
              you'll find it here—one page at a time.
              Come in, get cozy, and explore the magic of reading.
            </p>

            {/* EMAIL INPUT */}
            <label className="input input-bordered flex items-center gap-2 max-w-sm dark:bg-slate-900 dark:text-white dark:border-blue-300">
              <svg
                className="h-[1em] opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Enter your email"
                className="grow dark:bg-slate-900 dark:text-white"
                required
              />
            </label>

            <button className="btn btn-primary mt-4">
              Primary
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center md:mt-24">
          <img
            src={banner}
            alt="Books Banner"
            className="w-[90%] md:w-[500px] lg:w-[550px] object-contain"
          />
        </div>

      </div>
    </>
  );
}

export default Banner;
