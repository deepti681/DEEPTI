"use client"
import { motion, type Variants } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaMobileAlt, FaChartLine, FaUsers } from "react-icons/fa"
import { SiVercel, SiGithub, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"
import { MdBusiness, MdEmail } from "react-icons/md"

const skillsData = [
  // Technical Skills
  { name: "HTML5", icon: FaHtml5, category: "Frontend", color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend", color: "text-blue-500" },
  { name: "JavaScript", icon: FaJsSquare, category: "Frontend", color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend", color: "text-blue-600" },
  { name: "React", icon: FaReact, category: "Frontend", color: "text-cyan-500" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend", color: "text-gray-900 dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "text-teal-500" },
  { name: "Git & GitHub", icon: FaGitAlt, category: "Tools", color: "text-red-500" },
  { name: "Responsive Design", icon: FaMobileAlt, category: "Frontend", color: "text-green-500" },

  // Deployment & Business Skills
  { name: "Vercel Deployment", icon: SiVercel, category: "Deployment", color: "text-gray-900 dark:text-white" },
  { name: "GitHub Pages", icon: SiGithub, category: "Deployment", color: "text-gray-800 dark:text-gray-200" },
  { name: "Lead Generation", icon: FaChartLine, category: "Business", color: "text-primary" },
  { name: "Email Proposals", icon: MdEmail, category: "Business", color: "text-secondary" },
  { name: "Client Relations", icon: FaUsers, category: "Business", color: "text-purple-500" },
  { name: "Business Development", icon: MdBusiness, category: "Business", color: "text-indigo-500" },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
}

const Skills = () => (
  <section className="py-20 px-6 bg-background text-center min-h-screen">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="max-w-7xl mx-auto"
    >
      <motion.h2 variants={skillVariants} className="text-4xl md:text-5xl font-bold text-gradient mb-4">
        My Skills & Expertise
      </motion.h2>
      <motion.p variants={skillVariants} className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto">
        A comprehensive blend of technical development skills and business acumen to deliver complete solutions
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillsData.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={index}
              variants={skillVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -1, 1, 0],
                transition: { duration: 0.3 },
              }}
              className="group relative p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg skill-card cursor-pointer"
            >
              <div className="absolute top-2 right-2 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                {skill.category}
              </div>

              <div className="flex flex-col items-center space-y-4">
                <div className="p-3 bg-muted rounded-full group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          )
        })}
      </div>

      <motion.div variants={skillVariants} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gradient-primary rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-2">Frontend Development</h3>
          <p className="text-white/90">Modern web technologies and responsive design</p>
        </div>
        <div className="text-center p-6 bg-card border border-border rounded-xl">
          <h3 className="text-2xl font-bold mb-2 text-card-foreground">Deployment & Tools</h3>
          <p className="text-muted-foreground">Professional deployment and version control</p>
        </div>
        <div className="text-center p-6 bg-secondary rounded-xl text-white">
          <h3 className="text-2xl font-bold mb-2">Business Skills</h3>
          <p className="text-white/90">Client relations and business development</p>
        </div>
      </motion.div>
    </motion.div>
  </section>
)

export default Skills
