import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { clinic } from "./data/clinic";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinic.name,
  url: "https://bukit-timah-family-clinic.mycom-2764.chatgpt.site",
  telephone: clinic.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: clinic.address.line1,
    postalCode: clinic.address.postalCode,
    addressCountry: "SG",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "08:30", closes: "12:15" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday"], opens: "14:00", closes: "16:45" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:30", closes: "12:15" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bukit-timah-family-clinic.mycom-2764.chatgpt.site"),
  title: "Bukit Timah Family Clinic & Surgery | Family Clinic Singapore",
  description:
    "Bukit Timah Family Clinic & Surgery provides primary healthcare for individuals and families in the Bukit Timah community.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Bukit Timah Family Clinic & Surgery",
    description: "Trusted family care, close to home.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bukit Timah Family Clinic & Surgery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bukit Timah Family Clinic & Surgery",
    description: "Trusted family care, close to home.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }} />
      </body>
    </html>
  );
}
