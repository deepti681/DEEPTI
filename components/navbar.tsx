"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  }

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          <Link href="/" className="hover:text-orange-500 transition-colors">
            DEEPTI.
          </Link>
        </motion.h1>
        <nav>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-6 md:gap-8 font-semibold"
          >
            {navLinks.map((link) => (
              <motion.li key={link.name} variants={itemVariants} className="transition-transform hover:scale-110">
                <Link
                  href={link.href}
                  className={`hover:text-orange-500 transition-colors ${
                    pathname === link.href ? "text-orange-500" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
