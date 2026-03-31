import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-space-blue to-background">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />
      
      {/* Content - Left Half */}
      <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 xl:px-16 py-20">
        <div className="space-y-8 max-w-2xl">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
              <Zap className="h-4 w-4 text-cyan" />
              <span className="text-sm font-medium text-cyan">Premium Import & Sales Service</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan to-white">
                Drive the Future
              </span>
              <br />
              <span className="text-white">with Trixon Motors</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Global vehicle import specialists delivering premium automobiles with unmatched precision and service excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-cyan hover:bg-cyan/90 text-background font-bold px-8 py-6 text-lg group"
            >
              Browse Inventory
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan/20 hover:bg-cyan/10 px-8 py-6 text-lg"
            >
              Request Import Service
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-16">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-transparent border border-cyan/20 backdrop-blur-sm">
              <div className="text-3xl font-black text-cyan mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Total Inventory</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-transparent border border-cyan/20 backdrop-blur-sm">
              <div className="text-3xl font-black text-cyan mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-transparent border border-cyan/20 backdrop-blur-sm">
              <div className="text-3xl font-black text-cyan mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-transparent border border-cyan/20 backdrop-blur-sm">
              <div className="text-3xl font-black text-cyan mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Half - Could add image or visual element here */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
      </div>
    </section>
  );
}