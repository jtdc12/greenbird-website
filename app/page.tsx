import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenbird Network Solutions | IT & Networking for Small Businesses in New Jersey',
  description: 'Greenbird Network Solutions provides professional IT and networking services in New Jersey — including network cabling, WiFi, security cameras, VoIP phones, and smart door access for small businesses, churches, and medical offices.',
  keywords: 'IT consulting New Jersey, network cabling NJ, WiFi installation, security cameras, VoIP phone systems, small business IT, church network solutions, medical office IT',
  openGraph: {
    title: 'Greenbird Network Solutions | New Jersey IT & Networking',
    description: 'We handle IT so you can handle business. Professional network solutions for small businesses, churches, and medical offices in New Jersey.',
    type: 'website',
  },
};

const services = [
  { icon: '🔌', title: 'Network Cabling', desc: 'Professional cable installation for phones, internet, and more — done right the first time.' },
  { icon: '📶', title: 'WiFi Solutions', desc: 'Reliable, high-speed wireless coverage for your entire space — no dead zones.' },
  { icon: '📷', title: 'Security Cameras', desc: 'IP camera systems to keep your business, church, or office safe and monitored.' },
  { icon: '📞', title: 'VoIP Phone Systems', desc: 'Modern phone systems that save money and scale with your business.' },
  { icon: '🔒', title: 'Smart Door Access', desc: 'Network-based door lock systems for secure, controlled access to your facility.' },
  { icon: '🛠️', title: 'IT Consulting', desc: 'Expert advice and planning so your network works exactly the way you need it to.' },
];

const clients = [
  { icon: '🏢', label: 'Small Businesses' },
  { icon: '⛪', label: 'Churches' },
  { icon: '🏥', label: "Doctor's Offices" },
  { icon: '🏫', label: 'Schools & Nonprofits' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            We Handle <span className="text-green-300">IT</span> So You Can Handle Business.
          </h1>
          <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Greenbird Network Solutions delivers professional IT and networking services across New Jersey — helping small businesses, churches, and medical offices build reliable, affordable networks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#1b5e20] font-bold px-8 py-3 rounded-lg hover:bg-green-100 transition-colors text-lg">
              Get a Free Quote
            </Link>
            <Link href="/services" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#1b5e20] transition-colors text-lg">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-green-50 py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1b5e20] mb-2">Who We Serve</h2>
          <p className="text-gray-600 mb-8">We specialize in New Jersey organizations that need reliable networks but do not have in-house IT staff.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((c) => (
              <div key={c.label} className="bg-white rounded-xl shadow p-6 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
                <span className="text-4xl" role="img" aria-label={c.label}>{c.icon}</span>
                <h3 className="text-sm font-semibold text-[#2e7d32]">{c.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <span className="text-5xl mb-4 block">🏠</span>
            <h2 className="text-3xl font-bold text-[#1b5e20] mb-3">We Also Serve Homeowners</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              It is not just businesses — we bring the same professional quality right to your home. Whether you need faster WiFi, a Ring or Nest security system installed, smart home setup, or a home office network, Greenbird Network Solutions has you covered.
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6 inline-block text-left">
              {[
                '📶 Whole-home WiFi & mesh networks',
                '🔔 Ring & Google Nest installation',
                '📷 Home security cameras',
                '💼 Home office networking',
                '🏡 Smart home device setup',
              ].map(item => (
                <li key={item} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
              ))}
            </ul>
            <div className="mt-2">
              <Link href="/residential" className="bg-[#2e7d32] text-white font-bold px-8 py-3 rounded-lg hover:bg-[#1b5e20] transition-colors inline-block">
                View Residential Services
              </Link>
            </div>
          </div>
          <div className="flex-1 bg-green-50 rounded-2xl p-8 border border-green-100 text-center">
            <h3 className="text-xl font-bold text-[#1b5e20] mb-2">Making IT Simple at Home</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Technology should make your life easier — not more complicated. We set everything up correctly the first time, explain how it works in plain English, and make sure you are comfortable before we leave.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                { icon: '🗓️', label: 'Flexible Scheduling' },
                { icon: '💬', label: 'Plain English' },
                { icon: '🚗', label: 'We Come to You' },
                { icon: '✅', label: 'Free Quotes' },
              ].map(item => (
                <div key={item.label} className="bg-white rounded-xl p-3 shadow-sm flex flex-col items-center gap-1">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[#2e7d32] font-semibold text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1b5e20] mb-2">Our IT & Networking Services</h2>
            <p className="text-gray-500">End-to-end network solutions for New Jersey businesses — from planning to installation to ongoing support.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-green-100 rounded-xl p-6 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="text-4xl mb-3" role="img" aria-label={s.title}>{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1b5e20] mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="bg-[#2e7d32] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#1b5e20] transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#1b5e20] text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2">Why Choose Greenbird Network Solutions?</h2>
          <p className="text-green-200 mb-10">New Jersey businesses trust us for our expertise, honesty, and long-term support.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '✅', title: 'Local & Trusted in New Jersey', desc: 'We are based in New Jersey and invested in your success.' },
              { icon: '💡', title: 'Tailored IT Solutions', desc: 'No one-size-fits-all. We design the right network for your needs and budget.' },
              { icon: '🤝', title: 'Ongoing IT Support', desc: 'We are here after installation — not just when something breaks.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <span className="text-5xl" role="img" aria-label={item.title}>{item.icon}</span>
                <h3 className="text-xl font-bold text-green-300">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-green-50 py-14 px-4 text-center">
        <h2 className="text-3xl font-bold text-[#1b5e20] mb-3">Ready to Upgrade Your Network in New Jersey?</h2>
        <p className="text-gray-600 mb-6">Contact us today for a free consultation and quote. No pressure, no jargon — just honest IT advice.</p>
        <Link href="/contact" className="bg-[#2e7d32] text-white font-bold px-10 py-3 rounded-lg hover:bg-[#1b5e20] transition-colors text-lg">
          Get Started Today
        </Link>
      </section>
    </div>
  );
}
