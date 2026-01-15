import { motion } from "framer-motion";

const projects = [
  "Smart Traffic Simulator",
  "EcoTrack: Forest & Wildlife",
  "AI Chat Assistant",
];

const ProjectsSection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        What We Build
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 text-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {proj}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
