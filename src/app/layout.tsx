import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import { ReactQuery } from "../../config/react-query/ReactQueryProvider";
import { I18nProvider } from "../../config/i18n/I18nProvider";
import { Notistack } from "../../config/notistack/NotistackProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vinicius Takedi | Software Engineer",
  description:
    "Portfolio of Vinicius Takedi, a Brazilian software engineer blending robust architecture with premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-background text-foreground selection:bg-accent selection:text-white`}>
        <ThemeProvider>
          <ReactQuery>
            <I18nProvider>
              <Notistack>
                <SmoothScroll>{children}</SmoothScroll>
              </Notistack>
            </I18nProvider>
          </ReactQuery>
        </ThemeProvider>
      </body>
    </html>
  );
}
