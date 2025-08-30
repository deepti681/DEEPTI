// about.tsx
"use client"
import { motion } from "framer-motion"
import { FaCode, FaLaptopCode, FaCogs } from "react-icons/fa"

// Define a type for the icon map based on the icons you have
type IconComponentType = typeof FaCode | typeof FaLaptopCode | typeof FaCogs

const iconMap: { [key: string]: IconComponentType } = {
  FaCode: FaCode,
  FaLaptopCode: FaLaptopCode,
  FaCogs: FaCogs,
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  const skillCards = [
    {
      title: "Clean Code",
      description: "I focus on writing elegant and efficient code that is easy to maintain and scale for any project.",
      icon: "FaCode",
    },
    {
      title: "Modern UI/UX",
      description: "I transform design concepts into intuitive and visually stunning user interfaces.",
      icon: "FaLaptopCode",
    },
    {
      title: "Problem Solving",
      description:
        "I thrive on tackling complex challenges and finding creative, effective solutions to build robust applications.",
      icon: "FaCogs",
    },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={textVariants}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={textVariants}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12"
        >
          I am a passionate frontend developer dedicated to crafting exceptional digital experiences. I specialize in
          turning innovative ideas into beautiful, interactive, and user-friendly websites.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCards.map((card, index) => {
            const Icon = iconMap[card.icon]
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.6 }}
                className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out border border-gray-200 dark:border-gray-700"
              >
                <div className="text-4xl text-orange-500 mb-4 flex justify-center">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{card.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{card.description}</p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default About
