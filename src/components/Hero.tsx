import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-futuristic" />
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDIxNywyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect border border-primary/30 mb-8">
          <Zap className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary font-medium">Next-Gen Automotive Solutions</span>
        </div>
        
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          DRIVE THE
          <span className="block text-primary text-glow mt-2">FUTURE</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Premium vehicle sales and import services powered by cutting-edge technology. 
          Your gateway to automotive excellence worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-cyan text-base gap-2">
            Explore Inventory
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-base font-semibold">
            Import Services
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Premium Vehicles</div>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
          <div className="glass-effect p-6 rounded-lg">
            <div className="text-3xl font-orbitron font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}