import { motion } from "framer-motion";

const ShinyLogo = ({ src, alt, width = 80, height = 80 }) => {
  return (
    <div
      className="relative overflow-hidden"
      style={{ width, height }}
    >
      {/* The actual logo image */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain"
      />

      {/* The shine overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%)",
          transform: "translateX(-150%)",
        }}
        animate={{ x: ["-150%", "150%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
    </div>
  );
};

export default ShinyLogo;
