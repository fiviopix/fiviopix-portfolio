import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

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

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <header className="h-[10vh] shadow-md shadow-gray-500/5 dark:shadow-gray-950/10 dark:bg-gray-900/60 bg-white/60 backdrop-blur-[5px] sticky top-0 z-50">
      <nav className="mx-auto h-full px-5 flex items-center justify-between">
        <a
          href="/"
          className="text-3xl ml-5 font-bold text-blue-600 dark:text-blue-400 hover:-translate-y-1 hover:scale-105 transition-transform"
        >
          <span className="text-blue-500">F</span>
          <span className="text-red-500">i</span>
          <span className="text-green-500">v</span>
          <span className="text-yellow-500">i</span>
          <span className="text-violate-500">o</span>
        </a>

        <div className="flex items-center gap-4">
          {/* Desktop Header */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  smooth={true}
                  duration={500}
                  offset={-70} // adjust based on Header height
                  spy={true}
                  activeClass="text-blue-600 dark:text-blue-400"
                  className="cursor-pointer text-sm font-medium py-2 px-3 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-blue-600/10 dark:hover:bg-blue-400/10 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden dark:bg-gray-900/60 bg-white/60 backdrop-blur-[5px] border-t border-gray-200 dark:border-gray-800 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <a
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium ${
                    location.pathname === path
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
