'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We work with small businesses, churches, medical offices, schools, nonprofits, and any organization that needs reliable network infrastructure across New Jersey. If you have a building and need a network, we can help.',
  },
  {
    question: 'What is network cabling and why does it matter?',
    answer: 'Network cabling refers to the physical wires (like Cat6 cables) that connect your devices — computers, phones, cameras, and more — to your network. Good cabling is the foundation of a reliable network. Wireless connections are convenient, but a properly wired network is faster, more stable, and more secure.',
  },
  {
    question: 'What is VoIP and should my business switch to it?',
    answer: 'VoIP (Voice over Internet Protocol) is a phone system that runs over your internet connection instead of traditional phone lines. It typically costs less, offers more features (like voicemail-to-email, call forwarding, and auto-attendants), and is easier to scale as your business grows. Most businesses that switch never look back.',
  },
  {
    question: 'How do I know if my WiFi is good enough?',
    answer: 'Signs of a poor WiFi setup include slow speeds in certain areas, devices frequently dropping connection, or staff complaining about poor signal. If your business has dead zones, too many users on a single router, or you\'re using a home-grade router for a commercial space, it\'s time for an upgrade.',
  },
  {
    question: 'Can you install security cameras at my church or office?',
    answer: 'Absolutely. We install professional IP camera systems for all types of facilities — indoors and outdoors — across New Jersey. We set up remote viewing so you can check on your property from your phone or computer at any time.',
  },
  {
    question: 'What are smart door locks and how do they work?',
    answer: 'Smart door access systems replace traditional keys with keycards, key fobs, PIN codes, or even smartphone access. They run over your network, so you can control who has access to which doors, set schedules, and see a log of who entered and when.',
  },
  {
    question: 'How long does a typical installation take?',
    answer: 'It depends on the size and complexity of the project. A simple WiFi upgrade or small camera install might take just a few hours. A full cabling job for a larger facility could take one to several days. We always give you a clear timeline before we start so there are no surprises.',
  },
  {
    question: 'Do you offer ongoing IT support after the installation?',
    answer: 'Yes! We don\'t just install and disappear. We\'re available to help with troubleshooting, changes, expansions, and general questions after your project is complete. We want to be your long-term IT partner, not just a one-time contractor.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Every project is different, so we don\'t post flat rates. We offer free consultations where we assess your space and needs, then provide a detailed, no-obligation quote. We pride ourselves on fair, transparent pricing — no hidden fees.',
  },
  {
    question: 'How do I get started?',
    answer: 'Just reach out! Fill out the contact form on our Contact page. We\'ll schedule a free consultation, come out to see your space anywhere in New Jersey, and put together a plan that fits your needs and budget.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-green-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-green-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#1b5e20] text-base pr-4">{question}</span>
        <span className="text-2xl text-green-500 flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 py-4 bg-green-50 text-gray-600 text-sm leading-relaxed border-t border-green-100">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQList() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
