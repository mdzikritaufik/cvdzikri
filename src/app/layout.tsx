import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Footer } from "@/components/footer";
import { Shell } from "@/components/shell";
import { TransitionProvider } from "@/components/transition";
import { PROFILE } from "@/data/content";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${PROFILE.name} — Aircraft Engine Maintenance Specialist`,
    template: `%s — ${PROFILE.name}`,
  },
  description:
    "Continuous Improvement in aircraft engine MRO. CFM56 and LEAP-1A/1B under Part 145, plus the digital tools that make the shop floor effective.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <TransitionProvider>
            <Shell />
            <main className="flex-1">{children}</main>
            <Footer />
          </TransitionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
