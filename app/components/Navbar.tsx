'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog & FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1b5e20] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 55" width="210" height="55">
            {/* Bird */}
            <g transform="translate(4,2) scale(0.42)">
              <path d="M 60 80 C 30 55, 5 65, 0 50 C 15 40, 45 42, 65 60 C 75 40, 90 20, 120 15 C 105 35, 95 55, 85 75 C 100 65, 118 60, 130 65 C 115 72, 95 78, 80 90 C 78 100, 72 108, 60 112 C 55 100, 55 90, 60 80 Z" fill="#a5d6a7"/>
              <path d="M 65 60 C 75 40, 90 20, 120 15 C 105 35, 95 55, 85 75 C 80 68, 72 63, 65 60 Z" fill="#c8e6c9"/>
              <circle cx="58" cy="72" r="10" fill="#81c784"/>
              <circle cx="55" cy="69" r="3" fill="white"/>
              <circle cx="54" cy="69" r="1.5" fill="#1b5e20"/>
              <polygon points="48,70 42,67 48,74" fill="#f9a825"/>
              <circle cx="120" cy="15" r="4" fill="#e8f5e9" opacity="0.9"/>
              <circle cx="130" cy="65" r="4" fill="#e8f5e9" opacity="0.9"/>
              <circle cx="0"   cy="50" r="4" fill="#e8f5e9" opacity="0.9"/>
              <circle cx="60"  cy="112" r="4" fill="#e8f5e9" opacity="0.9"/>
            </g>
            {/* Text */}
            <text x="62" y="22" fontSize="15" fontWeight="700" fill="white" fontFamily="Segoe UI, Arial, sans-serif" letterSpacing="0.5">Greenbird</text>
            <text x="62" y="36" fontSize="7.5" fontWeight="400" fill="#a5d6a7" fontFamily="Segoe UI, Arial, sans-serif" letterSpacing="1.5">NETWORK SOLUTIONS</text>
            <line x1="58" y1="10" x2="58" y2="45" stroke="#4caf50" strokeWidth="1"/>
          </svg>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide hover:text-green-300 transition-colors ${
                pathname === link.href ? 'text-green-300 border-b-2 border-green-300 pb-0.5' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2e7d32] px-4 pb-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-1 ${pathname === link.href ? 'text-green-300' : 'text-white'}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
