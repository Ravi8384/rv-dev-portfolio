
import { motion } from "motion/react";
// Update the path and filename to your actual image file
import circleProfile from "../assets/ravi.png";

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

const textVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
} 

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.5,
    },
  },
} 

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  },
};

const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(22, 242, 179, 0.3)",
    "0 0 40px rgba(22, 242, 179, 0.5)",
    "0 0 20px rgba(22, 242, 179, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  },
};

export const Hero = ({user,skills,heroSummary, scrollToSection}) => {
  return (
    <section className="min-h-screen flex items-center bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Half - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={textVariants}>
              <span className="text-[#16f2b3] font-mono text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="text-[#16f2b3]">&lt;</span> {user}{" "}
              <span className="text-[#16f2b3]">/&gt;</span>
            </motion.h1>

            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-[#16f2b3]/30 text-[#16f2b3] text-sm font-medium backdrop-blur-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    borderColor: "rgba(22, 242, 179, 0.8)",
                    boxShadow: "0 0 15px rgba(22, 242, 179, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-white text-lg max-w-md leading-relaxed"
            >
              {heroSummary}
            </motion.p>

            <motion.div variants={textVariants} className="flex gap-4 pt-4">
              <motion.button
                className="px-6 py-3 bg-[#16f2b3] text-background font-semibold rounded-lg cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(22, 242, 179, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => scrollToSection(e, "#projects")}
              >
                View Projects
              </motion.button>
              <motion.button
                className="px-6 py-3 border border-[#16f2b3]/50 text-[#16f2b3] font-semibold rounded-lg cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  borderColor: "rgba(22, 242, 179, 1)",
                  boxShadow: "0 0 20px rgba(22, 242, 179, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={(e)=> scrollToSection(e, "#contact")}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Half - Animated Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={floatAnimation}
              className="relative"
            >
              {/* Glow ring behind image */}
              <motion.div
                animate={glowAnimation}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-[#16f2b3]/20 to-primary/20 blur-xl"
              />
              
              {/* Rotating border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-[#16f2b3]/30"
              />
              
              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#16f2b3]/50 bg-secondary">
                {/* Replace this with your image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-center px-4">
                    <img 
                      src={circleProfile} 
                      alt="Ravi Garg"
                      
                    />
                    {/* className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-full" */}
                  </span>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                  x: [-3, 3, -3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#16f2b3]"
              />
              <motion.div
                animate={{ 
                  y: [5, -5, 5],
                  x: [3, -3, 3],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-4 h-4 rounded-full bg-primary"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-6 w-3 h-3 rounded-full bg-[#16f2b3]/60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
