import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Sparkles } from "lucide-react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" }
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- Dark Mode Logic ---
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default to dark
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // --- Scroll Effect Logic ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-10">
        <nav
          className={`
            relative flex items-center justify-between px-6 py-3 rounded-full 
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/70 dark:bg-[#111]/70 backdrop-blur-md shadow-lg border border-gray-200 dark:border-white/10"
                : "bg-transparent border border-transparent"
            }
          `}
        >
          {/* --- LOGO --- */}
          <a
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => {
               e.preventDefault();
               window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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

          {/* --- DESKTOP NAVIGATION --- */}
          <div className="hidden md:flex items-center bg-gray-100/50 dark:bg-white/5 rounded-full px-2 p-1 border border-gray-200 dark:border-white/10 backdrop-blur-sm">
            <ul className="flex items-center gap-1">
              {navItems.map(({ name, to }) => (
                <li key={name}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={800}
                    offset={-100}
                    spy={true}
                    activeClass="!text-white bg-blue-600 shadow-lg shadow-blue-500/25"
                    className="cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- RIGHT ACTIONS --- */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-white hover:text-yellow-500 dark:hover:bg-white/10 dark:hover:text-yellow-400 transition-all duration-300 shadow-sm"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* --- MOBILE MENU --- */}
        <div
           className={`
             absolute top-full left-4 right-4 mt-2 p-4 rounded-2xl 
             bg-white/90 dark:bg-[#111]/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 shadow-2xl
             transition-all duration-300 origin-top transform
             ${menuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"}
           `}
        >
           <ul className="flex flex-col gap-2">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  smooth={true}
                  duration={800}
                  offset={-100}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center p-3 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors cursor-pointer"
                >
                  {name}
                </Link>
              </li>
            ))}
           </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;