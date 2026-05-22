import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Sports from "@/components/sections/Sports";
import BadmintonBooking from "@/components/sections/BadmintonBooking";
import Coach from "@/components/sections/Coach";
import Facilities from "@/components/sections/Facilities";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import EnquiryForm from "@/components/sections/EnquiryForm";
import InstagramEmbed from "@/components/sections/InstagramEmbed";
import Location from "@/components/sections/Location";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Sports />
      <BadmintonBooking />
      <Coach />
      <Facilities />
      <Gallery />
      <Testimonials />
      <EnquiryForm />
      <InstagramEmbed />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
