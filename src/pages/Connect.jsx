import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Instagram } from "lucide-react";

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Connect With Us
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-neutral-300 mb-10"
        >
          Have questions, suggestions, or want to collaborate? Reach out to CodeWare through any of these platforms.
        </motion.p>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <Button asChild variant="outline">
            <a href="mailto:contact@codeware.com" className="flex items-center gap-2">
              <Mail /> Email Us
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/company/codeware" target="_blank" className="flex items-center gap-2">
              <Linkedin /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://instagram.com/codeware" target="_blank" className="flex items-center gap-2">
              <Instagram /> Instagram
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
