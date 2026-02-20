import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ventum Consulting Partners | Financial Advisory Without Borders",
  description:
    "Ventum Consulting Partners is a UAE-licensed professional firm providing technology-driven financial advisory and business consultancy services across the Emirates and internationally.",
  keywords: [
    "financial advisory",
    "business consulting",
    "UAE",
    "consulting partners",
    "financial planning",
    "mergers acquisitions",
    "risk assessment",
    "corporate strategy",
  ],
  openGraph: {
    title: "Ventum Consulting Partners | Financial Advisory Without Borders",
    description:
      "Technology-driven, compliant, and globally aligned advisory solutions for SMEs, corporates, and entrepreneurs.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
