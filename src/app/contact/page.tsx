import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white min-h-screen">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
