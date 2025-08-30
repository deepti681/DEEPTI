"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FaCode } from "react-icons/fa"

const HeroPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        <div className="space-y-6 text-center md:text-left md:w-3/5">
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start mb-2">
            <FaCode className="text-4xl text-orange-500" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white text-balance"
          >
            Hi, I'm Deepti
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl text-orange-500 font-semibold mb-2">
            Frontend Developer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-pretty">
            I build responsive, elegant, and user-friendly web applications. I transform creative ideas into reality
            with clean code and intuitive design.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-8"
          >
            <Link
              href="/projects"
              className="inline-block bg-orange-500 text-white font-bold py-3 px-7 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-orange-500 text-orange-500 font-bold py-3 px-7 rounded-lg hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={imageVariants}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="md:w-2/5 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <Image
              src="/logo.jpeg"
              alt="Deepti Pahuja - Frontend Developer"
              width={320}
              height={320}
              className="relative rounded-full shadow-2xl border-4 border-white dark:border-gray-700"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroPage
