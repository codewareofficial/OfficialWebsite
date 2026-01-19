import { motion } from "framer-motion";
import { ArrowUpRight, WifiOff } from "lucide-react";

const Events = () => {
  // Empty array to show the clean state
  const events = [];

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 pt-32 pb-10 font-sans selection:bg-[#64FFDA] selection:text-black">

      {/* Header Section */}
      <div className="flex justify-between items-end border-b border-white/10 pb-8 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black uppercase tracking-tighter"
        >
          Events<span className="text-[#64FFDA]">.</span>
        </motion.h1>

        <div className="hidden md:block">
          <span className="text-neutral-700 text-[10px] font-mono uppercase tracking-[0.4em]">
            Archive_01
          </span>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {events.length > 0 ? (
          <div className="grid gap-px bg-white/10 border border-white/10">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-black p-8 flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:bg-neutral-950 transition-colors"
              >
                <div className="flex gap-8 items-center">
                  <div className="w-32 h-20 bg-neutral-900 rounded-sm overflow-hidden border border-white/5">
                    <img
                      src={event.image}
                      alt=""
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{event.title}</h3>
                </div>
                <ArrowUpRight className="text-neutral-700 group-hover:text-[#64FFDA] transition-colors" size={32} />
              </motion.div>
            ))}
          </div>
        ) : (
          /* CLEAN EMPTY STATE */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="border border-white/5 bg-neutral-950/20 p-16 md:p-32 flex flex-col items-center justify-center text-center space-y-4"
          >
            <WifiOff size={24} className="text-neutral-800" />
            <h2 className="text-xl font-bold uppercase tracking-widest text-neutral-500">
              No events scheduled
            </h2>
          </motion.div>
        )}
      </main>

      {/* Footer Detail */}
      <footer className="mt-20 flex items-center opacity-10">
        <div className="h-[1px] flex-1 bg-white" />
        <span className="text-[8px] uppercase tracking-[1em] pl-10 whitespace-nowrap">
          CodeWare
        </span>
      </footer>
    </div>
  );
};

export default Events;