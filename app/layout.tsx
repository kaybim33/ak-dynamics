import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A&K Dynamics LLC",
  description:
    "A&K Dynamics LLC provides data cleanup, Microsoft Dynamics 365, Dataverse, and Power BI solutions for businesses.",

  keywords: [
    "Data Cleanup",
    "Microsoft Dynamics 365",
    "Dataverse",
    "Power BI",
    "Business Intelligence",
    "CRM Data Cleanup",
    "Indiana Data Consultant",
    "A&K Dynamics LLC",
  ],

  authors: [
    {
      name: "Abimbola Adeyemi",
      url: "https://www.linkedin.com/in/abimbola-adeyemi/",
    },
  ],

  creator: "A&K Dynamics LLC",

  metadataBase: new URL("https://ak-dynamics.com"),

  openGraph: {
    title: "A&K Dynamics LLC",
    description:
      "Helping businesses trust their data through data cleanup, Dynamics 365, Dataverse, and Power BI solutions.",
    url: "https://ak-dynamics.com",
    siteName: "A&K Dynamics LLC",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}