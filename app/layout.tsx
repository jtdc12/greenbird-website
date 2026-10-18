import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MFGX45LX');` }} />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFGX45LX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
