import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Github } from "lucide-react"; // Added Github

const Connect = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={32} />,
      link: "https://github.com/your-org", // Replace with actual link
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      link: "https://www.linkedin.com/company/codeware-coding-club/",
      color: "hover:text-[#0077B5]", // LinkedIn Blue override or keep theme
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      link: "https://www.instagram.com/codeware_ycce",
      color: "hover:text-[#E4405F]", // Insta Pink override or keep theme
    },
    {
      name: "Email",
      icon: <Mail size={32} />,
      link: "mailto:contact@codeware.com",
      color: "hover:text-[#64FFDA]",
    },
  ];

  return (
    <section id="connect" className="bg-neutral-950 py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#448AFF]/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-[#29B6F6]">Connect</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
            Have a question, want to collaborate, or just want to say hi?
            Follow us on our socials or drop us an email!
          </p>
        </motion.div>

        {/* Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              className="relative group"
            >
              {/* Button Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#29B6F6] to-[#64FFDA] rounded-xl blur opacity-20 group-hover:opacity-100 transition duration-300" />

              {/* Button Content */}
              <div className="relative bg-neutral-900 border border-[#448AFF]/30 h-20 w-20 rounded-xl flex items-center justify-center text-[#29B6F6] transition-all duration-300 group-hover:bg-neutral-800 group-hover:scale-105">
                <span className={`transition-colors duration-300 group-hover:text-white`}>
                  {social.icon}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;