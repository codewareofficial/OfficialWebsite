import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

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
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-primary" : "text-muted-foreground"
                } hover:text-primary`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button asChild>
            <Link to="/join">Join Us</Link>
          </Button>
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
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild>
                  <Link to="/join">Join Us</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
