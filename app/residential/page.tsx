import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Residential IT & Networking Services New Jersey | Greenbird Network Solutions',
  description: 'Greenbird Network Solutions provides professional home networking services in New Jersey — including WiFi setup, smart home devices, security cameras, home office networking, and more.',
  keywords: 'residential IT services New Jersey, home networking NJ, WiFi installation home, smart home setup NJ, home security cameras, home office network setup',
  openGraph: {
    title: 'Residential IT & Networking Services | Greenbird Network Solutions NJ',
    description: 'Professional home networking and IT services for New Jersey residents. WiFi, smart home, cameras, and more.',
    type: 'website',
  },
};

const services = [
  {
    icon: '📶',
    title: 'Home WiFi Setup & Optimization',
    desc: 'Say goodbye to dead zones and slow speeds. We design and install a home WiFi system that covers every room — bedrooms, basements, garages, and backyards.',
    details: ['Whole-home WiFi coverage', 'Mesh network installation', 'Router setup & configuration', 'Guest network setup'],
  },
  {
    icon: '📷',
    title: 'Home Security Cameras',
    desc: 'Keep an eye on your home, family, and property with a professional IP camera system. View live footage from your phone from anywhere in the world.',
    details: ['Indoor & outdoor cameras', 'Doorbell camera installation', 'Remote viewing setup', 'Night vision & motion alerts'],
  },
  {
    icon: '🔌',
    title: 'Home Network Cabling',
    desc: 'Need a wired connection for your TV, gaming setup, or home office? We run clean, professional network cables through your walls so you never have to deal with messy wires.',
    details: ['Cat6 cable runs', 'Wall plate installation', 'TV & gaming hardwiring', 'Clean in-wall routing'],
  },
  {
    icon: '🏠',
    title: 'Smart Home Device Setup',
    desc: 'From smart lights and thermostats to voice assistants and smart TVs — we set up and configure all your smart home devices so everything works together seamlessly.',
    details: ['Smart TV & streaming setup', 'Smart thermostat install', 'Voice assistant setup', 'Smart lighting & plugs'],
  },
  {
    icon: '💼',
    title: 'Home Office Networking',
    desc: 'Working from home? We set up a reliable, fast, and secure home office network so you can video call, share files, and stay productive without interruptions.',
    details: ['Dedicated work network', 'VPN setup', 'Printer & device setup', 'Video call optimization'],
  },
  {
    icon: '🔒',
    title: 'Home Network Security',
    desc: 'Protect your family and devices from hackers and threats. We secure your home network, set up firewalls, and make sure your personal data stays private.',
    details: ['Router security hardening', 'Firewall setup', 'Parental controls', 'Device security review'],
  },
  {
    icon: '🔔',
    title: 'Home Security Systems (Ring & Nest)',
    desc: 'We install and configure complete home security systems including Ring doorbells, Nest cameras, motion sensors, and smart alarms — so your home is protected and monitored 24/7.',
    details: ['Ring doorbell & camera install', 'Google Nest setup & config', 'Motion sensor placement', 'App setup & remote monitoring'],
  },
];

const faqs = [
  {
    q: 'Do you work on weekends?',
    a: 'Yes! We offer flexible scheduling including evenings and weekends to work around your schedule.',
  },
  {
    q: 'How long does a home WiFi installation take?',
    a: 'Most home WiFi jobs take 1–3 hours depending on the size of your home. We leave everything clean and working before we go.',
  },
  {
    q: 'Can you help with an existing setup that is not working?',
    a: 'Absolutely. We troubleshoot and fix existing networks, slow internet issues, and smart home problems.',
  },
  {
    q: 'Do I need to buy my own equipment?',
    a: 'No — we can source and supply all the equipment you need, or we can work with hardware you already own.',
  },
];

