import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Features />
      <Clients />
      <Faq />
      <Contact />
      
    </>
    
  );
}
