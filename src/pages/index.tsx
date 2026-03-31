import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { VehicleInventory } from "@/components/VehicleInventory";
import { ImportProcess } from "@/components/ImportProcess";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Trixon Motors - Premium Vehicle Sales & Global Import Service"
        description="Experience automotive excellence with Trixon Motors. Premium vehicle sales and professional global import services. Your trusted partner for luxury and performance vehicles since 2015."
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Services />
        <VehicleInventory />
        <ImportProcess />
        <Contact />
        <Footer />
      </div>
    </>
  );
}