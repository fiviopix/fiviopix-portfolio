import React from "react";
import { Circle, Globe, Target, Lightbulb } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function About() {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* --- Background Decor (Consistent with Projects/Contact) --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* --- HEADER SECTION --- */}
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-white">
              About Us.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl text-lg leading-relaxed">
              We are the architects of the digital future. Bridging the gap between 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> complex tech</span> and 
              <span className="text-cyan-600 dark:text-cyan-300 font-semibold"> human experience</span>.
            </p>
          </div>
          {/* Decorative Line */}
          <div className="grow hidden md:flex items-center gap-2 text-blue-500/50 mb-4">
             <div className="h-px w-full bg-linear-to-r from-blue-500/50 to-transparent"></div>
             <Circle size={10} className="fill-blue-500 animate-pulse" />
          </div>
        </div>
      </FadeInOnScroll>

      {/* --- BENTO GRID: VISION, MISSION, PHILOSOPHY (New Design) --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
        
        {/* Vision (Span 7) */}
        <div className="lg:col-span-7">
          <FadeInOnScroll delay={0.2}>
            <div className="h-full p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none backdrop-blur-md hover:border-blue-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Globe size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Vision</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                To become a trusted digital partner for businesses around the world — by delivering innovative, performance-driven, and human-centered solutions that empower brands to stand out in the digital era.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Mission (Span 5) */}
        <div className="lg:col-span-5">
          <FadeInOnScroll delay={0.3}>
            <div className="h-full p-8 rounded-3xl bg-linear-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-black border border-gray-200 dark:border-white/10 shadow-xl dark:shadow-none backdrop-blur-md hover:border-cyan-500/30 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 group-hover:rotate-12 transition-transform">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                To bridge creativity and technology to solve real-world challenges. We aim to deliver top-notch digital products that combine design elegance with technical precision.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Philosophy (Full Width) */}
        <div className="lg:col-span-12">
           <FadeInOnScroll delay={0.4}>
            <div className="relative p-8 rounded-3xl bg-white dark:bg-[#111] border border-gray-200 dark:border-white/5 shadow-xl dark:shadow-none overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />
              
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="text-yellow-500 dark:text-yellow-400" />
                <h3 className="text-xl font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Our Work Philosophy</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border-l-2 border-gray-200 dark:border-white/10 pl-6 hover:border-purple-500 transition-colors">
                    <h4 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Innovation</h4>
                    <p className="text-gray-600 dark:text-gray-400">We constantly explore new tools, trends, and technologies to bring fresh perspectives.</p>
                </div>
                <div className="border-l-2 border-gray-200 dark:border-white/10 pl-6 hover:border-blue-500 transition-colors">
                    <h4 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Simplicity</h4>
                    <p className="text-gray-600 dark:text-gray-400">We design intuitive, user-first solutions.</p>
                </div>
                <div className="border-l-2 border-gray-200 dark:border-white/10 pl-6 hover:border-green-500 transition-colors">
                    <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Impact</h4>
                    <p className="text-gray-600 dark:text-gray-400">Every decision aims to create measurable results for our clients.</p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
      
      {/* Technologies Header */}
      <h2 className="text-blue-500 dark:text-blue-400 text-2xl font-bold my-5">
        Technologies We Work With
      </h2>

      {/* Languages */}
      <h3 className="text-gray-700 dark:text-gray-300 text-lg font-semibold my-5">
        Programming Languages
      </h3>

      <FadeInOnScroll delay={0.3}>
        <div className="flex flex-wrap justify-start items-center">
          {[
            { src: "/images/js.png", title: "JavaScript" },
            { src: "/images/ts.png", title: "TypeScript" },
            { src: "/images/java.png", title: "Java" },
            { src: "/images/sql.png", title: "SQL" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center relative"
            >
              <div
                className="h-[90px] w-[90px] rounded-full m-5 flex justify-center items-center overflow-hidden
                bg-[linear-gradient(145.13deg,#edc6a5_40%,#383850_100%)]
                animate-[jump_2s_ease-in-out_infinite] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-[70%] w-[70%] object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 -mt-2.5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Frameworks */}
      <h3 className="text-gray-700 dark:text-gray-300 text-lg font-semibold my-5">
        Frameworks / Libraries
      </h3>

      <FadeInOnScroll delay={0.5}>
        <div className="flex flex-wrap justify-start items-center">
          {[
            { src: "/images/springboot.png", title: "Spring boot" },
            { src: "/images/mongo.png", title: "MongoDB" },
            { src: "/images/express.png", title: "Express" },
            { src: "/images/react.png", title: "React" },
            { src: "/images/node.png", title: "Node.js" },
            { src: "/images/tailwind.png", title: "Tailwind CSS" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center relative"
            >
              <div
                className="h-[90px] w-[90px] rounded-full m-5 flex justify-center items-center overflow-hidden
                bg-[linear-gradient(145.13deg,#edc6a5_40%,#383850_100%)]
                animate-[jump_2s_ease-in-out_infinite] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-[70%] w-[70%] object-contain mix-blend-multiply"
                />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 -mt-2.5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Animations (Preserved) */}
      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
        `}
      </style>
    </div>
  );
}