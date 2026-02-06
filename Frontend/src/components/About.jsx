import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Target, Users, Code } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <div className="px-6 md:px-12 py-12 max-w-7xl mx-auto">

      {/* HERO */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1
          className="
            text-5xl font-extrabold mb-4
            bg-gradient-to-r from-pink-500 to-purple-600
            bg-clip-text text-transparent
          "
        >
          About BookStore
        </h1>

        <p className="text-lg text-gray-500 dark:text-gray-300 max-w-3xl mx-auto">
          BookStore is a modern learning platform that helps students
          explore quality books and skill-based courses using modern web technology.
        </p>
      </motion.div>

      {/* MISSION & VISION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {[
          {
            icon: <Target size={32} className="text-pink-500" />,
            title: "Our Mission",
            text: "To empower learners with high-quality educational resources that bridge theory and real-world skills.",
          },
          {
            icon: <BookOpen size={32} className="text-purple-500" />,
            title: "Our Vision",
            text: "To create a future where learning is accessible, engaging, and technology-driven.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              bg-white dark:bg-slate-800
              p-8 rounded-3xl shadow-lg
            "
          >
            {item.icon}

            <h2 className="text-2xl font-bold mt-4 mb-2 text-blue-400 dark:text-gray-100">
              {item.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* WHY CHOOSE US */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10 text-blue-400 dark:text-pink-400"
      >
        Why Choose BookStore...?
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <Users size={30} className="text-pink-500 mx-auto" />,
            title: "Student Focused",
            text: "Simple, clean UI designed specifically for students.",
          },
          {
            icon: <BookOpen size={30} className="text-purple-500 mx-auto" />,
            title: "Quality Content",
            text: "Carefully curated books and courses for real-world use.",
          },
          {
            icon: <Code size={30} className="text-indigo-500 mx-auto" />,
            title: "Modern Tech",
            text: "Built with MERN stack, Tailwind CSS, and modern tools.",
          },
        ].map((card, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="
              bg-white dark:bg-slate-800
              p-6 rounded-2xl shadow-md text-center
            "
          >
            {card.icon}

            <h3 className="text-xl font-semibold mt-4 mb-2 text-blue-400 dark:text-gray-100">
              {card.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* TECH STACK */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-400 dark:text-gray-100">
          Our Tech Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["MongoDB", "Express", "React", "Node.js", "Tailwind", "DaisyUI"].map(
            (tech) => (
              <span
                key={tech}
                className="
                  px-5 py-2 rounded-full
                  bg-gradient-to-r from-pink-500 to-purple-600
                  text-white text-sm font-medium shadow-md
                "
              >
                {tech}
              </span>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default About;
