import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, ArrowUpRight } from "lucide-react";

const Join = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFormLoading, setIsFormLoading] = useState(true);

  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeh00s62uovI1a4DBEA19wUcZNebqXSqU0sck-P456RwoMUZA/viewform";

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

  const titleJoin = "JOIN".split("");
  const titleCodeware = "CODEWARE.".split("");

  return (
    <section className="min-h-screen w-full bg-black text-white flex flex-col md:flex-row overflow-hidden font-sans">

      {/* LEFT SIDE: CONTENT */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-24 py-16 z-20 bg-black relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="max-w-xl relative flex flex-col justify-center">

          {/* TITLES */}
          <div className="space-y-1 mb-10">
            <div className="flex overflow-hidden">
              {titleJoin.map((char, i) => (
                <motion.span key={i} custom={i} initial="hidden" animate="visible" variants={letterVariants}
                  className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-tight"
                >{char}</motion.span>
              ))}
            </div>
            <div className="flex overflow-hidden">
              {titleCodeware.map((char, i) => (
                <motion.span key={i} custom={i + 4} initial="hidden" animate="visible" variants={letterVariants}
                  className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-[#64FFDA] leading-tight"
                >{char}</motion.span>
              ))}
            </div>
          </div>

          {/* SUBTEXT */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.8 }} className="space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
              Architect the <span className="text-neutral-500 font-light italic">Invisible.</span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-sm border-l border-neutral-800 pl-6 font-light">
              We are a collective of <span className="text-white font-medium italic underline decoration-[#64FFDA]/50 underline-offset-4">relentless builders</span> pushing the limits of the digital fabric.
            </p>
          </motion.div>

          {/* REGISTER BUTTON */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 }} className="pt-12">
            <button
              onClick={() => { setIsFormOpen(true); setIsFormLoading(true); }}
              className="group relative flex items-center justify-between w-64 h-16 bg-white overflow-hidden transition-all duration-300 active:scale-95"
            >
              <div className="absolute inset-0 bg-[#64FFDA] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10 ml-8 text-black font-black uppercase tracking-[0.2em] text-sm">Register</span>
              <div className="relative z-10 mr-6 text-black transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={22} strokeWidth={2.5} />
              </div>
              <div className="absolute left-0 top-0 h-full w-1 bg-[#64FFDA] group-hover:bg-black transition-colors" />
            </button>
          </motion.div>

          {/* THE VIBE LINE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-20 pt-8 border-t border-white/5 flex items-center gap-3"
          >
            <div className="h-1 w-1 rounded-full bg-[#64FFDA] animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.4em] text-neutral-600 uppercase">
              © 2026 CODEWARE // IN CODE WE TRUST
            </span>
          </motion.div>

        </div>
      </div>

      {/* RIGHT SIDE: FULL COLOR IMAGE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        className="relative h-[60vh] md:h-screen md:w-[55%] shrink-0 bg-black"
      >
        <img
          src="/images/join/join.jpeg"
          alt="CodeWare Scene"
          className="w-full h-full object-cover object-[center_35%]"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent md:hidden" />
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-6 bg-black/95 backdrop-blur-2xl">
            <div className="absolute inset-0" onClick={() => setIsFormOpen(false)} />
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-6xl h-[90vh] bg-neutral-950 rounded-[3rem] p-[2px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#29B6F6] via-[#64FFDA] to-[#448AFF] animate-[spin_8s_linear_infinity]" />
              <div className="relative w-full h-full bg-neutral-950 rounded-[3rem] overflow-hidden flex flex-col">
                <div className="p-5 flex justify-between items-center bg-black/50 border-b border-white/5">
                   <div className="ml-6"><img src="/images/logo.png" alt="Logo" className="h-8 w-auto animate-pulse" /></div>
                   <button onClick={() => setIsFormOpen(false)} className="p-2 hover:bg-white/10 rounded-full text-white mr-4 transition-transform hover:rotate-90"><X size={28} /></button>
                </div>
                <div className="flex-1 relative bg-white">
                   {isFormLoading && <div className="absolute inset-0 z-50 bg-neutral-950 flex items-center justify-center"><Loader2 size={48} className="text-[#64FFDA] animate-spin" /></div>}
                   <iframe src={googleFormUrl} onLoad={() => setIsFormLoading(false)} className="w-full h-full border-none">Loading…</iframe>
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