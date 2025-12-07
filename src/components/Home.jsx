import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ArrowRight, Github, Mail, Linkedin, Zap, Code2, Layout } from "lucide-react";

export default function Home() {
  // --- Typewriter Logic ---
  const [textIndex, setTextIndex] = useState(0);
  const words = ["Digital Experiences", "Web Applications", "Scalable Brands", "Modern UI/UX"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-500"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Glowing Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse mix-blend-multiply dark:mix-blend-normal pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse mix-blend-multiply dark:mix-blend-normal pointer-events-none" />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: TEXT */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new projects
          </div> */}

          {/* Headline with Typewriter */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            We build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-purple-400 block h-[1.2em] overflow-hidden">
               {/* Simple CSS Fade keyframe applied below */}
               <span key={textIndex} className="animate-fade-in block">
                 {words[textIndex]}
               </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
            From concept to code, we turn your ambitious ideas into impactful digital products. 
            We are a team of passionate developers & designers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-70}
              className="group cursor-pointer flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-lg shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300"
            >
              View Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
               to="contact"
               smooth={true}
               duration={800}
               offset={-70}
               className="cursor-pointer flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 pt-4">
             <SocialLink href="https://github.com/fiviopix" icon={<Github size={24} />} />
             <SocialLink href="mailto:fiviopix@gmail.com" icon={<Mail size={24} />} />
             <SocialLink href="https://linkedin.com" icon={<Linkedin size={24} />} />
          </div>
        </div>

        {/* RIGHT COLUMN: HERO IMAGE & FLOATING CARDS */}
        <div className="relative hidden lg:block h-[600px] w-full">
          
          {/* Main Image Container */}
          <div className="absolute inset-0 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
            <div className="relative w-[450px] h-[450px] bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[40px] rotate-3 opacity-20 blur-2xl absolute top-4 left-4"></div>
            
            <div className="relative w-[450px] h-[450px] rounded-[40px] overflow-hidden border border-white/20 shadow-2xl bg-gray-900">
               {/* REPLACE THIS SRC WITH YOUR ACTUAL HERO IMAGE */}
               <img 
                 src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Fiviopix Workspace" 
                 className="w-full h-full object-cover opacity-80"
               />
               
               {/* Overlay Code Decor */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-6 left-6 font-mono text-sm text-blue-300">
                    <p>&gt; git commit -m "Initial Launch"</p>
                    <p>&gt; git push origin main</p>
                    <p className="text-green-400">&gt; Deployment Successful </p>
                  </div>
               </div>
            </div>
          </div>

          {/* 1. Stack (Top Left) */}
          <div className="absolute top-20 left-0 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl animate-[float_5s_ease-in-out_infinite]">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Code2 size={24}/></div>
               <div>
                 <p className="text-xs text-gray-400 uppercase font-bold">Stack</p>
                 <p className="text-sm font-bold text-white">MERN & Next.js</p>
               </div>
             </div>
          </div>

          {/* 2. Performance (Middle Left) */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl animate-[float_6s_ease-in-out_infinite_1.5s]">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Zap size={24}/></div>
               <div>
                 <p className="text-xs text-gray-400 uppercase font-bold">Performance</p>
                 <p className="text-sm font-bold text-white">Fast & Scalable</p>
               </div>
             </div>
          </div>

           {/* 3. Design (Bottom Left) */}
           <div className="absolute bottom-20 left-0 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl animate-[float_7s_ease-in-out_infinite_3s]">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Layout size={24}/></div>
               <div>
                 <p className="text-xs text-gray-400 uppercase font-bold">Design</p>
                 <p className="text-sm font-bold text-white">Modern UI/UX</p>
               </div>
             </div>
          </div>

        </div>
      </div>

      {/* Styles for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// Sub-component for Social Links
const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-white hover:text-blue-600 dark:hover:bg-blue-600 dark:hover:text-white hover:shadow-lg transition-all duration-300"
  >
    {icon}
  </a>
);