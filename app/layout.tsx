import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "test page",
  description: "test page",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
