import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6 border-t border-[#448AFF]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Brand Identity */}
          <Link to="/" className="flex items-center group">
            <img src="/images/logo.png" alt="Logo" className="h-6 w-auto mr-2.5" />
            <span className="text-lg font-black italic tracking-tighter uppercase">
              CodeWare<span className="text-[#64FFDA]">.</span>
            </span>
          </Link>

          {/* Center: Empty (Removed the 2026 text that was clashing) */}

          {/* Right: Professional Legal Links */}
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.15em] font-bold text-neutral-400">
            <Link to="/privacy" className="hover:text-[#64FFDA] transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#64FFDA] transition-colors whitespace-nowrap">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;