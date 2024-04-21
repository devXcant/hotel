import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Navbar/Navbar";
import Values from "@/app/Values/Values";
import Cta from "@/app/Cta/Cta";
import Footer from "@/app/Footer/Footer";
import Contact from "@/app/Contacts/page";



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

      <body className="mb-6 scroll-smooth">
          
           <Navbar />       
           {children}
           <Cta />
           <Footer />
           
      </body>
        
    </html>
  );
}
