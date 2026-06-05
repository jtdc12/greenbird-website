import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Greenbird Network Solutions — New Jersey IT Services',
  description: 'Contact Greenbird Network Solutions for a free IT and networking consultation in New Jersey. We serve small businesses, churches, and medical offices. Get a no-obligation quote today.',
  keywords: 'contact IT company New Jersey, free network consultation NJ, IT quote small business, networking services NJ, Greenbird Network Solutions contact',
  openGraph: {
    title: 'Contact Greenbird Network Solutions | Free IT Consultation NJ',
    description: 'Get a free, no-obligation IT and networking consultation from Greenbird Network Solutions. Serving small businesses, churches, and medical offices across New Jersey.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">Contact Greenbird Network Solutions</h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Ready to get started? Have a question about our New Jersey IT services? We would love to hear from you.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1b5e20] text-center mb-2">Request a Free Consultation</h2>
          <p className="text-gray-500 text-center mb-2">We serve small businesses, churches, doctor's offices, and organizations throughout New Jersey.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 text-center">
            <a href="tel:+17324978917" className="flex items-center justify-center gap-2 text-[#2e7d32] font-semibold hover:text-[#1b5e20] transition-colors">
              <span>📞</span> (732) 497-8917
            </a>
            <a href="mailto:john.greenbirdnetworksolutions@gmail.com" className="flex items-center justify-center gap-2 text-[#2e7d32] font-semibold hover:text-[#1b5e20] transition-colors break-all">
              <span>✉️</span> john.greenbirdnetworksolutions@gmail.com
            </a>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-lg font-bold text-[#1b5e20] mb-1">Free Consultations</h3>
            <p className="text-sm text-gray-600">No cost, no pressure. We assess your needs and give you an honest quote.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1b5e20] mb-1">Fast Response</h3>
            <p className="text-sm text-gray-600">We typically respond to all inquiries within 1 business day.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#1b5e20] mb-1">Serving All of New Jersey</h3>
            <p className="text-sm text-gray-600">We travel to businesses, churches, and offices across the state.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
