import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ArrowRight, Zap } from "lucide-react";

const Join = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(true);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeh00s62uovI1a4DBEA19wUcZNebqXSqU0sck-P456RwoMUZA/viewform";

  // Animation for individual falling letters
  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 60,
        damping: 12
      }
    })
  };

  // Animation for side-sliding subtext
  const sideSlideVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2 // Synced to start while letters are falling
      }
    }
  };

  const titleJoin = "JOIN".split("");
  const titleCodeware = "CODEWARE.".split("");

  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row overflow-hidden font-sans">

      {/* LEFT SIDE: SYNCED ANIMATION AREA */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-16 z-20 bg-black relative">

        <div className="space-y-10 max-w-xl">

          <div className="space-y-1">
            {/* Falling JOIN */}
            <div className="flex overflow-hidden">
              {titleJoin.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="text-6xl md:text-8xl font-black tracking-tighter uppercase"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Falling CODEWARE (Neon) */}
            <div className="flex overflow-hidden">
              {titleCodeware.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i + 4} // Stagger starts after "JOIN"
                  initial="hidden"
                  animate="visible"
                  variants={letterVariants}
                  className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-[#64FFDA]"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Side-sliding SHAPE REALITY (Synced) */}
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={sideSlideVariants}
              className="text-3xl md:text-5xl font-light tracking-tight text-neutral-500 uppercase italic pt-4 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#64FFDA]/30" />
              Shape Reality.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-sm border-l border-neutral-800 pl-6"
          >
            The circle for the relentless. Stop watching from the sidelines and start <span className="text-white">architecting the future.</span>
          </motion.p>

          {/* NEON APPLY NOW BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
          >
            <button
              onClick={() => { setIsFormOpen(true); setIsFormLoading(true); }}
              className="group relative flex items-center gap-6 bg-[#64FFDA] text-black px-10 py-5 rounded-none font-black uppercase tracking-widest text-sm transition-all duration-300 hover:gap-10 active:scale-95"
            >
              <span>Apply Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />

              {/* Button Border Detail */}
              <div className="absolute -bottom-1 -right-1 w-full h-full border border-[#64FFDA] -z-10 group-hover:bottom-0 group-hover:right-0 transition-all" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* RIGHT SIDE: IMAGE AREA (Original framing) */}
      <div className="relative h-[60vh] md:h-screen md:w-[55%] shrink-0 bg-black">
        <img
          src="/images/join/join.jpeg"
          alt="CodeWare Scene"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent md:hidden" />
      </div>

      {/* --- MODAL (Kept 100% same) --- */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-2xl"
          >
            <div className="absolute inset-0" onClick={() => setIsFormOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl h-[90vh] md:h-[95vh] bg-neutral-950 rounded-[3rem] p-[2px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F6] via-[#64FFDA] to-[#448AFF] animate-[spin_8s_linear_infinity]" />
              <div className="relative w-full h-full bg-neutral-950 rounded-[3rem] overflow-hidden flex flex-col">
                <div className="p-5 flex justify-between items-center bg-black/50 border-b border-white/5 shrink-0">
                   <div className="ml-6">
                     <img src="/images/logo.png" alt="CodeWare Logo" className="h-8 w-auto animate-pulse" />
                   </div>
                   <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white mr-4 transition-transform hover:rotate-90">
                     <X size={28} />
                   </button>
                </div>
                <div className="flex-1 relative bg-white">
                   {isFormLoading && (
                     <div className="absolute inset-0 z-50 bg-neutral-950 flex items-center justify-center">
                       <Loader2 size={48} className="text-[#64FFDA] animate-spin" />
                     </div>
                   )}
                   <iframe
                     src={googleFormUrl}
                     onLoad={() => setIsFormLoading(false)}
                     className="w-full h-full border-none"
                     style={{ width: '100%', height: '100%', display: 'block' }}
                   >Loading…</iframe>
                   <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#64FFDA] rounded-tl-xl pointer-events-none" />
                   <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#29B6F6] rounded-br-xl pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Join;