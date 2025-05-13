// Portfolio.jsx
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, Im John Doe</h1>
        <p className="text-xl mb-6">Frontend Developer & UI Designer</p>
        <div className="space-x-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Im a passionate frontend developer who loves crafting clean and
          user-friendly experiences. Skilled in React, Tailwind, and JavaScript
          with a focus on responsive design and accessibility.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2">Project Title {id}</h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and technologies used.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Github />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <Linkedin />
          </a>
          <a
            href="mailto:you@example.com"
            className="text-gray-600 hover:text-blue-600"
          >
            <Mail />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © 2025 John Doe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
