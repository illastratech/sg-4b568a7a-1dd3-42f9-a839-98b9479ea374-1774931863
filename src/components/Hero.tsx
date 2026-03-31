import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-blue via-space-blue to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-full mb-8 group hover:bg-cyan/20 transition-all cursor-default">
            <Zap className="h-4 w-4 text-cyan group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-cyan">Global Automotive Excellence Since 2015</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan via-cyan to-accent bg-clip-text text-transparent">
              TRIXON MOTORS
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-foreground/90">
              Your Gateway to Premium Vehicles
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Experience the future of automotive excellence. From luxury imports to premium sales, 
            we deliver unmatched quality and service in every transaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan to-cyan/80 hover:from-cyan/90 hover:to-cyan/70 text-background font-semibold group shadow-lg shadow-cyan/20"
            >
              Browse Inventory
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cyan/20 hover:bg-cyan/10 font-semibold"
            >
              Request Import Service
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border border-cyan/20 rounded-lg p-6 hover:border-cyan/40 transition-all group">
              <div className="text-3xl font-bold text-cyan mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-muted-foreground">Total Inventory</div>
            </div>
            <div className="bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border border-cyan/20 rounded-lg p-6 hover:border-cyan/40 transition-all group">
              <div className="text-3xl font-bold text-cyan mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
            <div className="bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border border-cyan/20 rounded-lg p-6 hover:border-cyan/40 transition-all group">
              <div className="text-3xl font-bold text-cyan mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border border-cyan/20 rounded-lg p-6 hover:border-cyan/40 transition-all group">
              <div className="text-3xl font-bold text-cyan mb-2 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}