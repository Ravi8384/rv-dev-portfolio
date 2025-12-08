import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {Toaster, toast } from "sonner";

// EmailJS Configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "service_g7ivfig";
const EMAILJS_TEMPLATE_ID = "template_ieqcgaj";
const EMAILJS_PUBLIC_KEY = "NJkBGGW2uti5-5T2O";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

const contactInfo = [
  { icon: Mail, label: "Email", value: "astha@example.com", href: "mailto:astha@example.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Location", value: "India", href: "#" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Astha", // Your name
        },
        EMAILJS_PUBLIC_KEY
      );
      console.log("EmailJS success");
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-12 lg:px-24">
    <Toaster position="top-right" richColors />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-[#16f2b3]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#16f2b3] mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#16f2b3] focus:outline-none focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300"
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#16f2b3] focus:outline-none focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300"
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <label className="block text-sm text-gray-400 mb-2">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:border-[#16f2b3] focus:outline-none focus:ring-1 focus:ring-[#16f2b3] transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.05, boxShadow: isLoading ? "none" : "0 0 30px rgba(22, 242, 179, 0.4)" }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                className="w-full py-4 bg-[#16f2b3] text-black font-semibold rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ x: 10, backgroundColor: "rgba(22, 242, 179, 0.1)" }}
                  className="flex items-center gap-4 p-4 bg-gray-900/30 border border-gray-800 rounded-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#16f2b3]/10 rounded-lg flex items-center justify-center group-hover:bg-[#16f2b3]/20 transition-colors">
                    <info.icon className="w-6 h-6 text-[#16f2b3]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8 border-t border-gray-800"
            >
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(22, 242, 179, 0.5)" 
                    }}
                    className="w-12 h-12 bg-gray-900/50 border border-gray-800 rounded-lg flex items-center justify-center hover:border-[#16f2b3] hover:bg-[#16f2b3]/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-[#16f2b3]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="relative mt-8 p-6 bg-gradient-to-br from-[#16f2b3]/5 to-transparent border border-[#16f2b3]/20 rounded-xl"
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(22, 242, 179, 0.2)",
                    "0 0 40px rgba(22, 242, 179, 0.4)",
                    "0 0 20px rgba(22, 242, 179, 0.2)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-[#16f2b3] rounded-full"
              />
              <p className="text-gray-400 italic">
                "I'm always excited to work on new projects and collaborate with creative minds. 
                Let's build something amazing together!"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
