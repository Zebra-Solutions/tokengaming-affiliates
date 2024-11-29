import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Google Font: Nunito
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito", 
  weight: ["200", "300", "400", "600", "700", "800"], 
});

export const metadata: Metadata = {
  title: "Tokengaming Affiliates",
  description: "Tokengaming Affiliates aims to enhance the user experience by integrating the Afilka API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
