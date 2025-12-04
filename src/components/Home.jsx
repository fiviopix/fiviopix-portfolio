import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative z-10 p-8 md:p-12 bg-white/20 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col items-center text-center gap-8 text-gray-800 dark:text-white transition-all">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          We’re a team of passionate developers, designers, and creators —
          building modern digital experiences.
        </h1>

        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
          From concept to code, we turn ideas into engaging, scalable, and
          impactful digital products that help businesses grow and stand out.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="https://mail.google.com/mail/?view=cm&to=fiviopix@gmail.com&su=Contact&body=Hello%20..."
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/images/gmail.png"
              alt="Gmail"
              className="w-9 h-9 md:w-10 md:h-10 hover:drop-shadow-md"
            />
          </a>

          <a
            href="https://github.com/fiviopix"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-9 h-9 md:w-10 md:h-10 hover:drop-shadow-md"
            />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-9 h-9 md:w-10 md:h-10 hover:drop-shadow-md"
            />
          </a>
        </div>

        {/* CTA Button */}
        <Link
          to="projects"
          smooth={true}
          duration={1}
          offset={-70}
          spy={true}
          activeClass="text-blue-600 dark:text-blue-400"
          className="mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg transition-transform hover:scale-95 hover:brightness-110"
        >
          View Our Work
        </Link>
      </div>
    </div>
  );
};

export default Home;
