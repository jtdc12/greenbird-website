import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IT & Networking Services in New Jersey | Greenbird Network Solutions',
  description: 'Explore our full range of IT and networking services in New Jersey — network cabling, WiFi installation, IP security cameras, VoIP phone systems, smart door access, and IT consulting for small businesses, churches, and medical offices.',
  keywords: 'network cabling New Jersey, WiFi installation NJ, security camera installation, VoIP phone systems NJ, smart door access, IT consulting small business, church network, medical office networking',
  openGraph: {
    title: 'IT & Networking Services | Greenbird Network Solutions NJ',
    description: 'Professional network cabling, WiFi, cameras, VoIP, and smart access solutions for New Jersey businesses, churches, and medical offices.',
    type: 'website',
  },
};

const services = [
  {
    icon: '🔌',
    title: 'Network Cabling',
    desc: 'We pull Cat5e, Cat6, and Cat6A cables for phones, internet, and data throughout your building. Whether it\'s a single office or an entire facility, we plan and execute clean, organized installations that are built to last.',
    details: ['Structured cabling installation', 'Cat5e / Cat6 / Cat6A runs', 'Cable management & labeling', 'Testing & certification'],
  },
  {
    icon: '📶',
    title: 'WiFi Solutions',
    desc: 'Poor WiFi kills productivity. We design and install enterprise-grade wireless networks that cover every corner of your space — lobbies, back offices, warehouses, sanctuaries, and exam rooms alike.',
    details: ['Site surveys & coverage planning', 'Access point installation', 'Guest network setup', 'Ongoing monitoring'],
  },
  {
    icon: '📷',
    title: 'Security Camera Installation',
    desc: 'Protect your people, property, and assets with a professional IP camera system. We install indoor and outdoor cameras with remote viewing capabilities so you always know what\'s happening.',
    details: ['IP & PoE camera installation', 'NVR / DVR setup', 'Remote viewing setup', 'Indoor & outdoor systems'],
  },
  {
    icon: '📞',
    title: 'VoIP Phone Systems',
    desc: 'Upgrade from outdated phone systems to modern VoIP solutions that work over your network. Save money on phone bills, add features like voicemail-to-email, and scale easily as you grow.',
    details: ['VoIP system setup & configuration', 'Network phone cabling', 'Auto-attendant & voicemail', 'Number porting assistance'],
  },
  {
    icon: '🔒',
    title: 'Smart Door Access Control',
    desc: 'Control who enters your facility with network-based smart lock and access control systems. Perfect for churches managing multiple entrances, medical offices protecting patient areas, or businesses securing server rooms.',
    details: ['Keycard & keypad systems', 'Network door lock installation', 'Access scheduling & logs', 'Multi-door solutions'],
  },
  {
    icon: '🛠️',
    title: 'IT Consulting',
    desc: 'Not sure what your network needs? We sit down with you, assess your current setup, and create a clear plan that fits your goals and budget. No upsells, no jargon — just honest advice.',
    details: ['Network assessment', 'Technology planning', 'Vendor recommendations', 'Budget-conscious solutions'],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">IT & Networking Services in New Jersey</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto">
          Everything your business needs to build, maintain, and grow a reliable network — all under one roof. Serving small businesses, churches, and medical offices across New Jersey.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1b5e20] text-center mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s) => (
              <div key={s.title} className="border border-green-100 rounded-2xl p-8 hover:shadow-xl hover:border-green-300 transition-all">
                <div className="text-5xl mb-4" role="img" aria-label={s.title}>{s.icon}</div>
                <h2 className="text-2xl font-bold text-[#1b5e20] mb-3">{s.title}</h2>
                <p className="text-gray-600 mb-5 leading-relaxed">{s.desc}</p>
                <h3 className="text-sm font-semibold text-[#2e7d32] uppercase tracking-wide mb-2">What's Included</h3>
                <ul className="space-y-2">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-green-500 font-bold">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b5e20] text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Not Sure What Your Business Needs?</h2>
        <p className="text-green-100 mb-2">We offer free consultations across New Jersey.</p>
        <p className="text-green-200 text-sm mb-6">Let us come take a look and give you a no-obligation quote — no pressure, no jargon.</p>
        <Link href="/contact" className="bg-white text-[#1b5e20] font-bold px-10 py-3 rounded-lg hover:bg-green-100 transition-colors text-lg">
          Request a Free Consultation
        </Link>
      </section>
    </div>
  );
}
