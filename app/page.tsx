import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import ServiceDetails from "@/components/ServiceDetails";
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
        <Services />
        <ServiceDetails />
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
