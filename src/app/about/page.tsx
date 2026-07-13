import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-white min-h-screen">
        <About />
      </main>
      <Footer />
    </>
  );
}
