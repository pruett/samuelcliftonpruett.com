import type { Metadata } from "next";
import { Neuton, Oswald } from "next/font/google";
import "./globals.css";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lt. Col. Samuel Clifton Pruett",
  description: "Memorial website for Lt. Col. Samuel Clifton Pruett (1923-2010), WWII B-24 Liberator pilot and beloved father.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${neuton.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
