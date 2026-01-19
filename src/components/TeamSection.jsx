import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Linkedin } from "lucide-react";



// --- GLOW CARD ---

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



// --- ANIMATION WRAPPER ---

const AnimatedItem = ({ children, delay = 0 }) => {

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2, rootMargin: "-50px" });

  return (

    <motion.div

      ref={ref}

      initial={{ opacity: 0, y: 50, scale: 0.9 }}

      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}

      transition={{ delay: delay, type: "spring", stiffness: 100, damping: 15 }}

      className="w-full max-w-sm h-full flex mx-auto"

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

      <Linkedin size={18} />

      <span className="text-sm font-medium">Connect</span>

    </a>

  );



  return (

    <section className="py-24 bg-neutral-950">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-20 text-center text-white">

          {title} <span className="text-[#64FFDA]">.</span>

        </h2>



        {/* --- PRESIDENT --- */}

        {president && (

          <div className="flex justify-center mb-16 relative z-20">

            <AnimatedItem>

              <GlowCard>

                <div className="relative aspect-[4/5] w-full overflow-hidden mb-0">

                  <img

                    src={president.photo}

                    alt={president.name}

                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"

                  />

                </div>

                {/* Changed pt-0 and added -mt-1 to pull content UP */}

                <CardContent className="text-center pt-0 pb-3 px-4 flex-grow flex flex-col -mt-1">

                  <h3 className="text-2xl font-bold text-white leading-tight">{president.name}</h3>

                  <p className="text-[#64FFDA] font-semibold text-base mt-0.5 uppercase tracking-wide">

                    {president.role}

                  </p>

                  <div className="mt-3 mb-1">

                    {president.linkedin && <LinkedInButton link={president.linkedin} />}

                  </div>

                </CardContent>

              </GlowCard>

            </AnimatedItem>

          </div>

        )}



        {/* --- TEAM GRID --- */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

          {[...coreTeam, ...semiCoreTeam].map((member, index) => (

            <AnimatedItem key={member.id || index} delay={index * 0.1}>

              <GlowCard>

                <div className="relative aspect-[4/5] w-full overflow-hidden mb-0">

                  <img

                    src={member.photo}

                    alt={member.name}

                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"

                  />

                </div>

                {/* pt-1: Minimal padding at top

                   -mt-1: Negative margin to pull the text area into the image space

                */}

                <CardContent className="text-center pt-1 pb-2 px-4 flex-grow flex flex-col -mt-1">

                  <h3 className="text-xl font-bold text-white leading-tight">{member.name}</h3>

                  <p className="text-[#64FFDA] font-semibold text-xs mt-0.5 uppercase tracking-wide">

                    {member.role}

                  </p>

                  <div className="mt-3 mb-1 flex justify-center">

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



export default TeamSection