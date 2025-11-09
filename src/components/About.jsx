import { Circle } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function About() {
  return (
    <div
      id="about"
      className="scroll-mt-[10vh] m-0 md:m-8 lg:m-16 p-4 min-h-screen"
    >
      <div className="flex items-center gap-3 mb-5">
        <h2 className="min-w-30 text-blue-500 dark:text-blue-400 text-2xl font-bold ">
          About Us
        </h2>
        <span className="flex items-center w-full text-blue-500 dark:text-blue-400">
          <Circle size={12} className=" fill-blue-500 fill:text-blue-400" />
          <hr className="w-full " />
        </span>
      </div>

      <FadeInOnScroll>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-5 gap-5 mb-10">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Who We Are
            </h2>
            <p className="text-justify">
              → We are a forward-thinking digital solutions company dedicated to
              building impactful, high-quality, and future-ready products for
              businesses worldwide. At our core, we believe that great ideas
              deserve great execution — and that’s exactly what we deliver
              through design excellence, cutting-edge technology, and strategic
              thinking. <br />
              → Our company brings together a diverse team of skilled
              professionals — developers, designers, and innovators — who share
              a common goal: to craft digital experiences that make a
              difference. With a blend of creativity, technical expertise, and
              business insight, we help brands grow, connect, and thrive in
              today’s competitive digital landscape. <br />
              → We started with a simple vision — to make technology more
              accessible, beautiful, and meaningful. What began as a small
              freelancing group has now evolved into a full-fledged digital
              agency, delivering customized solutions that drive real results.
              <br />
              → From startups to established enterprises, we partner with
              organizations of all sizes to turn their challenges into
              opportunities through tailored web, mobile, and AI-driven
              solutions. Every project we take on reflects our passion for
              innovation, attention to detail, and commitment to delivering
              measurable value. <br />→ At FivioPix, we don’t just create
              products — we create partnerships built on trust, transparency,
              and shared success. Our approach combines creative strategy,
              modern technology, and seamless collaboration to ensure that every
              solution we deliver aligns perfectly with our clients’ goals and
              vision.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-5 gap-5 mb-10">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Our Vision
            </h2>
            <p className="text-justify">
              To become a trusted digital partner for businesses around the
              world — by delivering innovative, performance-driven, and
              human-centered solutions that empower brands to stand out in the
              digital era.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.2}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-5 gap-5 mb-10">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Our Mission
            </h2>
            <p className="text-justify">
              To bridge creativity and technology to solve real-world
              challenges. To deliver top-notch digital products that combine
              design elegance with technical precision. To build lasting
              relationships with clients through transparency, communication,
              and consistent results.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll delay={0.3}>
        <div className="flex flex-col md:flex-row items-center bg-gray-500/10 rounded-xl p-5 gap-5 mb-10">
          <div>
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Our Work Philosophy
            </h2>
            <p className="text-justify">
              At our core, we believe in three principles: Innovation.
              Simplicity. Impact.
              <br /> Innovation → We constantly explore new tools, trends, and
              technologies to bring fresh perspectives to every project. <br />{" "}
              Simplicity → We design solutions that are clean, intuitive, and
              user-first.
              <br />
              Impact → Every line of code, every pixel, and every decision is
              made with the end goal of creating measurable results for our
              clients. We treat every project as a collaboration, not just a
              contract. That’s why our clients see us not as freelancers — but
              as part of their team.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
      <h2 className="text-blue-500 dark:text-blue-400 text-xl font-bold my-5">
        Technologies We work with
      </h2>
      <div>
        <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold my-5">
          Programming languages
        </h3>
        <FadeInOnScroll delay={0.3}>
          {" "}
          <div className="flex flex-wrap gap-8">
            <div className="bg-gray-500/15 rounded-full p-3">
              <img src="/images/js.png" className="w-16 h-16" />
            </div>
            <div className="bg-gray-500/15 rounded-full p-3">
              <img src="/images/java.png" className="w-16 h-16" />
            </div>
            <div className="bg-gray-500/15 rounded-full p-3">
              <img src="/images/sql.png" className="w-16 h-16" />
            </div>
          </div>
        </FadeInOnScroll>

        <h3 className="text-gray-600 dark:text-gray-300 text-lg font-semibold my-5">
          Frameworks / Libraries
        </h3>
        <FadeInOnScroll delay={0.5}>
          <div className="flex flex-wrap gap-10">
            <img
              src="/images/mongo.png"
              className="w-20 h-20 rounded-full border-2 p-0.5 border-blue-400/20"
            />
            <img
              src="/images/express.png"
              className="bg-gray-50 w-20 h-20 rounded-full border-2 p-0.5 border-blue-400/20"
            />
            <img
              src="/images/react.png"
              className="w-20 h-20 rounded-full border-2 p-0.5 border-blue-400/20"
            />
            <img
              src="/images/node.png"
              className="w-20 h-20 rounded-full border-2 p-0.5 border-blue-400/20"
            />
            <img
              src="/images/tailwind.png"
              className="w-20 h-20 rounded-full border-2 p-0.5 border-blue-400/20"
            />
          </div>
        </FadeInOnScroll>
      </div>
    </div>
  );
}
