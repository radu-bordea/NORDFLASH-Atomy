import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import ContactForm from "@/components/ContactForm";
// import Benefits from "@/components/Benefits";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";

export const metadata = {
  title: "Atomy România — Frumusețe & Sănătate din Coreea de Sud",
  description:
    "Descoperă gama exclusivă Atomy: produse premium certificate, bazate pe ingrediente naturale coreene și inovație științifică de top.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <Hero />
        {/* <ContactForm/> */}
        {/* <Benefits /> */}
        {/* <ContactForm /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}