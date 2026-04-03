import { ArrowRight, Zap, Car, Globe, Shield, FileText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background via-space-blue to-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920')",
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-pulse-slow" />
      <div className="absolute inset-0 bg-gradient-radial from-cyan/5 via-transparent to-transparent" />
      
      {/* Content - Left Third */}
      <div className="relative z-10 w-full lg:w-1/3 px-4 sm:px-6 lg:px-8 xl:px-12 py-20">
        <div className="space-y-8 max-w-xl">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-cyan animate-pulse" />
              <span className="text-sm font-medium text-cyan">Futuristic Auto Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-white via-white to-cyan bg-clip-text text-transparent">
                Drive Into
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan via-electric-blue to-white bg-clip-text text-transparent">
                The Future
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Experience premium vehicle imports and sales with cutting-edge technology and unmatched service excellence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group bg-gradient-to-r from-cyan to-electric-blue hover:shadow-lg hover:shadow-cyan/50 transition-all">
              Explore Inventory
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan/30 hover:border-cyan hover:bg-cyan/10">
              Import Service
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-cyan">500+</div>
              <div className="text-sm text-muted-foreground">Vehicles Sold</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan">50+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Two-Thirds - 3D Carousel with Floating Platform */}
      <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-full overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
        
        {/* 3D Carousel Container */}
        <div className="relative h-full flex items-center justify-center perspective-3d">
          
          {/* Central Floating Platform */}
          <div className="absolute z-20 floating-platform">
            <div className="relative w-64 h-64">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan/30 bg-gradient-to-br from-cyan/5 to-transparent backdrop-blur-xl" />
              
              {/* Middle Ring */}
              <div className="absolute inset-8 rounded-full border border-cyan/20 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Inner Circle */}
              <div className="absolute inset-16 rounded-full border border-cyan/40 bg-gradient-to-br from-cyan/10 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-black text-cyan mb-1">TRIXON</div>
                  <div className="text-xs text-muted-foreground tracking-widest">MOTORS</div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-cyan/20 blur-xl opacity-50" />
            </div>
          </div>

          {/* 3D Rotating Carousel */}
          <div className="carousel-3d">
            {/* Card 1 - Premium Selection */}
            <div className="carousel-card" style={{ '--card-index': 0 } as React.CSSProperties}>
              <div className="portrait-card glass-card rounded-2xl border border-cyan/20 p-6 hover:border-cyan/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="p-4 rounded-xl bg-cyan/20">
                    <Car className="h-8 w-8 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Premium Selection</h3>
                    <p className="text-sm text-muted-foreground">Hand-picked luxury vehicles from global markets</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Global Import */}
            <div className="carousel-card" style={{ '--card-index': 1 } as React.CSSProperties}>
              <div className="portrait-card glass-card rounded-2xl border border-cyan/20 p-6 hover:border-cyan/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="p-4 rounded-xl bg-cyan/20">
                    <Globe className="h-8 w-8 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Global Import</h3>
                    <p className="text-sm text-muted-foreground">Direct imports from Japan, USA, Europe & UAE</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Certified Quality */}
            <div className="carousel-card" style={{ '--card-index': 2 } as React.CSSProperties}>
              <div className="portrait-card glass-card rounded-2xl border border-cyan/20 p-6 hover:border-cyan/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="p-4 rounded-xl bg-cyan/20">
                    <Shield className="h-8 w-8 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Certified Quality</h3>
                    <p className="text-sm text-muted-foreground">Rigorous 150-point inspection process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Full Documentation */}
            <div className="carousel-card" style={{ '--card-index': 3 } as React.CSSProperties}>
              <div className="portrait-card glass-card rounded-2xl border border-cyan/20 p-6 hover:border-cyan/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="p-4 rounded-xl bg-cyan/20">
                    <FileText className="h-8 w-8 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Full Documentation</h3>
                    <p className="text-sm text-muted-foreground">Complete paperwork & customs clearance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5 - Secure Delivery */}
            <div className="carousel-card" style={{ '--card-index': 4 } as React.CSSProperties}>
              <div className="portrait-card glass-card rounded-2xl border border-cyan/20 p-6 hover:border-cyan/40 transition-all">
                <div className="flex flex-col items-center text-center space-y-4 h-full">
                  <div className="p-4 rounded-xl bg-cyan/20">
                    <Truck className="h-8 w-8 text-cyan" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">Secure Delivery</h3>
                    <p className="text-sm text-muted-foreground">Insured shipping to your doorstep</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}