import { Circle } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-[10vh] m-0 md:m-8 lg:m-16 p-4 min-h-screen"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="min-w-30 text-blue-500 dark:text-blue-400 text-3xl font-extrabold tracking-wide">
          About Us
        </h2>
        <span className="flex items-center w-full text-blue-500 dark:text-blue-400">
          <Circle size={12} className="fill-blue-500" />
          <hr className="w-full border-blue-500/30 dark:border-blue-400/30" />
        </span>
      </div>

      {/* Vision */}
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-6 gap-5 mb-10 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Our Vision
            </h3>
            <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
              To become a trusted digital partner for businesses around the
              world — by delivering innovative, performance-driven, and
              human-centered solutions that empower brands to stand out in the
              digital era.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Mission */}
      <FadeInOnScroll delay={0.2}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-6 gap-5 mb-10 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Our Mission
            </h3>
            <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
              To bridge creativity and technology to solve real-world
              challenges. We aim to deliver top-notch digital products that
              combine design elegance with technical precision while building
              lasting client relationships through transparency, communication,
              and consistent results.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Philosophy */}
      <FadeInOnScroll delay={0.3}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-6 gap-5 mb-10 shadow-sm">
          <div>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              Our Work Philosophy
            </h3>
            <p className="text-justify text-gray-700 dark:text-gray-300 leading-relaxed">
              We follow three principles: <b>Innovation</b>, <b>Simplicity</b>,
              and <b>Impact</b>.
              <br /> Innovation → We constantly explore new tools, trends, and
              technologies to bring fresh perspectives.
              <br /> Simplicity → We design intuitive, user-first solutions.
              <br /> Impact → Every decision aims to create measurable results
              for our clients — treating each project as a collaboration, not
              just a contract.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Technologies */}
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
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-[-10px]">
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
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-[-10px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </FadeInOnScroll>

      {/* Animations */}
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
