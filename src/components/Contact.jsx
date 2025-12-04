import { useState } from "react";
import emailjs from "emailjs-com";
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
    console.log("in function");
    
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
          <Circle size={12} className="fill-blue-500 fill:text-blue-400" />
          <hr className="w-full" />
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
            type="email"
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

// import { useState } from "react";
// import emailjs from "emailjs-com";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await emailjs.send(
//         "service_mt6mi5u",
//         "template_0n1hxwq",
//         {
//           name: form.name,
//           email: form.email,
//           message: form.message,
//         },
//         "rKecF16NSpxJjLQ5K"
//       );

//       setForm({ name: "", email: "", message: "" });
//       toast.success("Message sent successfully! ✅");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to send message. Try again.");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col items-center justify-center py-28 px-[8vw] md:px-[5vw] lg:px-[12vw]"
//     >
//       <div className="text-center mb-20">
//         <h2 className="text-4xl font-bold text-white tracking-wider">CONTACT</h2>
//         <div className="w-36 h-1 bg-purple-500 mx-auto mt-4"></div>
//         <p className="text-gray-400 mt-6 text-lg font-semibold max-w-2xl mx-auto">
//           Feel free to reach out to me for collaborations, opportunities, or any questions!
//         </p>
//       </div>

//       {/* Wider Card */}
//       <div className="w-full max-w-3xl bg-[#0d081f] p-10 rounded-xl shadow-xl border border-gray-700">
//         <h3 className="text-2xl font-semibold text-white text-center">
//           Drop Me a Message <span className="ml-1">💬</span>
//         </h3>

//         <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               required
//               className="w-full p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//             />

//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Your Email"
//               required
//               className="w-full p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//             />
//           </div>

//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             rows="5"
//             required
//             className="w-full p-4 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
//           />

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-white text-lg font-semibold rounded-md hover:opacity-90 transition"
//           >
//             Send Message 🚀
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }
