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
        title="AutoNexus - Premium Car Sales & Import Services"
        description="Experience the future of automotive excellence with AutoNexus. Premium vehicle sales and global import services with cutting-edge technology."
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