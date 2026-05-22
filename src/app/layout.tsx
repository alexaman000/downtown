import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Downtown Sports Club | Premium Indoor Sports in Ranchi",
  description: "Ranchi's Premium Indoor Sports Destination. Book premium badminton courts, skate park, and indoor sports facilities at DSC.",
  keywords: [
    "Best badminton court in Ranchi",
    "Indoor badminton court Ranchi",
    "Badminton academy Ranchi",
    "Badminton coaching Ranchi",
    "Sports club Ranchi",
    "Indoor sports Ranchi",
    "Skate park Ranchi",
    "Professional badminton training Ranchi",
    "Badminton court booking Ranchi",
    "Indoor playground Ranchi",
    "DSC Ranchi",
    "Downtown Sports Club Ranchi",
    "Morning badminton slots Ranchi",
    "Affordable badminton court Ranchi",
    "Badminton practice Ranchi"
  ],
  openGraph: {
    title: "Downtown Sports Club | Premium Indoor Sports in Ranchi",
    description: "Ranchi's Premium Indoor Sports Destination. Book premium badminton courts and indoor sports facilities at DSC.",
    url: "https://dsc-ranchi.com",
    siteName: "Downtown Sports Club",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Downtown Sports Club | Premium Indoor Sports in Ranchi",
    description: "Ranchi's Premium Indoor Sports Destination.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "name": "Downtown Sports Club",
    "alternateName": "DSC",
    "description": "Ranchi's Premium Indoor Sports Destination featuring premium badminton courts and skate park.",
    "url": "https://dsc-ranchi.com",
    "telephone": "+916299973147",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "priceRange": "₹200 - ₹4500"
  };

  return (
    <html lang="en" className={`dark ${outfit.variable} antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-black text-white font-sans overflow-x-hidden">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  );
}
