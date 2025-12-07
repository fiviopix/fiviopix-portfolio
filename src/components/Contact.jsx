import { useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { Circle, Send, Mail, Phone, MapPin, Loader2, Github, Linkedin, Twitter } from "lucide-react";
import FadeInOnScroll from "./FadeInOnScroll";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false); // New state for loading spinner

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    
    try {
      const templateParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      await emailjs.send(
        "service_mt6mi5u",
        "template_0n1hxwq",
        templateParams,
        "rKecF16NSpxJjLQ5K"
      );

      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false); // Stop loading regardless of success/fail
    }
  };

  return (
    <div
      id="contact"
      className="relative w-full bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white py-20 px-4 md:px-10 lg:px-20 overflow-hidden transition-colors duration-500"
    >
      {/* Background Decor (Matching About Section) */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      {/* Header */}
      <FadeInOnScroll delay={0.1}>
        <div className="flex flex-col md:flex-row items-end gap-6 mb-16 border-b border-gray-200 dark:border-white/10 pb-8">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 dark:from-blue-400 dark:via-cyan-300 dark:to-white">
              Get in Touch.
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>
          </div>
          <div className="flex-grow hidden md:flex items-center gap-2 text-blue-500/50 mb-4">
             <div className="h-[1px] w-full bg-gradient-to-r from-blue-500/50 to-transparent"></div>
             <Circle size={10} className="fill-blue-500 animate-pulse" />
          </div>
        </div>
      </FadeInOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Column: Contact Info */}
        <FadeInOnScroll delay={0.2}>
          <div className="flex flex-col justify-between h-full space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Contact Information</h3>
              
              {/* Info Item 1 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-200">Email Us</p>
                  <a href="mailto:hello@fiviopix.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors">fiviopix@gmail.com</a>
                </div>
              </div>

              {/* Info Item 2 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-200">Call Us</p>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>

              {/* Info Item 3 */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-gray-200">Visit Us</p>
                  <p className="text-gray-600 dark:text-gray-400">Gujarat, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Follow Us</h4>
              <div className="flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300">
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeInOnScroll>

        {/* Right Column: The Form */}
        <FadeInOnScroll delay={0.3}>
          <div className="relative p-8 md:p-10 rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-2xl dark:shadow-none backdrop-blur-xl">
            {/* Glow Effect behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative space-y-6">
              
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Your Name</label>
                <input
                  name="name"
                  placeholder=""
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder=""
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-gray-50 dark:bg-black/20 border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </FadeInOnScroll>

      </div>
    </div>
  );
}
