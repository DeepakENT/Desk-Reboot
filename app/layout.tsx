import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Desk Reboot",
  description: "15-min reset for better focus, posture, and performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${montserrat.variable}`}
    >
      <body className="antialiased overflow-x-hidden">
  {children}
</body>
    </html>
  );
}
