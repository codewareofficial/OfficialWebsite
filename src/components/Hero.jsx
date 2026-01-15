import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-center">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to CodeWare
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300 mb-6 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Building the future of technology, one project at a time.
      </motion.p>
      <motion.button
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore More
      </motion.button>
    </section>
  );
};

export default Hero;
