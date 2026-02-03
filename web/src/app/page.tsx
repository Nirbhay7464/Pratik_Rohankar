import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Video";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export const dynamic = 'force-static';
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
