import { Car, Globe, Shield, Wrench, FileText, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
{
  icon: Car,
  title: "Premium Sales",
  description: "Curated selection of luxury and performance vehicles with verified history and quality assurance.",
  color: "text-primary"
},
{
  icon: Globe,
  title: "Global Import",
  description: "Import any vehicle from anywhere in the world with full customs and logistics management.",
  color: "text-accent"
},
{
  icon: Shield,
  title: "Quality Guarantee",
  description: "Comprehensive inspection and certification process ensuring top-tier vehicle condition.",
  color: "text-primary"
},
{
  icon: FileText,
  title: "Documentation",
  description: "Complete handling of all paperwork, registration, and legal requirements.",
  color: "text-accent"
},
{
  icon: Truck,
  title: "Secure Shipping",
  description: "Insured door-to-door delivery with real-time tracking and white-glove service.",
  color: "text-primary"
},
{
  icon: Wrench,
  title: "After-Sales Care",
  description: "Ongoing maintenance support, warranty options, and technical assistance.",
  color: "text-accent"
}];


export function Services() {
  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" style={{ backgroundColor: "#d4d4d4", backgroundImage: "none" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            COMPREHENSIVE <span className="text-primary text-glow">SERVICES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a seamless automotive experience, from acquisition to delivery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) =>
          <Card
            key={service.title}
            className="group p-8 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 glass-effect"
            style={{ animationDelay: `${index * 100}ms` }}>
            
              <div className="relative mb-6">
                <div className={`inline-flex p-4 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors ${service.color}`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity ${service.color === 'text-primary' ? 'bg-primary' : 'bg-accent'}`} />
              </div>
              
              <h3 className="font-orbitron text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>);

}