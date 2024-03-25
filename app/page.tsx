import Clients from "@/components/Clients";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Values from "@/components/Values";


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
