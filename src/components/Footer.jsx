import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        {/* Logo & Tagline */}
        <div>
          <Link to="/" className="text-2xl font-bold hover:text-primary transition">
            CodeWare
          </Link>
          <p className="text-neutral-400 mt-2">
            Where Coders Compete, Build, and Grow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row justify-end gap-6">
          <Link to="/" className="hover:text-primary transition">Home</Link>
          <Link to="/about" className="hover:text-primary transition">About</Link>
          <Link to="/projects" className="hover:text-primary transition">Projects</Link>
          <Link to="/team" className="hover:text-primary transition">Team</Link>
          <Link to="/connect" className="hover:text-primary transition">Connect</Link>
        </div>
      </div>

      <div className="mt-8 border-t border-neutral-800 pt-4 text-center text-neutral-500 text-sm">
        © 2026 CodeWare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
