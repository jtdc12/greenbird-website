import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Greenbird Network Solutions | IT & Networking Services New Jersey",
  description: "We handle IT so you can handle business. Professional network cabling, WiFi, security cameras, VoIP, and IT consulting for small businesses, churches, and medical offices in New Jersey.",
  metadataBase: new URL('https://greenbirdnetworksolutions.com'),
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Greenbird Network Solutions",
  "description": "Professional IT and networking services for small businesses, churches, and medical offices in New Jersey. Services include network cabling, WiFi installation, security cameras, VoIP phone systems, and smart door access.",
  "url": "https://greenbirdnetworksolutions.com",
  "email": "john.greenbirdnetworksolutions@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressState": "NJ",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "serviceType": [
    "Network Cabling",
    "WiFi Installation",
    "Security Camera Installation",
    "VoIP Phone Systems",
    "Smart Door Access Control",
    "IT Consulting"
  ],
  "slogan": "We handle IT so you can handle business.",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 09:00-18:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
