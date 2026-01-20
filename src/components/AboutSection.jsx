import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Trophy, Users, Layers, Zap } from "lucide-react";

/* ---------------- 1. CLEAN BRAND CONFIG (Untouched) ---------------- */
const brands = [
  { name: "Apple", slug: "apple", color: "#FFFFFF" },
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
  { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "GitHub", slug: "github", color: "#FFFFFF" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Rust", slug: "rust", color: "#FFA500" },
  { name: "Figma", slug: "figma", color: "#F24E1E" },
  { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
  { name: "Node.js", slug: "nodedotjs", color: "#339933" },
  { name: "Android", slug: "android", color: "#3DDC84" },
  { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
  { name: "Postman", slug: "postman", color: "#FF6C37" },
  { name: "AWS", slug: "amazonaws", color: "#FF9900" },
  { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
];

const techStack = [...brands, ...brands].slice(0, 31);

/* ---------------- 2. SMOOTH PHYSICS ENGINE (Untouched) ---------------- */
const FloatingBrandIcon = ({ brand }) => {
  const ref = useRef(null);
  const [glow, setGlow] = useState(false);
  const iconUrl = `https://cdn.simpleicons.org/${brand.slug}`;

  const pos = useRef({
    x: Math.random() * 80 + 10,
    y: Math.random() * 80 + 10,
    vx: (Math.random() * 0.7 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
    vy: (Math.random() * 0.7 + 0.5) * (Math.random() > 0.5 ? 1 : -1),
  });

  useEffect(() => {
    const el = ref.current;
    const parent = el.parentElement;
    let raf;
    const animate = () => {
      const p = pos.current;
      const bounds = parent.getBoundingClientRect();
      const iconSize = 32;
      p.x += p.vx; p.y += p.vy;
      let hit = false;
      if (p.x <= 0) { p.x = 0; p.vx *= -1; hit = true; }
      else if (p.x + iconSize >= bounds.width) { p.x = bounds.width - iconSize; p.vx *= -1; hit = true; }
      if (p.y <= 0) { p.y = 0; p.vy *= -1; hit = true; }
      else if (p.y + iconSize >= bounds.height) { p.y = bounds.height - iconSize; p.vy *= -1; hit = true; }
      if (hit) { setGlow(true); setTimeout(() => setGlow(false), 600); }
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div ref={ref} className="absolute top-0 left-0 will-change-transform pointer-events-none">
      <div
        style={{
          width: '32px', height: '32px',
          backgroundColor: glow ? brand.color : 'rgba(255,255,255,0.18)',
          WebkitMaskImage: `url(${iconUrl})`, maskImage: `url(${iconUrl})`,
          WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', maskSize: 'contain',
          transform: glow ? 'scale(1.2)' : 'scale(1)',
          transition: "background-color 0.2s ease, transform 0.2s ease",
        }}
      />
    </div>
  );
};

/* ---------------- 3. ABOUT SECTION ---------------- */
const AboutSection = () => {
  const cards = [
    {
      title: "Coding Contests",
      desc: "Regular high-stakes challenges designed to hone algorithmic logic and rapid execution under pressure.",
      icon: Trophy,
      label: "System.Acknowledge(Rank_Alpha)",
      id: "01",
      tag: "COMPETITIVE"
    },
    {
      title: "Mentorship",
      desc: "Direct sessions with domain chairpersons. We bypass theory to focus on professional deployment.",
      icon: Users,
      label: "Thread.Execute(Peer_to_Peer)",
      id: "02",
      tag: "ELITE_GUIDE"
    },
    {
      title: "Domain Cells",
      desc: "Specialized focus across Web3, AI/ML, iOS, and UI/UX led by active industry specialists.",
      icon: Layers,
      label: "Module.Init(Specialization)",
      id: "03",
      tag: "DEEP_TECH"
    },
    {
      title: "Core Stack",
      desc: "Leveraging React, Swift, Solidity, and PyTorch to build the next layer of digital existence.",
      icon: Zap,
      label: "Stack.Deploy(Next_Gen)",
      id: "04",
      tag: "PRODUCTION"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#050505] text-white py-24 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND PHYSICS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        {techStack.map((brand, i) => (
          <FloatingBrandIcon key={i} brand={brand} />
        ))}
      </div>

      {/* WATERMARK */}
      <div className="absolute top-10 right-[-5%] md:right-[10%] pointer-events-none select-none z-0 opacity-[0.08]">
        <motion.img
          src="/images/logo.png"
          alt="Club Logo"
          className="w-[35vw] h-auto object-contain"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="mb-24">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            className="h-[2px] bg-[#64FFDA] mb-8 shadow-[0_0_15px_#64FFDA]"
          />
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-6 leading-[0.85]">
            The <span className="text-[#64FFDA] drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">Collective</span><br/>Core.
          </h2>
          <p className="text-neutral-500 text-lg md:text-2xl font-light max-w-2xl tracking-tight leading-relaxed">
            Operating at the intersection of <span className="text-white">high-performance engineering</span> and industry-standard architecture.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(100, 255, 218, 0.02)" }}
              className="group relative bg-[#080808] p-10 md:p-14 overflow-hidden transition-all duration-500"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-4 right-4 w-[1px] h-4 bg-white/10 group-hover:bg-[#64FFDA] transition-colors" />
                <div className="absolute top-4 right-4 w-4 h-[1px] bg-white/10 group-hover:bg-[#64FFDA] transition-colors" />
              </div>

              {/* Card Index */}
              <span className="absolute top-8 left-10 font-mono text-[10px] text-neutral-800 group-hover:text-neutral-500 transition-colors">
                // {card.id}
              </span>

              <div className="relative z-10">
                <div className="flex justify-between items-end mb-16">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#64FFDA]/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700" />
                    <card.icon size={32} strokeWidth={1} className="text-[#64FFDA] relative z-10 transition-transform duration-500 group-hover:-translate-y-1" />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-600 border border-white/10 px-2 py-1 uppercase">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase mb-4 tracking-tighter group-hover:text-[#64FFDA] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-[85%] font-light transition-colors group-hover:text-neutral-300">
                  {card.desc}
                </p>

                <div className="mt-16 flex items-center justify-between">
                   <div className="font-mono text-[10px] text-neutral-600 flex flex-col uppercase">
                     <span className="text-[8px] opacity-50 mb-1">Status: Active</span>
                     <span className="group-hover:text-white transition-colors">{card.label}</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="h-[1px] w-8 bg-neutral-800 group-hover:w-12 group-hover:bg-[#64FFDA] transition-all duration-500" />
                      <ArrowUpRight size={20} className="text-neutral-700 group-hover:text-white transition-all transform group-hover:rotate-45" />
                   </div>
                </div>
              </div>

              {/* Subtle Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#64FFDA 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;