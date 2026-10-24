import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutFooter from "@/components/home/AboutFooter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#1D1D1F]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
      </main>
      <AboutFooter />
    </div>
  );
}
