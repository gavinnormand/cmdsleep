import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, X } from "lucide-react";
import Menu from "./menu";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {/* Desktop nav bar */}
      <div className="sticky top-0 hidden items-center justify-between bg-white px-8 py-4 lg:flex">
        <Link to="/">
          <img src="/cmdsleepLogo.png" className="h-12"></img>
        </Link>
        <div className="inline-flex space-x-4 text-lg">
          <Link to="/sleep-doctors" className="hover:underline">
            Sleep Doctors
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/sleep-disorders" className="hover:underline">
            Sleep Disorders
          </Link>
          <Link to="/patient-portal" className="hover:underline">
            Patient Portal
          </Link>
          <Link to="/forms" className="hover:underline">
            Forms
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
      <div className="bg-menus dark:bg-menus-dark grid grid-cols-2 justify-between px-6 py-6 lg:hidden">
        <button
          className="text-icon hover:text-icon-hover"
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
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </nav>
  );
}

export default Nav;
