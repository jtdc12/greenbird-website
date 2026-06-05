import type { Metadata } from 'next';
import FAQList from './FAQList';

export const metadata: Metadata = {
  title: 'IT & Networking FAQ | Greenbird Network Solutions New Jersey',
  description: 'Get answers to the most common questions about IT and networking services for New Jersey businesses. Learn about network cabling, WiFi, VoIP phones, security cameras, smart door access, and more.',
  keywords: 'IT FAQ New Jersey, networking questions small business, what is VoIP, network cabling explained, WiFi for business NJ, security camera FAQ, IT consulting FAQ NJ',
  openGraph: {
    title: 'IT & Networking FAQ | Greenbird Network Solutions NJ',
    description: 'Answers to the most common IT and networking questions for New Jersey small businesses, churches, and medical offices.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1b5e20] to-[#2e7d32] text-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-3">IT & Networking FAQ</h1>
        <p className="text-green-100 text-lg max-w-xl mx-auto">
          Straightforward answers to the questions New Jersey businesses ask us most — no jargon, just clarity.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1b5e20] text-center mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mb-10">
            Have a question that is not listed here?{' '}
            <a href="/contact" className="text-green-600 underline hover:text-green-800">Contact us</a>{' '}
            and we will be happy to help.
          </p>

          {/* Categories */}
          <div className="grid grid-cols-3 gap-3 mb-8 text-center text-xs font-semibold text-[#2e7d32]">
            <div className="bg-green-50 rounded-lg py-2 px-3 border border-green-100">📶 WiFi & Cabling</div>
            <div className="bg-green-50 rounded-lg py-2 px-3 border border-green-100">📷 Cameras & Access</div>
            <div className="bg-green-50 rounded-lg py-2 px-3 border border-green-100">💼 Working With Us</div>
          </div>

          <FAQList />
        </div>
      </section>

      {/* Trust section */}
      <section className="bg-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1b5e20] mb-3">Still Have Questions?</h2>
          <p className="text-gray-600 mb-2">Our New Jersey IT experts are happy to walk you through anything.</p>
          <h3 className="text-sm font-semibold text-[#2e7d32] mb-6">Free consultations available for businesses across New Jersey.</h3>
          <a href="/contact" className="bg-[#2e7d32] text-white font-bold px-10 py-3 rounded-lg hover:bg-[#1b5e20] transition-colors text-lg">
            Ask Us a Question
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1b5e20] text-white py-14 px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Upgrade Your Network?</h2>
        <p className="text-green-100 mb-6">Greenbird Network Solutions serves small businesses, churches, and medical offices throughout New Jersey.</p>
        <a href="/contact" className="bg-white text-[#1b5e20] font-bold px-10 py-3 rounded-lg hover:bg-green-100 transition-colors text-lg">
          Get a Free Quote
        </a>
      </section>
    </div>
  );
}
