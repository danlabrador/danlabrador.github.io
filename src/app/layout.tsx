import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Dan Labrador | Analytics Engineer",
  description:
    "Dan Labrador is an Analytics Engineer specializing in Python and SQL-driven ETL pipelines. With expertise in BigQuery, data modeling, and business intelligence, he transforms raw data into reliable, real-time insights that drive business decisions. Currently pursuing MITx MicroMasters in Statistics & Data Science.",
  authors: [{ name: "Dan Labrador" }],
  keywords: [
    "Dan Labrador",
    "Data & Analytics Engineer",
    "Data Engineering",
    "ETL Pipelines",
    "Python",
    "SQL",
    "BigQuery",
    "Data Modeling",
    "Data Quality",
    "Data Insights",
    "Business Intelligence",
    "Looker Studio",
    "Data Platforms",
    "Cloud Infrastructure",
    "DevOps",
    "Data Science",
    "Machine Learning",
    "Statistics",
    "MITx MicroMasters",
    "Data Pipeline Optimization",
    "API Integration",
    "Data Governance",
    "GDPR Compliance",
  ],
  openGraph: {
    title: "Dan Labrador | Analytics Engineer",
    description:
      "Analytics Engineer specializing in Python and SQL-driven ETL pipelines. Transforming raw data into reliable, real-time insights.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/src/images/logo/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/src/images/logo/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/src/images/logo/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/src/images/logo/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "apple-mobile-web-app-title": "Dan's Portfolio",
    "application-name": "Dan's Portfolio",
    "msapplication-TileColor": "#da532c",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${figtree.variable} body`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
