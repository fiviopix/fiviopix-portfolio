import { Link2, Github, Circle } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";


export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-[10vh] m-0 md:m-8 lg:m-16 p-4 min-h-screen"
    >
      <div className="flex items-center gap-3 mb-5">
        <h2 className="min-w-36 text-blue-500 dark:text-blue-400 text-2xl font-bold ">
          Our Projects
        </h2>
        <span className="flex items-center w-full text-blue-500 dark:text-blue-400">
          <Circle size={12} className=" fill-blue-500 fill:text-blue-400" />
          <hr className="w-full " />
        </span>
      </div>
      <div className="flex flex-col items-center gap-5">
        <FadeInOnScroll delay={0.1}>
          <div className="w-full flex gap-5 flex-col md:flex-row-reverse bg-gray-500/5 p-5 rounded-xl border border-black/5 dark:border-white/5">
            <div className="w-full max-w-90 h-90 md:h-50 bg-gray-800 relative rounded-lg overflow-hidden">
              <img src="/images/Stoke.jpg" className="w-full h-full object cover" />
            </div>
            <div className="w-full md:w-6/9">
              <h3 className="text-lg font-semibold text-purple-500 dark:text-yellow-200">
                StockTracker Hub
              </h3>
              <p className="my-3 text-justify tracking-[0.5px]">
                Technologies used: MERN stack
              </p>
              <p className="text-justify">
                Stocks Watchlist Manager is a project which helps people to analyze, create, and update watchlists as they want. It provides real-time stock tracking, customizable alerts, and detailed analytics, offering users comprehensive tools for effective investment management.
              </p>
              <div className="flex items-center mt-5 gap-1">
                <a href="#" target="_blank">
                  <Link2
                    size={30}
                    className="bg-purple-200/80 dark:bg-yellow-200/15 rounded-lg p-1.5"
                  />
                </a>
                <a href="#" target="_blank">
                  <Github
                    size={30}
                    className="bg-purple-200/80 dark:bg-yellow-200/15 rounded-lg p-1.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* <FadeInOnScroll delay={0.25}>
          <div className="w-full flex flex-col md:flex-row bg-gray-500/5 p-5 rounded-xl border border-black/5 dark:border-white/5">
            <img src="/images/girl2.png" className="w-50" />
            <div>
              <h3 className="text-lg font-semibold text-purple-500 dark:text-yellow-100">
                Caffeine Corner
              </h3>
              <p className="my-3">
                Designed and developed an online coffee shop, focusing on
                improving UI/UX, and deployed on Render. Implemented responsive
                design, ensuring seamless user experience across devices.
              </p>
              <div className="flex items-center gap-1">
                <a href="https://caffeine-shop.onrender.com/" target="_blank">
                  <Link2
                    size={30}
                    className="bg-blue-400/15 rounded-lg p-1.5"
                  />
                </a>
                <a
                  href="https://github.com/vashvirank/caffeine"
                  target="_blank"
                >
                  <Github
                    size={30}
                    className="bg-blue-400/15 rounded-lg p-1.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.4}>
          <div className="w-full flex gap-5 flex-col md:flex-row-reverse bg-gray-500/5 p-5 rounded-xl border border-black/5 dark:border-white/5">
            <div className="w-full max-w-90 h-50 md:h-auto bg-gray-800 relative rounded-lg overflow-hidden">
              <img src="/images/trendz1.png" className="w-4/5 h-4/5" />
              <img
                src="/images/trendz2.png"
                className="absolute h-9/10 -bottom-5 right-0"
              />
            </div>
            <div className="w-full md:w-6/9">
              <h3 className="text-lg font-semibold text-purple-500 dark:text-yellow-200">
                Trendz
              </h3>
              <p className="my-3 text-justify tracking-[0.5px]">
                Developed and deployed a full-featured e-commerce platform with
                role-based access control (customer, seller, admin) secured
                using JWT authentication. Integrated real-time product
                recommendations, a customer support chatbot, and interactive
                dashboards showing order and sales analytics for both sellers
                and customers. Features responsive design, smooth user
                experience, dark/light theme toggle, and Cloudinary integration
                for efficient product image storage and delivery.
              </p>
              <p>
                Technologies Used: MERN Stack, Python, Tailwind CSS, JWT
                Authentication, Cloudinary, Render
              </p>
              <div className="flex items-center mt-5 gap-1">
                <a href="https://trendz-fashion.onrender.com/" target="_blank">
                  <Link2
                    size={30}
                    className="bg-purple-200/80 dark:bg-yellow-200/15 rounded-lg p-1.5"
                  />
                </a>
                <a href="https://github.com/vashvirank/trendz" target="_blank">
                  <Github
                    size={30}
                    className="bg-purple-200/80 dark:bg-yellow-200/15 rounded-lg p-1.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeInOnScroll> */}
      </div>
    </section>
  );
}
