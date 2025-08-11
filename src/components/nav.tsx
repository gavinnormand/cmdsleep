import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import Menu from "./menu";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <p className="text-center">In business since 2009 ~ Licensed by the State of New Jersey and Accreditate with AASM</p>
      {/* Desktop nav bar */}
      <div className="hidden items-center justify-between px-8 py-4 xl:flex">
        <Link to="/">
          <img src="/cmdsleepLogo.png" className="h-12"></img>
        </Link>
        <div className="inline-flex space-x-4 text-lg">
          <Link to="/patient-portal" className="hover:underline">
            Patient Portal
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/sleep-disorders" className="hover:underline">
            Sleep Disorders
          </Link>
          <Link to="/treatments" className="hover:underline">
            Treatments
          </Link>
          <Link to="/forms" className="hover:underline">
            Forms
          </Link>
          <Link to="/sleep-doctors" className="hover:underline">
            Doctors
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
          <Link to="/directions" className="hover:underline">
            Directions
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="grid grid-cols-[1fr_20fr_1fr] justify-between px-6 py-4 xl:hidden">
        <div className="flex items-center">
        <button
          className="text-icon hover:text-icon-hover cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <MenuIcon className="h-8 w-8" />
          )}
        </button>
        </div>
        <Link to="/" className="flex items-center justify-center">
          <img src="/cmdsleepLogo.png" className="h-12 object-contain"></img>
        </Link>
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Nav;
