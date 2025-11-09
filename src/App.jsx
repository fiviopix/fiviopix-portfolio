import { ToastContainer } from "react-toastify";
import Header from "./Layout/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./Layout/Footer";
import About from "./components/About";

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <div className="dark:bg-gray-900 bg-white text-gray-700 dark:text-gray-300">
        <Header />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
