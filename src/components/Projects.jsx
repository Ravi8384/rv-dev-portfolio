import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} 

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} 

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by OpenAI GPT, featuring conversation history, context awareness, and multi-language support.",
    tech: ["Angular", "Node.js", "Socket.io", "OpenAI API"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop functionality, team assignments, and progress tracking.",
    tech: ["React", "Redux", "Firebase", "Material UI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio website generator that creates stunning personal websites from simple JSON configurations.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather application with 7-day forecasts, location search, and animated weather visualizations.",
    tech: ["React", "OpenWeather API", "CSS Animations"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
  {
    title: "Code Snippet Manager",
    description: "Developer tool for organizing and sharing code snippets with syntax highlighting and tagging system.",
    tech: ["Vue.js", "MongoDB", "Prism.js"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];

const experience = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    duration: "2022 - Present",
    description: "Leading frontend development for enterprise applications using React and Angular. Mentoring junior developers and establishing best practices.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    duration: "2020 - 2022",
    description: "Developed responsive web applications and implemented complex UI components. Collaborated with design team for pixel-perfect implementations.",
  },
  {
    role: "Junior Developer",
    company: "StartUp Hub",
    duration: "2018 - 2020",
    description: "Built and maintained multiple client websites. Gained expertise in modern JavaScript frameworks and CSS methodologies.",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Projects Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[#16f2b3]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#16f2b3] mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-[#16f2b3]/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#16f2b3]/5 to-transparent rounded-xl pointer-events-none"
              />
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-[#16f2b3]" />
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#16f2b3" }}
                    className="text-gray-400 hover:text-[#16f2b3] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: "#16f2b3" }}
                    className="text-gray-400 hover:text-[#16f2b3] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[#16f2b3] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-[#16f2b3]/10 text-[#16f2b3] rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                  className="absolute -top-2 -right-2 px-2 py-1 bg-[#16f2b3] text-black text-xs font-semibold rounded-full"
                >
                  Featured
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Experience Section */}
        <motion.div variants={cardVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-[#16f2b3]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-[#16f2b3] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#16f2b3] via-[#16f2b3]/50 to-transparent" />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex md:items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#16f2b3] rounded-full border-4 border-black z-10"
              />

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`ml-8 md:ml-0 md:w-5/12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-[#16f2b3]/50 transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <span className="text-[#16f2b3] text-sm font-medium">{exp.duration}</span>
                <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                <p className="text-gray-400 text-sm mt-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-3">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
