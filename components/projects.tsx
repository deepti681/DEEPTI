"use client"
import { motion, type Variants } from "framer-motion"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si"

const projectVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
}

const Projects = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projects = [
    {
      title: "Landing Page",
      description:
        "A simple and responsive landing page built using HTML, CSS, and JavaScript. It's a foundational project showcasing my skills in creating clean, user-friendly web interfaces.",
      link: "https://deepti681.github.io/Landing-Page-WebGenius/",
      technologies: [SiJavascript, SiTailwindcss],
      category: "Frontend",
      featured: false,
    },
    {
      title: "Yoga Website",
      description:
        "A modern, responsive yoga website featuring beautiful animations, class schedules, and instructor profiles. Built with Next.js and styled with Tailwind CSS for optimal performance.",
      link: "https://i-yoga-asana.vercel.app/",
      technologies: [SiNextdotjs, SiReact, SiTailwindcss],
      category: "Full Stack",
      featured: true,
    },
  ]

  return (
    <section className="py-20 px-6 bg-muted/30 text-center min-h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.h2 variants={projectVariants} className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Featured Projects
        </motion.h2>
        <motion.p variants={projectVariants} className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating technical skills and creative problem-solving
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className={`group relative p-8 bg-card rounded-2xl shadow-sm border border-border card-hover overflow-hidden ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-primary text-white text-sm rounded-full font-medium">
                  Featured
                </div>
              )}

              <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full font-medium">
                {project.category}
              </div>

              <div className="relative z-10 text-left">
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-muted-foreground">Built with:</span>
                  {project.technologies.map((Tech, techIndex) => (
                    <Tech key={techIndex} className="text-xl text-primary" />
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 focus-ring"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    View Live
                  </a>
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border text-card-foreground font-semibold rounded-lg hover:bg-muted transition-all duration-300 focus-ring">
                    <FaGithub className="text-sm" />
                    Code
                  </button>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div variants={projectVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-4">Interested in working together?</h3>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 focus-ring"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects
