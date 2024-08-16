import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmplexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibmplexSerif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Horizan Bank",
  description: "it's a banking Platform",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmplexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
