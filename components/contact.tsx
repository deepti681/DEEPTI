"use client"
import { motion } from "framer-motion"

const Contact = () => (
  <section id="contact" className="bg-yellow-50 py-14 px-6 text-center">
    <motion.h2
      className="text-3xl font-bold text-orange-800 mb-2"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      Contact Me
    </motion.h2>
    <p className="mb-6 text-amber-700">Have a project in mind or want to connect? Send me a message!</p>
    <motion.form
      className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6"
      action="https://formspree.io/f/xyzpzdgl"
      method="POST"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-400 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail Address"
        required
        className="border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-400 transition"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        required
        className="border border-amber-200 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-400 transition"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-orange-400 to-amber-300 text-white font-bold py-3 rounded-lg shadow hover:scale-105 transition"
      >
        Send Message
      </button>
    </motion.form>
  </section>
)

export default Contact
