import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pb-12 pt-8 border-t border-[#448AFF]/20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

        {/* Logo & Tagline */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-bold group inline-block">
            CodeWare<span className="text-[#64FFDA] group-hover:animate-pulse">.</span>
          </Link>
          <p className="text-neutral-400 mt-2 text-sm">
            Where Coders Compete, Build, and Grow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium text-neutral-400">
          <Link to="/" className="hover:text-[#64FFDA] transition-colors duration-300">Home</Link>
          <Link to="/about" className="hover:text-[#64FFDA] transition-colors duration-300">About</Link>
          <Link to="/events" className="hover:text-[#64FFDA] transition-colors duration-300">Events</Link>
          <Link to="/team" className="hover:text-[#64FFDA] transition-colors duration-300">Team</Link>
          {/* Connect link scrolls to top of this section usually, or we can remove it since the icons are right above */}
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500 text-xs">
        © {new Date().getFullYear()} CodeWare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;