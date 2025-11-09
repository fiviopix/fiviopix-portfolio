const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        {/* Left Side - Logo or Name */}
        <div className="mb-4 md:mb-0">
          <span className="font-semibold text-gray-700 dark:text-gray-200">
            © {year} FivioPix. All rights reserved.
          </span>
        </div>

        {/* Middle - Navigation */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-500 transition">
            Contact
          </a>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/fiviopix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/github.png" alt="GitHub" className="w-5 h-5" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="w-5 h-5"
            />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=fiviopix@gmail.com&su=Contact&body=Hello%20..."
            target="_blank"
            className="hover:text-blue-500 cursor-pointer"
          >
            <img src="/images/gmail.png" alt="Email" className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
