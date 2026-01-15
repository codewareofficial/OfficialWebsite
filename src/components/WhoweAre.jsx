import { motion } from "framer-motion";

const points = [
  {
    title: "Competitive Contests",
    desc: "Sharpen your skills through coding competitions.",
  },
  {
    title: "Collaborative Projects",
    desc: "Work with peers on real-world software solutions.",
  },
  {
    title: "Skill-Building Workshops",
    desc: "Learn new technologies with guided workshops.",
  },
  {
    title: "Mentorship",
    desc: "Receive guidance from experienced developers.",
  },
];

const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="relative py-20 bg-neutral-900 text-white overflow-hidden">

      {/* Floating background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-purple-500 opacity-20 rounded-full -top-10 left-10"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-48 h-48 bg-blue-500 opacity-10 rounded-full -bottom-20 right-20"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

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

        {/* Points Grid with staggered animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-neutral-800 p-6 rounded-xl shadow transition-all cursor-pointer"
            >
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-neutral-400 text-sm">{point.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhoWeAre;
