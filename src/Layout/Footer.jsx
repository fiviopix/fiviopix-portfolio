import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Sparkles } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="relative w-full bg-gray-100 dark:bg-[#050505] pt-20 pb-10 overflow-hidden">
      
      {/* --- Background Glow Effects --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />
      
     { /* --- Top Border Gradient --- */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Brand & Description (Span 5) */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <a 
               href="/" 
               onClick={scrollToTop}
               className="flex items-center gap-2 group cursor-pointer"
            >
               <a
                href="/"
                className="text-3xl ml-5 font-bold text-blue-600 dark:text-blue-400 hover:-translate-y-1 hover:scale-105 transition-transform"
               >
               <span className="text-blue-500">F</span>
               <span className="text-red-500">i</span>
               <span className="text-green-500">v</span>
               <span className="text-yellow-500">i</span>
               <span className="text-violet-500">o</span>
               </a>
            </a>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base max-w-sm">
              Crafting digital experiences that merge creativity with code. 
              Let's build something extraordinary together.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
               <SocialIcon href="https://github.com/fiviopix" icon={<Github size={20} />} />
               <SocialIcon href="https://linkedin.com" icon={<Linkedin size={20} />} />
               <SocialIcon href="mailto:fiviopix@gmail.com" icon={<Mail size={20} />} />
               <SocialIcon href="#" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Col 2: Quick Links (Span 3) */}
          <div className="md:col-span-3">
            <h3 className="text-gray-900 dark:text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors text-sm"
                  >
                    {item}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Legal/Info (Span 4) */}
          <div className="md:col-span-4">
             <h3 className="text-gray-900 dark:text-white font-bold mb-6">Get in Touch</h3>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
               Gujarat, India
             </p>
             <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
               fiviopix@gmail.com
             </p>
             
             {/* Back to Top Button */}
             <button 
               onClick={scrollToTop}
               className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-sm font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:border-blue-200 dark:hover:border-blue-500/30 transition-all duration-300 group"
             >
               Back to Top
               <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-gray-500 dark:text-gray-500 text-sm">
             © {year} Fiviopix. All rights reserved.
           </p>
           
           <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-500">
             <span>Made with</span>
             <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
             <span>by Fivio Team</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component for Social Icons
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-blue-600 hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;
