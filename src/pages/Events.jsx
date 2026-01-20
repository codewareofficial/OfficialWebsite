import { motion } from "framer-motion";

const springConfig = { type: "spring", stiffness: 100, damping: 15 };

const Events = () => {
  const events = [];

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-6 md:px-16 pt-32 pb-10 font-sans selection:bg-[#64FFDA] selection:text-black">

      {/* Header Section */}
      <div className="flex flex-col border-b border-[#448AFF]/20 pb-12 mb-20">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={springConfig}
          className="text-6xl md:text-9xl font-black uppercase tracking-tighter"
        >
          Events<span className="text-[#64FFDA]">.</span>
        </motion.h1>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {events.length > 0 ? (
          <div className="grid gap-4">
             {/* Event List Mapping */}
          </div>
        ) : (
          /* --- THE CLEANEST "NO EVENTS" STATE --- */
          <div className="relative pt-10">
            {/* Subtle Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-800">
              <motion.div
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#64FFDA]/40 to-transparent"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h2 className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] text-neutral-200">
                No Upcoming Events
              </h2>

              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-[#64FFDA]/50" />
                <p className="text-[10px] md:text-xs font-mono text-neutral-500 uppercase tracking-[0.3em]">
                  Check back for new session updates
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </main>

      {/* Footer System Status */}
      <footer className="fixed bottom-10 left-6 md:left-16 opacity-20 hidden md:block">
        <div className="text-[10px] font-mono text-white uppercase tracking-[1em]">
          Codeware // 2026_Archive
        </div>
      </footer>
    </div>
  );
};

export default Events;