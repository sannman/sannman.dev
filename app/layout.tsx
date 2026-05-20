import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sannman — BSc AIML Sophomore",
  description:
    "Portfolio of Sannman, a BSc AIML sophomore at Elphinstone College, HBSU, building practical AI and finance projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
