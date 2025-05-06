"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { FaKaaba } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const getNavLink = (item: string) => {
    switch (item) {
      case 'Beranda':
        return { href: '/#beranda', id: 'beranda' };
      case 'Paket Haji & Umroh':
        return { href: '/#paket-haji-umroh', id: 'paket-haji-umroh' };
      case 'Galeri':
        return { href: '/galeri', id: '' };
      case 'Tentang':
        return { href: '/#tentang', id: 'tentang' };
      default:
        return { href: '/', id: '' };
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-10px_rgba(0,0,0,0.1)] h-16' 
        : 'bg-white h-20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo dengan animasi scroll */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
            onClick={(e) => handleNavClick(e, 'beranda')}
          >
            <div className="relative flex items-center">
              <div className="absolute -inset-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md"></div>
              <FaKaaba className={`relative transform transition-all duration-500 text-green-600 group-hover:rotate-12 ${
                scrolled ? 'w-8 h-8' : 'w-10 h-10'
              }`} />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent transition-all duration-500 leading-tight ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}>
                Grasindo Travel
              </span>
              <span className={`text-green-600 font-medium transition-all duration-500 leading-tight ${
                scrolled ? 'text-[10px]' : 'text-xs'
              }`}>
                Melayani dengan Amanah
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Beranda', 'Paket Haji & Umroh', 'Galeri', 'Tentang'].map((item) => {
              const { href, id } = getNavLink(item);
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={(e) => id ? handleNavClick(e, id) : undefined}
                  className="relative group text-gray-600 hover:text-green-600 transition-colors duration-300 py-2"
                >
                  <span className="relative z-10 font-medium">{item}</span>
                  <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gradient-to-r from-green-600 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              );
            })}

            {/* Action Buttons dengan animasi yang lebih mantap */}
            <div className="flex items-center space-x-3">
              {/* Login Button dengan animasi baru */}
              <a 
              href="https://portal.grasindotravel.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center overflow-hidden rounded-full border-2 border-green-500 px-5 py-2 focus:outline-none focus:ring active:bg-green-50"
            >
              <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              <span className="relative flex items-center justify-center gap-2 text-green-600 transition-colors duration-300 group-hover:text-white">
                <User size={18} className="transition-transform duration-300 group-hover:scale-110" />
                <span className="font-medium">Registrasi</span>
              </span>
            </a>


              {/* Konsultasi Button dengan efek hover yang lebih smooth */}
              <Link 
                href="https://wa.me/628123456789?text=Halo%2C%20saya%20mau%20bertanya%20tentang%20Grasindo%20Travel" 
                className="group relative inline-flex items-center overflow-hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-2 transition-all duration-300 hover:shadow-[0_5px_15px_-3px_rgba(34,197,94,0.4)] hover:-translate-y-0.5"
              >
                <span className="relative font-medium text-white">Konsultasi</span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg text-green-600 hover:bg-green-50 transition-colors ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu dengan animasi slide */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slideDown">
            <div className="flex flex-col space-y-4 px-4 py-6">
              {['Beranda', 'Paket Haji & Umroh', 'Galeri', 'Tentang'].map((item) => {
                const { href, id } = getNavLink(item);
                return (
                  <Link
                    key={item}
                    href={href}
                    onClick={(e) => id ? handleNavClick(e, id) : undefined}
                    className="text-gray-600 hover:text-green-600 hover:translate-x-2 transition-all duration-300 font-medium"
                  >
                    {item}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col space-y-3">
                <Link
                  href="https://portal.grasindotravel.id/"
                  className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={18} />
                  <span>Login</span>
                </Link>
                <Link
                  href="https://wa.me/628123456789?text=Halo%2C%20saya%20mau%20bertanya%20tentang%20Grasindo%20Travel"
                  className="flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Konsultasi
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}