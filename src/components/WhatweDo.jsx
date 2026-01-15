import { motion } from "framer-motion";
import { GrWorkshop } from "react-icons/gr";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GiSoapExperiment } from "react-icons/gi";

// Example: You can import any React Icon you want
// import { FaLaptopCode, FaChalkboardTeacher, FaProjectDiagram } from "react-icons/fa";

const activities = [
  {
    title: "Coding Contests",
    desc: "Competitive events for coders to test their skills and solve real problems.",
    // Use React component here instead of image
    icon: < IoCodeSlashSharp className="text-blue-500 w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Workshops",
    desc: "Skill-building sessions on web, app, AI, and more, guided by seniors and mentors.",
    icon:  <GrWorkshop   className="text-green-400 w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Hack Challenges",
    desc: "Mini coding challenges to encourage learning and experimentation.",
    icon: < GiSoapExperiment className="text-yellow-400 w-12 h-12 mx-auto mb-4" />,
  },
  {
    title: "Collaborative Projects",
    desc: "Group projects to solve real-world problems and build portfolios.",
    icon: <GrWorkshop className="text-purple-400 w-12 h-12 mx-auto mb-4" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative py-20 bg-neutral-800 text-white overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          What We Do
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-neutral-300 mb-12"
        >
          CodeWare organizes a variety of coding initiatives to help students grow, learn, and compete.
        </motion.p>

        {/* Activities Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {activities.map((activity, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-neutral-700 p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer"
            >
              {/* Icon */}
              {activity.icon}

              {/* Title & Description */}
              <h3 className="font-semibold text-xl mb-2">{activity.title}</h3>
              <p className="text-neutral-300 text-sm">{activity.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
