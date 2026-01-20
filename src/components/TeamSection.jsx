import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Linkedin } from "lucide-react";

const GlowCard = ({ children, className = "" }) => {
  return (
    <div className={`relative group h-full w-full ${className}`}>
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#29B6F6] via-[#64FFDA] to-[#448AFF] rounded-2xl blur-md opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200" />
      <Card className="relative h-full bg-neutral-900 border border-[#448AFF]/50 overflow-hidden rounded-2xl shadow-xl flex flex-col p-0">
        {children}
      </Card>
    </div>
  );
};

const AnimatedItem = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: delay, type: "spring", stiffness: 100, damping: 15 }}
      className="w-full max-w-sm flex justify-center"
    >
      {children}
    </motion.div>
  );
};

const TeamSection = ({ title, president, coreTeam = [], semiCoreTeam = [] }) => {
  const LinkedInButton = ({ link }) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[#29B6F6] hover:text-[#64FFDA] transition-colors"
    >
      <Linkedin size={16} />
      <span className="text-xs font-medium">Connect</span>
    </a>
  );

  return (
    <section className="py-12 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-white uppercase tracking-tighter">
          {title} <span className="text-[#64FFDA]">.</span>
        </h2>

        {/* --- PRESIDENT (Fixed Image Gap) --- */}
        {president && (
          <div className="flex justify-center mb-20 relative z-20">
            <AnimatedItem>
              <GlowCard className="w-[300px] md:w-[340px]">
                {/* Changed aspect-ratio to a fixed height & inset-0 for the image */}
                <div className="relative h-[380px] md:h-[420px] w-full overflow-hidden bg-black">
                  <img
                    src={president.photo}
                    alt={president.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="text-center pt-4 pb-6 px-4 flex-grow flex flex-col bg-neutral-900 border-t border-[#448AFF]/20">
                  <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                    {president.name}
                  </h3>
                  <p className="text-[#64FFDA] font-bold text-sm uppercase tracking-[0.2em] mt-1.5">
                    President
                  </p>
                  <p className="text-neutral-500 font-mono text-[10px] uppercase tracking-widest mt-1.5 opacity-80">
                    <span className="text-[#448AFF]/50 mr-1">//</span>
                    iOS Development Chairperson
                  </p>
                  <div className="mt-5">
                    {president.linkedin && <LinkedInButton link={president.linkedin} />}
                  </div>
                </CardContent>
              </GlowCard>
            </AnimatedItem>
          </div>
        )}

        {/* --- TEAM GRID --- */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-14">
          {[...coreTeam, ...semiCoreTeam].map((member, index) => (
            <AnimatedItem key={member.id || index} delay={index * 0.1}>
              <GlowCard className="w-[270px] md:w-[310px]">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="text-center pt-3 pb-5 px-4 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-white leading-tight uppercase tracking-tight">
                    {member.name}
                  </h3>
                  <p className="text-[#64FFDA] font-semibold text-[10px] uppercase tracking-[0.15em] mt-1 whitespace-nowrap overflow-hidden text-ellipsis px-2">
                    {member.role}
                  </p>
                  <div className="mt-4 flex justify-center">
                    {member.linkedin ? <LinkedInButton link={member.linkedin} /> : <div className="h-5"/>}
                  </div>
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