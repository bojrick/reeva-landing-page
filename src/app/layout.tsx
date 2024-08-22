import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Skyview Property",
  description: "Luxury living at GIFT City",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Add header content */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Add footer content */}
        </footer>
      </body>
    </html>
  );
}