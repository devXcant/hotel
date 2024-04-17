import Clients from "@/app/Clients/Clients";
import Contact from "@/app/Contacts/Contact";
import Cta from "@/app/Cta/Cta";
import Faq from "@/app/Faq/Faq";
import Features from "@/app/Features/Features";
import Hero from "@/app/Hero/Hero";
import Values from "@/app/Values/Values";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Hero />
      <Values />
      <Features />
      <Clients />
      <Faq />
      
    </>
    
  );
}
