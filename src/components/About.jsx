import { motion } from "motion/react";



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
} 

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}



export const About= ({user, skillsWithLevels}) => {
  return (
    <section className="min-h-screen bg-black py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#16f2b3]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#16f2b3] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-white leading-relaxed"
            >
              Hello! I'm <span className="text-[#16f2b3] font-semibold">{user}</span>, 
              a passionate Frontend Developer with expertise in building modern, 
              responsive web applications.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-lg text-white leading-relaxed"
            >
              I specialize in creating intuitive user interfaces using Angular and React, 
              with a keen eye for design and performance optimization. Currently exploring 
              the exciting world of Generative AI and its applications in web development.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white leading-relaxed"
            >
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </motion.p>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-6"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "3+", label: "Projects" },
                { value: "5+", label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-card border border-white/15"
                >
                  <span className="text-3xl font-bold text-[#16f2b3]">{stat.value}</span>
                  <p className="text-sm text-white mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              My <span className="text-[#16f2b3]">Skills</span>
            </h3>
            
            {skillsWithLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between text-white">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#16f2b3]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-card rounded-full overflow-hidden border border-border">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#16f2b3] to-[#0ea5e9] rounded-full"
                  />
                </div>
              </motion.div>
            ))}

            {/* Download Resume Button */}
            <motion.a
            href="/resume.pdf"
            download="Astha_Verma_Resume.pdf"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(22, 242, 179, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 w-full py-4 px-6 bg-transparent border-2 border-[#16f2b3] text-[#16f2b3] rounded-lg font-semibold hover:bg-[#16f2b3]/10 transition-colors duration-300 text-center block"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
