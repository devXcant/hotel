import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Values from "@/components/Values";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Hotel | Travels | Lodging",
  description: "A place like Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="mb-6">
        <Navbar />
        
           {children}
           <Cta />
           <Footer />
      </body>
        
    </html>
  );
}
