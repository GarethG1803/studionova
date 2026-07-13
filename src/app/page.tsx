/* =============================================================================
   HOME PAGE
   =============================================================================
   Assembles all sections into the main page. Each section is a separate
   component inside src/components/sections/ for easy editing.
   ============================================================================= */

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
// import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
// import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
// import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        {/* <Portfolio /> */}
        <Process />
        {/* <About /> */}
        <Testimonials />
        <CTABanner />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}
