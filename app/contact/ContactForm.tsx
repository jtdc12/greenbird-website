'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:john.greenbirdnetworksolutions@gmail.com?subject=New Inquiry from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nOrganization: ${form.organization}\nService Needed: ${form.service}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-[#1b5e20] mb-2">Thanks for reaching out!</h2>
        <p className="text-gray-600">We will get back to you as soon as possible. We look forward to working with you.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-green-100 rounded-2xl shadow-lg p-8 space-y-6">
      <h2 className="text-2xl font-bold text-[#1b5e20] mb-2">Send Us a Message</h2>
      <p className="text-gray-500 text-sm">Fill out the form below and a member of our New Jersey IT team will be in touch within 1 business day.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
          <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 000-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Organization / Business Name</label>
          <input type="text" name="organization" value={form.organization} onChange={handleChange} placeholder="My Business LLC"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service Needed</label>
        <select name="service" value={form.service} onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500">
          <option value="">Select a service...</option>
          <option>Network Cabling</option>
          <option>WiFi Solutions</option>
          <option>Security Camera Installation</option>
          <option>VoIP Phone Systems</option>
          <option>Smart Door Access Control</option>
          <option>IT Consulting</option>
          <option>Multiple Services / Not Sure</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
          placeholder="Tell us a little about your project or what you need help with..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none" />
      </div>

      <button type="submit" className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-3 rounded-lg transition-colors text-lg">
        Send Message
      </button>

      <p className="text-xs text-gray-400 text-center">We typically respond within 1 business day.</p>
    </form>
  );
}
