import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Who We Are
      </motion.h2>
      <motion.p
        className="text-gray-300 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        CodeWare is the official coding club of our college. We create innovative projects, learn together, and build technology that matters.
      </motion.p>
    </section>
  );
};

export default WhoWeAre;
