import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin } from "lucide-react";

// --- GLOW CARD ---
const GlowCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group h-full w-full ${className}`}>
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#29B6F6] via-[#64FFDA] to-[#448AFF] rounded-2xl blur-md opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
      <Card className="relative h-full bg-neutral-900 border border-[#448AFF]/50 overflow-hidden rounded-2xl shadow-xl flex flex-col">
        {children}
      </Card>
    </div>
  );
};

// --- ANIMATION WRAPPER ---
const AnimatedItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: delay, type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-sm h-full flex"
    >
      {children}
    </motion.div>
  );
};

const TeamSection = ({ title, president, coreTeam = [], semiCoreTeam = [] }) => {

  // Shared LinkedIn Button
  const LinkedInButton = ({ link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[#29B6F6] hover:text-[#64FFDA] transition-colors"
    >
      <Linkedin size={20} />
      <span className="text-sm font-medium">Connect</span>
    </a>
  );

  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-20 text-center text-white">
          {title} <span className="text-[#64FFDA]">.</span>
        </h2>

        {/* --- PRESIDENT (Stays Largest) --- */}
        {president && (
          <div className="flex justify-center mb-16 relative z-20">
            <AnimatedItem>
              <GlowCard>
                <div className="h-80 w-full shrink-0">
                  <img
                    src={president.photo}
                    alt={president.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardContent className="text-center py-8 flex-grow flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white">{president.name}</h3>
                  <p className="text-[#64FFDA] font-semibold text-lg mt-2 uppercase tracking-wide">
                    {president.role}
                  </p>
                  <div className="mt-auto pt-4">
                    {president.linkedin && <LinkedInButton link={president.linkedin} />}
                  </div>
                </CardContent>
              </GlowCard>
            </AnimatedItem>
          </div>
        )}

        {/* --- CORE TEAM (Flex Wrap) --- */}
        {coreTeam.length > 0 && (
          <div className="flex flex-wrap justify-center gap-10 mb-20 relative z-10 items-stretch">
            {coreTeam.map((member, index) => (
              <AnimatedItem key={member.id || index} delay={index * 0.15}>
                <GlowCard>
                  {/* Image Height: h-72 */}
                  <div className="h-72 w-full shrink-0">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Min Height: 180px */}
                  <CardContent className="text-center py-8 flex-grow flex flex-col justify-between min-h-[180px]">
                    <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
                        <p className="text-[#64FFDA] font-semibold text-sm mt-2 uppercase tracking-wide">
                        {member.role}
                        </p>
                    </div>
                    <div className="mt-4 h-6 flex items-end justify-center">
                        {member.linkedin ? <LinkedInButton link={member.linkedin} /> : <span className="h-6"/>}
                    </div>
                  </CardContent>
                </GlowCard>
              </AnimatedItem>
            ))}
          </div>
        )}

        {/* --- SEMI-CORE TEAM (Grid) --- */}
        {semiCoreTeam.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center items-stretch">
            {semiCoreTeam.map((member, index) => {
              const delay = (index % 3) * 0.1;
              return (
                <AnimatedItem key={member.id || index} delay={delay}>
                  <GlowCard>
                    {/* UPDATED: h-72 (Matches Core Team) */}
                    <div className="h-72 w-full shrink-0">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* UPDATED: min-h-[180px] & text sizes (Matches Core Team) */}
                    <CardContent className="text-center py-8 flex-grow flex flex-col justify-between min-h-[180px]">
                      <div>
                          {/* Text size increased to 2xl to match Core */}
                          <h3 className="text-2xl font-bold text-white leading-tight">{member.name}</h3>
                          <p className="text-[#64FFDA] font-semibold text-sm mt-2 uppercase tracking-wide">
                            {member.role}
                          </p>
                      </div>

                      <div className="mt-4 h-6 flex items-end justify-center">
                          {member.linkedin ? <LinkedInButton link={member.linkedin} /> : <span className="h-6"/>}
                      </div>
                    </CardContent>
                  </GlowCard>
                </AnimatedItem>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default TeamSection;