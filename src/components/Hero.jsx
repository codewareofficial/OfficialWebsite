import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black to-neutral-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          Where Coders Compete, Build, and Grow.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto"
        >
          CodeWare is the official coding and development community, organizing contests, technical initiatives, and building real-world technology together.
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-sm uppercase tracking-widest text-neutral-400"
        >
          Code. Compete. Create.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10"
        >
          <Button size="lg" className="px-8 py-6 text-lg">
            Explore
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
