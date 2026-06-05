import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1b5e20] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-green-300 mb-2">Greenbird Network Solutions</h3>
          <p className="text-sm text-green-100 leading-relaxed">
            We handle IT so you can handle business. Reliable network solutions for small businesses, churches, and medical offices.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>
              <a href="mailto:john.greenbirdnetworksolutions@gmail.com" className="hover:text-white transition-colors break-all">
                john.greenbirdnetworksolutions@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+17324978917" className="hover:text-white transition-colors">
                (732) 497-8917
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
            <li><Link href="/residential" className="hover:text-white transition-colors">Residential</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog & FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold text-green-300 uppercase tracking-wide mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm text-green-100">
            <li>Network Cabling</li>
            <li>WiFi Solutions</li>
            <li>Security Cameras</li>
            <li>VoIP Phone Systems</li>
            <li>Smart Door Access</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-700 py-4 text-center text-xs text-green-400">
        © {new Date().getFullYear()} Greenbird Network Solutions. All rights reserved.
      </div>
    </footer>
  );
}
