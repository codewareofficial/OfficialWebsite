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
    { name: "Connect", path: "/connect" },
  ];

  const handleNavClick = (path) => {
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      navigate(route);
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Codeware
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className="text-sm font-medium transition hover:text-primary cursor-pointer"
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
                  <button key={link.name} onClick={() => handleNavClick(link.path)} className="text-lg font-medium text-left">
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
