import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ["About", "Blog", "Careers", "Press"],
    Services: ["Web Development", "Mobile Apps", "Backend", "DevOps"],
    Resources: ["Documentation", "API Docs", "Guides", "Support"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer className="relative bg-slate-900/50 border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              Codeware
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Building extraordinary digital solutions for innovative companies.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 hover:border-purple-500/50 transition-all flex items-center justify-center text-gray-400 hover:text-purple-400"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-purple-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Codeware. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
