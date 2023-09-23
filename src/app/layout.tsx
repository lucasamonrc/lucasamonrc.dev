import { Header } from "@/components/Header";
import "./globals.css";

import classNames from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lucas Castro",
  description: "Lucas Castro's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-50">
      <body
        className={classNames(
          inter.className,
          "bg-white",
          "max-w-7xl",
          "mx-auto",
          "shadow",
          "border-x",
          "border-x-zinc-100",
          "py-6"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
