import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#who-we-are" },
    { name: "Events", path: "/events" },
    { name: "Team", path: "/team" },
    { name: "Join", path: "/join" },
    { name: "Connect", path: "/#footer" },
  ];

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      navigate(route || "/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(path);
    }
  };

  return (
    // Updated: Border uses Royal Blue (#448AFF)
    <header className="sticky top-0 z-50 w-full border-b border-[#448AFF]/30 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 h-24 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <img
            src="/images/logo.png"
            alt="Codeware Logo"
            // Updated: Drop shadow uses Mint Green (#64FFDA / RGB: 100,255,218)
            className="h-14 w-auto object-contain transition duration-300
                       drop-shadow-[0_0_12px_rgba(100,255,218,0.25)]
                       group-hover:drop-shadow-[0_0_18px_rgba(100,255,218,0.5)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={`
                  relative text-sm font-medium transition-all duration-300
                  ${isActive ? "text-[#64FFDA]" : "text-[#29B6F6]"}
                  hover:text-[#64FFDA]
                `}
                // Above: Active is Mint, Default is Sky Blue, Hover is Mint
              >
                <span className="relative z-10">{link.name}</span>

                {/* Glow underline */}
                <span
                  className="
                    absolute left-0 -bottom-1 h-[2px] w-0 bg-[#64FFDA]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                // Updated: Border/Text Sky Blue, Hover bg Royal Blue tint
                className="border-[#29B6F6]/40 text-[#29B6F6] hover:bg-[#448AFF]/10"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            {/* Updated: Sheet Border uses Royal Blue */}
            <SheetContent className="bg-neutral-950 border-l border-[#448AFF]/30">
              <div className="flex flex-col gap-6 mt-10">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    // Updated: Text Sky Blue, Hover Mint Green
                    className="text-lg font-medium text-[#29B6F6] hover:text-[#64FFDA] transition"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;