import { motion } from "framer-motion";

const ConnectSection = () => {
  return (
    <section id="connect" className="py-20 max-w-7xl mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Connect With Us
      </motion.h2>
      <motion.p
        className="text-gray-300 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Follow us on our socials or get in touch directly.
      </motion.p>
      <motion.div
        className="flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a href="https://github.com" target="_blank" className="text-blue-500 hover:underline">GitHub</a>
        <a href="https://linkedin.com" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
        <a href="mailto:contact@codeware.edu" className="text-blue-500 hover:underline">Email</a>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
