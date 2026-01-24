import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin } from "lucide-react";

// --- 1. PREMIUM GLOW CARD ---
const GlowCard = ({ children, className = "", glowColor = "from-[#29B6F6] via-[#64FFDA] to-[#448AFF]", borderColor = "border-[#448AFF]/50" }) => {
  return (
    <div className={`relative group h-full w-full ${className}`}>
      <div className={`absolute -inset-[2px] bg-gradient-to-r ${glowColor} rounded-2xl blur-md opacity-25 group-hover:opacity-100 transition duration-500`} />
      <Card className={`relative h-full bg-neutral-900 border ${borderColor} overflow-hidden rounded-2xl shadow-xl flex flex-col p-0 transition-colors duration-500 group-hover:border-white/20`}>
        {children}
      </Card>
    </div>
  );
};

// --- 2. THE DYNAMIC REVEAL WRAPPER ---
const AnimatedItem = ({ children, isTopRow = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for responsive threshold
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    // Desktop: 0.7 (wait to see logo) | Mobile: 0.4 (reveal sooner for short screens)
    threshold: isTopRow ? 0 : (isMobile ? 0.4 : 0.7),
    rootMargin: "0px"
  });

  return (
    <div ref={ref} className="relative w-full max-w-sm flex justify-center">
      {/* LOGO LAYER */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={inView ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: isTopRow ? 0.4 : 0.1 }}
        className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none"
      >
        <img src="/images/logo.png" alt="Logo" className="w-32 h-32 object-contain" />
      </motion.div>

      {/* CONTENT LAYER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          delay: isTopRow ? 0.6 : 0.2,
          type: "spring",
          stiffness: 60,
          damping: 25
        }}
        className="w-full h-full flex justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};

// --- 3. MAIN TEAM SECTION ---
const TeamSection = ({ title, faculty, visionary, president, coreTeam = [], semiCoreTeam = [] }) => {
  const LinkedInButton = ({ link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#29B6F6] hover:text-[#64FFDA] transition-colors">
      <Linkedin size={16} />
      <span className="text-xs font-medium">Connect</span>
    </a>
  );

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">

        {/* MENTORSHIP & VISION (Instant on Landing) */}
        {(faculty || visionary) && (
          <div className="mb-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white uppercase tracking-tighter">
              Mentorship <span className="text-[#64FFDA]">&</span> Vision
            </h2>
            <div className="flex flex-wrap justify-center gap-10">
              {faculty && (
                <AnimatedItem isTopRow={true}>
                  <GlowCard className="w-[280px] md:w-[320px]" glowColor="from-purple-500 via-[#64FFDA] to-blue-500" borderColor="border-purple-500/50">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img src={faculty.photo} alt={faculty.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <CardContent className="text-center pt-4 pb-6 flex flex-col items-center">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">{faculty.name}</h3>
                      <p className="text-purple-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Faculty In-Charge</p>
                      <div className="mt-4">{faculty.linkedin && <LinkedInButton link={faculty.linkedin} />}</div>
                    </CardContent>
                  </GlowCard>
                </AnimatedItem>
              )}
              {visionary && (
                <AnimatedItem isTopRow={true}>
                  <GlowCard className="w-[280px] md:w-[320px]" glowColor="from-amber-400 via-[#64FFDA] to-emerald-500" borderColor="border-amber-400/50">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <img src={visionary.photo} alt={visionary.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <CardContent className="text-center pt-4 pb-6 flex flex-col items-center">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight">{visionary.name}</h3>
                      <p className="text-amber-400 font-bold text-[10px] uppercase tracking-[0.2em] mt-2">Visionary</p>
                      <div className="mt-4">{visionary.linkedin && <LinkedInButton link={visionary.linkedin} />}</div>
                    </CardContent>
                  </GlowCard>
                </AnimatedItem>
              )}
            </div>
          </div>
        )}

        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white uppercase tracking-tighter">
          {title} <span className="text-[#64FFDA]">.</span>
        </h2>

        {/* PRESIDENT & GRID (Responsive Scroll Reveal) */}
        {president && (
          <div className="flex justify-center mb-20 relative z-20">
            <AnimatedItem>
              <GlowCard className="w-[270px] md:w-[310px]" borderColor="border-[#448AFF]/50">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img src={president.photo} alt={president.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent className="text-center pt-3 pb-5 px-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{president.name}</h3>
                  <p className="text-[#64FFDA] font-semibold text-[10px] uppercase tracking-[0.15em] mt-1">President</p>
                  <p className="text-neutral-500 font-mono text-[9px] uppercase tracking-widest mt-1.5 opacity-80">
                    <span className="text-[#448AFF]/50 mr-1">//</span>Chairperson apple Development 
                  </p>
                  <div className="mt-4 flex justify-center">{president.linkedin && <LinkedInButton link={president.linkedin} />}</div>
                </CardContent>
              </GlowCard>
            </AnimatedItem>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-14">
          {[...coreTeam, ...semiCoreTeam].map((member, index) => (
            <AnimatedItem key={member.id || index}>
              <GlowCard className="w-[270px] md:w-[310px]" borderColor="border-[#448AFF]/50">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110" />
                </div>
                <CardContent className="text-center pt-3 pb-5 px-4 flex-grow">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{member.name}</h3>
                  <p className="text-[#64FFDA] font-semibold text-[10px] uppercase tracking-[0.15em] mt-1">{member.role}</p>
                  <div className="mt-4 flex justify-center">{member.linkedin ? <LinkedInButton link={member.linkedin} /> : <div className="h-5"/>}</div>
                </CardContent>
              </GlowCard>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;