import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceDetails from "@/components/ServiceDetails";
import ConsultationCta from "@/components/ConsultationCta";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceDetails />
        <ConsultationCta />
        <Process />
        <Gallery />
        <ServiceAreas />
        <Contact />
        <Faq />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
