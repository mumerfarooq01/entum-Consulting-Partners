import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Ventum Consulting Partners | Strategic Advisory & Infrastructure Project Development",
  description:
    "Consulting and project development advisory for infrastructure, energy, and sustainability — financial structuring, PPP/concessions, feasibility, and international financing across the GCC, MENA, Africa, Europe, and South Asia.",
  keywords: [
    "infrastructure advisory",
    "project development",
    "project finance",
    "PPP advisory",
    "GCC",
    "MENA",
    "feasibility studies",
    "ECA financing",
    "renewable energy",
    "water infrastructure",
  ],
  openGraph: {
    title:
      "Ventum Consulting Partners | Strategic Advisory & Infrastructure Project Development",
    description:
      "From concept to bankability: project development, structuring, and financing for infrastructure and energy projects.",
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
