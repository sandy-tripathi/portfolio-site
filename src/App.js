import React from "react";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-[#0f0f0f] text-gray-200 min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400">Sandeep Tripathi</h1>
        <p className="mt-2 text-xl text-gray-400">Web Developer | Data Structures & Algorithms</p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400">
          I'm a passionate web developer with a strong foundation in data structures and algorithms. I enjoy building clean, functional websites and solving challenging problems through efficient code.
        </p>
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/sandy-tripathi" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sandeep-tripathi-a83865267/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/IMPORT_SLAYER/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <h2 className="text-3xl font-semibold text-center text-teal-300">Skills</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-gray-300">
          {['C++', 'JavaScript', 'Python', 'HTML', 'CSS', 'React.js', 'Node.js', 'Tailwind CSS', 'Git', 'GitHub', 'OOPs', 'DBMS', 'DSA'].map(skill => (
            <span key={skill} className="bg-[#2a2a2a] px-4 py-2 rounded-full">{skill}</span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-teal-300">Projects</h2>
        <div className="mt-10 space-y-10 max-w-4xl mx-auto">
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-teal-400">E-commerce Website (Amazon Clone)</h3>
            <p className="text-gray-400 mt-2">A full-featured e-commerce platform inspired by Amazon, with product listings, cart system, and checkout functionality.</p>
            <p className="text-sm text-gray-500 mt-1">Tech Used: HTML, CSS, JavaScript, React.js</p>
          </div>
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-teal-400">AI Course Generator</h3>
            <p className="text-gray-400 mt-2">Generates complete courses with curriculum, notes, and video content based on a project idea using Gemini & YouTube API.</p>
            <p className="text-sm text-gray-500 mt-1">Tech Used: React.js, Node.js, Gemini API, YouTube API, Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-[#1a1a1a]">
        <h2 className="text-3xl font-semibold text-center text-teal-300">Education</h2>
        <div className="mt-6 text-center">
          <h3 className="text-xl text-teal-400 font-semibold">B.Tech in Computer Science Engineering</h3>
          <p className="text-gray-400">Graphic Era Hill University, Bhimtal (2022 – 2026)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-teal-300">Contact</h2>
        <p className="text-center text-gray-400 mt-4">sandeeptripathi3339@gmail.com</p>
        <div className="flex justify-center mt-4 text-2xl">
          <a href="mailto:sandeeptripathi3339@gmail.com" className="text-teal-400 hover:text-teal-300"><FaEnvelope /></a>
        </div>
        <p className="text-center text-gray-500 mt-8">Actively seeking internship opportunities in web development and software engineering.</p>
      </section>

      <footer className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} Sandeep Tripathi. All rights reserved.
      </footer>
    </div>
  );
}