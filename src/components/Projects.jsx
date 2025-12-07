import React from "react";
import { Circle, Github, ExternalLink, Code2 } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

// 1. DATA: Add or remove projects here easily
const PROJECTS = [
  {
    title: "StockTracker Hub",
    description: "A comprehensive watchlist manager. It provides real-time stock tracking, customizable alerts, and detailed analytics for effective investment management.",
    tech: ["MERN Stack", "Socket.io"],
    image: "/images/Stoke.jpg", 
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Background Decor (Consistent with About/Contact) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* --- HEADER --- */}
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-white">
              Our Projects.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              A showcase of technical excellence. From full-stack applications to pixel-perfect interfaces.
            </p>
          </div>
          <div className="flex-grow hidden md:flex items-center gap-2 text-blue-500/50 mb-4">
            <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            <Circle size={10} className="fill-blue-500 animate-pulse" />
          </div>
        </div>
      </FadeInOnScroll>

      {/* --- PROJECTS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <FadeInOnScroll key={index} delay={0.2 + index * 0.1}>
            <ProjectCard project={project} />
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}

// --- SUB-COMPONENT: The Project Card ---
function ProjectCard({ project }) {
  return (
    <div className="group h-full flex flex-col bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-2xl dark:hover:shadow-blue-900/20 hover:-translate-y-2 transition-all duration-500">
      
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Floating Category Icon (Optional Decor) */}
        <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-lg">
          <Code2 size={20} className="text-white" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 md:p-8 relative">
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Buttons (Pushed to bottom) */}
        <div className="mt-auto flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-black font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <span>Live Demo</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}