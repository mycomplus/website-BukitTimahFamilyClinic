import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

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
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
