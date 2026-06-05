import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Greenbird Network Solutions — New Jersey IT Company',
  description: 'Learn about Greenbird Network Solutions, a New Jersey-based IT consulting company specializing in networking for small businesses, churches, and medical offices. Honest pricing, quality work, and local expertise.',
  keywords: 'about Greenbird Network Solutions, New Jersey IT company, local IT consulting NJ, small business networking NJ, church IT solutions, medical office network',
  openGraph: {
    title: 'About Greenbird Network Solutions | NJ IT Consulting',
    description: 'New Jersey-based IT experts helping small businesses, churches, and medical offices build reliable networks. Honest pricing, quality installations, ongoing support.',
    type: 'website',
  },
};

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We give honest assessments and fair pricing. No unnecessary upsells.' },
  { icon: '🔧', title: 'Quality Work', desc: 'We take pride in clean, professional installations that are built to last.' },
  { icon: '💬', title: 'Clear Communication', desc: 'We explain everything in plain English — no tech jargon required.' },
  { icon: '⚡', title: 'Reliability', desc: 'We show up on time, finish the job, and stand behind our work.' },
];

const clients = [
  { icon: '🏢', label: 'Small Businesses', desc: 'Retail stores, offices, restaurants, and more across New Jersey.' },
  { icon: '⛪', label: 'Churches', desc: 'Houses of worship of all sizes and denominations.' },
  { icon: '🏥', label: "Doctor's Offices", desc: 'Medical practices, clinics, and healthcare facilities.' },
  { icon: '🏫', label: 'Schools & Nonprofits', desc: 'Educational institutions and community organizations.' },
];

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">About Greenbird Network Solutions</h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          A New Jersey IT company built on honesty, quality, and genuine care for the businesses we serve.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] mb-6 text-center">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At Greenbird Network Solutions, we believe every business — regardless of size — deserves a reliable, professional network. Too many small businesses, churches, and medical offices across New Jersey are running on outdated, patched-together systems that cost them time and money every single day.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We exist to change that. We bring enterprise-level IT expertise to organizations that do not have an in-house IT department, at prices that actually make sense.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From pulling a single cable to designing a full network infrastructure — we handle it all so you can focus on what matters most: running your organization.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-green-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] text-center mb-3">What We Stand For</h2>
          <p className="text-gray-500 text-center mb-10">These are the principles that guide every project we take on.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3" role="img" aria-label={v.title}>{v.icon}</div>
                <h3 className="text-lg font-bold text-[#2e7d32] mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] text-center mb-3">Who We Serve in New Jersey</h2>
          <p className="text-gray-500 text-center mb-10">We have deep experience working with these types of organizations across New Jersey.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clients.map((c) => (
              <div key={c.label} className="flex items-start gap-4 border border-green-100 rounded-xl p-6 hover:border-green-300 hover:shadow transition-all">
                <span className="text-4xl" role="img" aria-label={c.label}>{c.icon}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1b5e20] mb-1">{c.label}</h3>
                  <p className="text-sm text-gray-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b5e20] text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Let Us Earn Your Trust</h2>
        <p className="text-green-100 mb-2">We are proud to serve businesses and organizations across New Jersey.</p>
        <p className="text-green-200 text-sm mb-6">Reach out today for a free, no-pressure consultation.</p>
        <Link href="/contact" className="bg-white text-[#1b5e20] font-bold px-10 py-3 rounded-lg hover:bg-green-100 transition-colors text-lg">
          Contact Us Today
        </Link>
      </section>
    </div>
  );
}
