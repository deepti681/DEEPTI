import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa"

const Footer = () => (
  <footer className="bg-gray-800 dark:bg-gray-900 text-gray-400 dark:text-gray-500 py-12">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">Let's Connect</h3>
          <p className="text-gray-400">Building the future, one line of code at a time.</p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/deepti681"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-700"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/deepti-pahuja"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-700"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:deeptipahuja340@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-700"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-sm flex items-center justify-center gap-2">
          &copy; 2025 Deepti Pahuja. Made with <FaHeart className="text-red-500" /> and lots of coffee.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
