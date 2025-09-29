import React from "react";
import { Link } from "react-router-dom";
import { FaReact, FaJsSquare, FaPython, FaPhp, FaJava } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiAndroid } from "react-icons/si";

function Developer() {
  const techStack = [
    { name: "React.js", icon: <FaReact className="text-blue-500 w-10 h-10 mx-auto mb-2" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-10 h-10 mx-auto mb-2" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 w-10 h-10 mx-auto mb-2" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 w-10 h-10 mx-auto mb-2" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 w-10 h-10 mx-auto mb-2" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-500 w-10 h-10 mx-auto mb-2" /> },
    { name: "Android Studio", icon: <SiAndroid className="text-green-500 w-10 h-10 mx-auto mb-2" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-10 h-10 mx-auto mb-2" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-black">Abhaya</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          I'm a Web & App Developer, passionate about building modern, user-friendly, and high-performance applications using cutting-edge technologies.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills & Tech Stack</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
          {techStack.map((tech) => (
            <div key={tech.name} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              {tech.icon}
              <h3 className="text-xl font-semibold mt-2">{tech.name}</h3>
            </div>
          ))}
        </div>
      </section>


      {/* Experience Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-xl font-semibold">Backend Manager at Saga Service</h3>
            <p className="text-gray-600">Managed backend systems, APIs, and team coordination to ensure smooth project delivery.</p>
            <span className="text-gray-400 text-sm">2024 - 2025</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Web & App Developer at Badimalika Secondary School</h3>
            <p className="text-gray-600">Built school website, app integration, and maintained digital solutions for students and staff.</p>
            <span className="text-gray-400 text-sm">2024 - Present</span>
          </div>
        </div>
      </section>

      {/* Contact / Call-to-Action */}
      <section id="contact" className="py-20 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          I'm always open to new projects, collaborations, and freelance opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:abhayabikramshahiofficial@gmail.com"
          className="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition duration-300"
        >
          Contact Me
        </a>
      </section>

    </div>
  );
}

export default Developer;
