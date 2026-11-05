import React, { useState } from 'react';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projects';

interface NavbarProps {
  onOpenEstimateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areaDropdown, setAreaDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Header Row - White with Logo Emblem in Center */}
      <div className="bg-white border-b border-stone-200 px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Schedule Service Button */}
          <div className="hidden md:flex items-center">
            <button
              type="button"
              onClick={onOpenEstimateModal}
              className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>SCHEDULE A SERVICE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Center: Brand Badge / Shield Logo */}
          <a href="#" className="flex flex-col items-center group">
            <div className="relative flex flex-col items-center">
              <span className="text-[13px] sm:text-sm font-extrabold tracking-[0.2em] text-stone-900 uppercase font-heading">
                QUALITY
              </span>
              <div className="bg-stone-900 border-2 border-amber-400 px-4 sm:px-6 py-0.5 rounded-md shadow-sm -mt-0.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-amber-400 uppercase font-heading drop-shadow-sm">
                  FENCE WORKS
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.25em] text-stone-600 uppercase mt-0.5">
                LLC · NORTHERN VIRGINIA
              </span>
            </div>
          </a>

          {/* Right: Phone Number Pill Button */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs sm:text-sm font-black transition-colors flex items-center gap-2 shadow-sm font-mono"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-stone-950" />
              <span>{COMPANY_INFO.phoneFormatted}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-800 hover:text-stone-950 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Navigation Row - Dark Charcoal Bar */}
      <div className="bg-[#18181B] text-white hidden lg:block border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-center gap-8 py-2.5 text-xs font-semibold tracking-wide uppercase">
            <a href="#" className="text-white hover:text-amber-400 transition-colors py-1">
              Home
            </a>
            <a href="#about" className="text-stone-300 hover:text-amber-400 transition-colors py-1">
              About Us
            </a>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                className="text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>Our Services</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-stone-900 border border-stone-800 rounded-md shadow-xl py-2 z-50 text-xs normal-case font-medium">
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    PVC Vinyl Privacy
                  </a>
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Custom Wood & Shadowbox
                  </a>
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Estate 4-Board & Dog Mesh
                  </a>
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Ornamental Black Aluminum
                  </a>
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Chain Link Systems
                  </a>
                  <a href="#services" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Custom Decks & Patios
                  </a>
                </div>
              )}
            </div>

            {/* Service Area Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setAreaDropdown(true)}
              onMouseLeave={() => setAreaDropdown(false)}
            >
              <a
                href="#service-area"
                className="text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                <span>Services Area</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </a>

              {areaDropdown && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-stone-900 border border-stone-800 rounded-md shadow-xl py-2 z-50 text-xs normal-case font-medium">
                  <a href="#service-area" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Fairfax County
                  </a>
                  <a href="#service-area" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Loudoun County
                  </a>
                  <a href="#service-area" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Prince William County
                  </a>
                  <a href="#service-area" className="block px-4 py-2 text-stone-300 hover:bg-stone-800 hover:text-amber-400">
                    Arlington & Alexandria
                  </a>
                </div>
              )}
            </div>

            <a href="#portfolio" className="text-stone-300 hover:text-amber-400 transition-colors py-1">
              Our Projects
            </a>
            <a href="#process" className="text-stone-300 hover:text-amber-400 transition-colors py-1">
              How It Works
            </a>
            <a href="#estimator" className="text-stone-300 hover:text-amber-400 transition-colors py-1">
              Cost Estimator
            </a>
            <a href="#contact" className="text-stone-300 hover:text-amber-400 transition-colors py-1">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-900 text-white border-t border-stone-800 px-6 py-5">
          <div className="flex flex-col gap-3.5 text-sm font-semibold">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Our Services
            </a>
            <a
              href="#service-area"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Services Area
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Our Projects
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              How It Works
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Instant Cost Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400"
            >
              Contact Antonio
            </a>

            <div className="pt-3 border-t border-stone-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimateModal();
                }}
                className="w-full py-3 rounded-full bg-amber-500 text-stone-950 font-bold uppercase text-xs"
              >
                Schedule A Service ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
