import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home"},
  { name: "About", href: "#about"},
  { name: "Projects", href: "#projects"},
  { name: "Contact", href: "#contact"},
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
} 

const logoVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -180 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
}

const mobileMenuVariants = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    }
  },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.05,
    }
  },
} 

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    }
  },
} 

const Navbar = ({scrollToSection}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-secondary-foreground hover:bg-secondary/50 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <motion.div
              className="flex shrink-0 items-center"
              variants={logoVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-2xl font-bold text-white tracking-tight"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 8px hsl(var(--primary))",
                }}
              >
                AV
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden sm:ml-8 sm:block"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex space-x-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    variants={itemVariants}
                    className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors overflow-hidden bg-secondary text-white
                        text-white hover:text-grey"
                    
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    
                  >
                    <span className="relative z-10">{item.name}</span>
                      <motion.span
                        className="absolute inset-0 rounded-md bg-secondary/50"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                
                    <motion.span
                      className="absolute bottom-0 left-1/2 h-0.5 bg-primary -translate-x-1/2"
                      initial={{ width: 0 }}
                      whileHover={{ width: "60%" }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => 
                    {scrollToSection(e, item.href), setIsMobileMenuOpen(false)}}
                  variants={mobileItemVariants}
                  className="block rounded-md px-3 py-2 text-base font-medium transition-colors bg-secondary text-white text-secondary-foreground hover:bg-secondary/50 hover:text-white"                 
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
