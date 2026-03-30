import { Globe, FileCheck, Truck, Shield, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Globe,
    title: "Vehicle Selection",
    description: "Choose any vehicle from our global network or request a specific model",
    duration: "1-2 days"
  },
  {
    icon: FileCheck,
    title: "Documentation & Verification",
    description: "Complete inspection, history verification, and legal documentation",
    duration: "3-5 days"
  },
  {
    icon: Truck,
    title: "Shipping & Customs",
    description: "Secure international shipping with full insurance and customs clearance",
    duration: "3-6 weeks"
  },
  {
    icon: Shield,
    title: "Delivery & Registration",
    description: "Final inspection, registration, and white-glove delivery to your door",
    duration: "1-2 weeks"
  }
];

export function ImportProcess() {
  return (
    <section id="import" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            IMPORT <span className="text-primary text-glow">PROCESS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From selection to delivery — a transparent, streamlined journey
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={step.title}
                className="relative p-6 bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 glass-effect"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-orbitron font-bold text-lg border-4 border-background">
                    {index + 1}
                  </div>
                </div>
                
                <div className="mt-6 mb-4 flex justify-center">
                  <div className="inline-flex p-4 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-orbitron text-lg font-bold mb-2 text-center">
                  {step.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 text-center leading-relaxed">
                  {step.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-xs text-primary font-semibold">
                  <Check className="h-3 w-3" />
                  <span>{step.duration}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}