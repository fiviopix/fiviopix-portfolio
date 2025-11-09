import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Circle } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, form);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (err) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <div
      id="contact"
      className="scroll-mt-[10vh] m-0 md:m-8 lg:m-16 p-4 min-h-[50vh]"
    >
      <div className="flex items-center gap-3 mb-5">
        <h2 className="min-w-35 text-blue-500 dark:text-blue-400 text-2xl font-bold ">
          Contact Us
        </h2>
        <span className="flex items-center w-full text-blue-500 dark:text-blue-400">
          <Circle size={12} className=" fill-blue-500 fill:text-blue-400" />
          <hr className="w-full " />
        </span>
      </div>
      <FadeInOnScroll delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="bg-gray-500/5 p-3 md:mx-30 md:p-8 rounded-xl space-y-4 flex flex-col items-center"
        >
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border border-black/10 dark:border-white/10 w-4/6 p-2 rounded-lg"
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border border-black/10 dark:border-white/10 w-4/6 p-2 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="border border-black/10 dark:border-white/10 w-4/6 p-2 rounded-lg"
            required
          />
          <button
            type="submit"
            className="font-semibold hover:scale-95 transition-transform m-1 p-2 px-20 rounded-lg bg-blue-400/15 text-blue-400 py-2"
          >
            Send
          </button>
        </form>
      </FadeInOnScroll>
    </div>
  );
}
