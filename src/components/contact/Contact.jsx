import React, { useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    emailjs
      .sendForm(
        "service_81nalrt",
        "template_20001nu",
        form.current,
        "JNXtkx7CManuIoxEI"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccess(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact">
      <div className="sticky top-[3.8rem] z-30 py-4 flex overflow-hidden mb-6 md:static md:py-0 sticky-background">
        <motion.h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p
            className={`mb-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            I'm always open to new opportunities. Whether you have a question or
            just want to say hi, I'll try my best to get back to you!
          </p>

          {/* Contact info */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:quilatandg@gmail.com"
                className={`hover:underline ${
                  theme === "dark" ? "text-teal-400" : "text-teal-600"
                }`}
              >
                quilatandg@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={`w-full px-4 py-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={`w-full px-4 py-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium mb-1 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className={`w-full px-4 py-2 rounded-md border ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 rounded-md transition-colors ${
                theme === "dark"
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <motion.div
                className={`flex items-center p-3 rounded-md mt-4 ${
                  theme === "dark" ? "bg-green-900/30" : "bg-green-100"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-green-300" : "text-green-700"
                  }`}
                >
                  Message sent successfully! I'll get back to you soon.
                </p>
              </motion.div>
            )}

            {error && (
              <motion.div
                className={`flex items-center p-3 rounded-md mt-4 ${
                  theme === "dark" ? "bg-red-900/30" : "bg-red-100"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500 mr-2 flex-shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-red-300" : "text-red-700"
                  }`}
                >
                  Something went wrong. Please try again later.
                </p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
