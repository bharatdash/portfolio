import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: `${site.name} — Senior QA Engineer & SDET`,
  description: site.description,
  keywords: [
    "QA Engineer",
    "SDET",
    "Test Automation",
    "Playwright",
    "Cypress",
    "API Testing",
    "Quality Engineering",
    "Healthcare Software Testing",
    "Bhubaneswar",
  ],
  openGraph: {
    title: `${site.name} — Senior QA Engineer & SDET`,
    description: site.description,
    type: "website",
    url: site.siteUrl,
  },
  twitter: {
    card: "summary",
    title: `${site.name} — Senior QA Engineer & SDET`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#070D15",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {/* Restore saved theme before paint; dark is the default. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.add('light')}}catch(e){}})();",
          }}
        />
        <div className="backdrop-ambient" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
