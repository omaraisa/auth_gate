import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const oxanium = localFont({
  src: [
    {
      path: "/fonts/oxanium-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/oxanium-Bold.ttf",
      weight: "600",
      style: "normal",
    }
  ],
  variable: "--font-oxanium",
});

const droidArabicKufi = localFont({
  src: [
    {
      path: "/fonts/alfont_com_AlFont_com_Droid-Arabic-Kufi.ttf",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-droid-arabic-kufi",
});

export const metadata: Metadata = {
  title: "Geoportal Gateway",
  description: "A Geoportal Gateway for the JDA Geospatial Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${oxanium.variable} ${droidArabicKufi.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
