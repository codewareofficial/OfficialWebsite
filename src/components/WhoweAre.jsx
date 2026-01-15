import { motion } from "framer-motion";

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Who We Are
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-neutral-300 mb-10"
        >
          CodeWare is a student-driven technology community dedicated to fostering coding skills, organizing competitions, and building real-world software solutions together. We are coders, problem-solvers, and innovators.
        </motion.p>

        {/* Optional Points */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          <div className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg mb-2">Competitive Contests</h3>
            <p className="text-neutral-400 text-sm">Sharpen your skills through coding competitions.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg mb-2">Collaborative Projects</h3>
            <p className="text-neutral-400 text-sm">Work with peers on real-world software solutions.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg mb-2">Skill-Building Workshops</h3>
            <p className="text-neutral-400 text-sm">Learn new technologies with guided workshops.</p>
          </div>
          <div className="bg-neutral-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
            <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
            <p className="text-neutral-400 text-sm">Receive guidance from experienced developers.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;