export default function ResidentialPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Residential IT & Networking Services</h1>
        <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
          Professional home networking, smart home setup, and security camera installation for New Jersey homeowners. We make technology simple.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-[#1b5e20] font-bold px-8 py-3 rounded-lg hover:bg-green-100 transition-colors text-lg">
            Get a Free Quote
          </Link>
          <a href="tel:+17324978917" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white hover:text-[#1b5e20] transition-colors text-lg">
            Call (732) 497-8917
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1b5e20] mb-4">Your Home, Connected the Right Way</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are dealing with slow WiFi, setting up a home office, installing security cameras, or getting your smart home devices to actually work — Greenbird Network Solutions is here to help. We bring the same professional quality we deliver to businesses right to your front door.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] text-center mb-3">What We Offer for Homeowners</h2>
          <p className="text-gray-500 text-center mb-10">From simple fixes to full home network buildouts — we handle it all.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="border border-green-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-300 transition-all">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#1b5e20] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
                <ul className="space-y-1">
                  {s.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-gray-600">
                      <span className="text-green-500 font-bold">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Need & Price */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1b5e20] mb-3">Solutions for Every Budget</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We don't believe in one-size-fits-all. Whether you want a simple, affordable fix or a premium full-home setup — we find the right solution for your needs and your wallet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Good */}
            <div className="border-2 border-green-100 rounded-2xl p-6 flex flex-col">
              <div className="bg-green-50 rounded-xl px-4 py-2 text-center mb-4">
                <span className="text-2xl">👍</span>
                <h3 className="text-lg font-bold text-[#2e7d32] mt-1">Good</h3>
                <p className="text-xs text-gray-500">Budget-Friendly Solutions</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">Great for renters, smaller homes, or anyone who just needs the basics working reliably. We use quality entry-level equipment that gets the job done without breaking the bank.</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {[
                  'Single router WiFi upgrade',
                  'Basic IP camera setup',
                  'Ring Video Doorbell (wired)',
                  'Standard network cabling',
                  'Simple smart home devices',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="text-green-400 font-bold">✓</span>{item}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-gray-400 italic">Best for: apartments, starter homes, renters</span>
              </div>
            </div>

            {/* Better */}
            <div className="border-2 border-[#2e7d32] rounded-2xl p-6 flex flex-col relative shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2e7d32] text-white text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
              <div className="bg-green-100 rounded-xl px-4 py-2 text-center mb-4">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-bold text-[#1b5e20] mt-1">Better</h3>
                <p className="text-xs text-gray-500">Mid-Range Solutions</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">The sweet spot for most homeowners. Better coverage, better cameras, and smarter devices — without going overboard. A great balance of quality and value.</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {[
                  'Mesh WiFi system (whole home)',
                  'Ring or Nest camera bundle',
                  'Smart thermostat installation',
                  'Home office network setup',
                  'Multi-room cabling',
                  'Parental controls & guest network',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-gray-400 italic">Best for: single-family homes, families</span>
              </div>
            </div>

            {/* Best */}
            <div className="border-2 border-green-100 rounded-2xl p-6 flex flex-col">
              <div className="bg-green-50 rounded-xl px-4 py-2 text-center mb-4">
                <span className="text-2xl">🏆</span>
                <h3 className="text-lg font-bold text-[#2e7d32] mt-1">Best</h3>
                <p className="text-xs text-gray-500">Premium Full-Home Solutions</p>
              </div>
              <p className="text-sm text-gray-600 mb-4">For homeowners who want the full experience — enterprise-grade WiFi, complete security systems, smart home automation, and everything integrated and working together seamlessly.</p>
              <ul className="space-y-2 text-sm text-gray-700 flex-1">
                {[
                  'Enterprise-grade WiFi (no dead zones)',
                  'Full Ubiquiti security system',
                  'Smart door locks & access control',
                  'Complete smart home integration',
                  'Structured in-wall cabling',
                  'Dedicated home office network',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span>{item}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <span className="text-xs text-gray-400 italic">Best for: larger homes, tech enthusiasts</span>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-10 bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-[#1b5e20] mb-2">Not sure which tier is right for you?</h3>
            <p className="text-gray-600 text-sm mb-4">That's exactly what our free consultation is for. We visit your home, listen to what you need, and recommend only what makes sense — no upselling, no pressure.</p>
            <Link href="/contact" className="bg-[#2e7d32] text-white font-bold px-8 py-2 rounded-lg hover:bg-[#1b5e20] transition-colors inline-block">
              Book a Free Home Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Ring & Nest Section */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1b5e20] mb-3">Ring & Nest Home Security Installation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We are experienced installers of today's most popular smart home security systems. Whether you want a single doorbell camera or a full home security setup, we've got you covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Ring */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🔔</span>
                <h3 className="text-2xl font-bold text-[#1b5e20]">Ring Security</h3>
              </div>
              <p className="text-gray-600 mb-5">Ring offers some of the most popular video doorbells and home security cameras on the market. We handle the full installation and setup so you are protected from day one.</p>
              <h4 className="text-sm font-semibold text-[#2e7d32] uppercase tracking-wide mb-3">What We Install</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Ring Video Doorbells', 'Ring Indoor & Outdoor Cameras', 'Ring Alarm Security System', 'Motion detector placement', 'Ring app setup & monitoring', 'Integration with Alexa & smart home'].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                ))}
              </ul>
            </div>

            {/* Nest */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏡</span>
                <h3 className="text-2xl font-bold text-[#1b5e20]">Google Nest Security</h3>
              </div>
              <p className="text-gray-600 mb-5">Google Nest combines smart home technology with powerful security features. From doorbell cameras to smart thermostats and smoke detectors, we set it all up for you.</p>
              <h4 className="text-sm font-semibold text-[#2e7d32] uppercase tracking-wide mb-3">What We Install</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {['Nest Doorbell Camera', 'Nest Indoor & Outdoor Cameras', 'Nest Thermostat', 'Nest Smoke & CO Detectors', 'Google Home app setup', 'Integration with Google Assistant'].map(item => (
                  <li key={item} className="flex items-center gap-2"><span className="text-green-500 font-bold">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why professional install */}
          <div className="mt-10 bg-[#1b5e20] text-white rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-green-300 mb-3">Why Not Just Do It Yourself?</h3>
            <p className="text-green-100 text-sm max-w-2xl mx-auto mb-4">DIY installs often result in poor camera angles, weak WiFi signal causing dropouts, incorrect wiring, and devices that never quite work right. We make sure everything is mounted correctly, connected to a strong signal, and fully configured — so it actually works when you need it most.</p>
            <Link href="/contact" className="bg-white text-[#1b5e20] font-bold px-8 py-2 rounded-lg hover:bg-green-100 transition-colors inline-block">
              Schedule a Security Install
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-[#1b5e20] text-white py-14 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why New Jersey Homeowners Choose Greenbird</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏡', title: 'We Come to You', desc: 'We travel to homes across New Jersey. No need to haul equipment anywhere — we handle everything on-site.' },
              { icon: '🗓️', title: 'Flexible Scheduling', desc: 'Evenings and weekends available. We work around your schedule, not the other way around.' },
              { icon: '💬', title: 'Plain English Explanations', desc: 'No tech jargon. We explain everything clearly so you know exactly what we did and why.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <span className="text-5xl">{item.icon}</span>
                <h3 className="text-xl font-bold text-green-300">{item.title}</h3>
                <p className="text-green-100 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] text-center mb-8">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
                <h3 className="font-bold text-[#1b5e20] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 text-center bg-white">
        <h2 className="text-3xl font-bold text-[#1b5e20] mb-3">Ready to upgrade your home network?</h2>
        <p className="text-gray-600 mb-6">Contact us today for a free, no-pressure quote. Serving homeowners across New Jersey.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#2e7d32] text-white font-bold px-10 py-3 rounded-lg hover:bg-[#1b5e20] transition-colors text-lg">
            Request a Free Quote
          </Link>
          <a href="tel:+17324978917" className="border-2 border-[#2e7d32] text-[#2e7d32] font-bold px-10 py-3 rounded-lg hover:bg-green-50 transition-colors text-lg">
            Call (732) 497-8917
          </a>
        </div>
      </section>
    </div>
  );
}
