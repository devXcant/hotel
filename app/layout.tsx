import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Values from "@/components/Values";



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

      <body className="">
        <Navbar />
        {/* <Values />    */}
           {children}
      </body>
        
    </html>
  );
}
