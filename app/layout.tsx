import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
