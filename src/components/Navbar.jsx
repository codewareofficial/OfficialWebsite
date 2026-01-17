import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

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
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay to ensure element exists
    } else {
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-neutral-950/95 backdrop-blur border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <img
            src="/images/updatedlogo.png" // place your logo in public/images/logo.png
            alt="Codeware Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium text-neutral-300 transition hover:text-white cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-10">
                {links.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.path)}
                    className="text-lg font-medium text-left cursor-pointer"
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
