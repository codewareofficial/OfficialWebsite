import { motion } from "framer-motion";

const techs = ["React", "Tailwind CSS", "Vite", "Framer Motion", "Shadcn UI"];

const TechStack = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 text-center">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Technology
      </motion.h2>
      <div className="flex justify-center flex-wrap gap-6">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 px-6 py-4 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
