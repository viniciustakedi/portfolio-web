import type { Metadata } from "next";
import { Anybody } from "next/font/google";

import { ReactQuery } from "../../config/react-query/ReactQueryProvider";
import { I18nProvider } from "../../config/i18n/I18nProvider";

import "./globals.css";
import { Notistack } from "../../config/notistack/NotistackProvider";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vinicius Takedi | Portfolio",
  description:
    "Explore the portfolio of Vinicius Takedi, a computer scientist and software engineer. Discover projects, skills, and more about his professional journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${anybody.variable}  antialiased`}>
        <ReactQuery>
          <I18nProvider>
            <Notistack>{children}</Notistack>
          </I18nProvider>
        </ReactQuery>
      </body>
    </html>
  );
}
