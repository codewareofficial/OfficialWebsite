import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const hideTimerRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
      if (latest > 100) {
        hideTimerRef.current = setTimeout(() => {
          setHidden(true);
        }, 5000);
      }
    }
  });

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#who-we-are" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Join", path: "/join" },
    { name: "Connect", path: "/#connect" }, // Updated from #footer to #connect
  ];

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const [route, hash] = path.split("#");

      // If we are already on the route (Home), just scroll
      if (location.pathname === (route || "/")) {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If we are on a different page (like /team), navigate first
        navigate(route || "/");
        // Wait for page load before scrolling
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 z-[100] w-full border-b border-[#448AFF]/30 bg-neutral-950/80 backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-4 h-24 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Codeware Logo"
            className="h-14 w-auto object-contain transition duration-300 drop-shadow-[0_0_12px_rgba(100,255,218,0.25)] group-hover:drop-shadow-[0_0_18px_rgba(100,255,218,0.5)]"
          />
        </Link>

        <nav className="hidden md:flex gap-10 items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`relative text-base font-medium transition-all duration-300 ${isActive ? "text-[#64FFDA]" : "text-[#29B6F6]"} hover:text-[#64FFDA]`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-[#29B6F6]/40 text-[#29B6F6] hover:bg-[#448AFF]/10">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-neutral-950 border-l border-[#448AFF]/30 text-white">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      handleNavClick(link.path);
                    }}
                    className="text-xl font-medium text-left text-[#29B6F6] hover:text-[#64FFDA] transition"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;