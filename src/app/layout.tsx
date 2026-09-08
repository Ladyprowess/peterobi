import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Obi 2027";
const description =
  "Why Nigeria should vote Peter Obi in 2027. Eight years governing Anambra, sector by sector: health, education, the economy, security and infrastructure.";

export const metadata: Metadata = {
  title: { default: "Obi 2027, A New Nigeria is POssible", template: "%s | Obi 2027" },
  description,
  applicationName: title,
  openGraph: {
    title: "Obi 2027, A New Nigeria is POssible",
    description,
    type: "website",
    locale: "en_NG",
    siteName: title,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#008751",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-NG"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-page text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded focus:bg-green focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
