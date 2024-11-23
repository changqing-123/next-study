import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
      >
        <div className="bg-green-800 rounded-sm p-2">
          <h1>app-layout</h1>
          {children}
        </div>
      </body>
    </html>
  );
}
