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

      {/* Right Two-Thirds - Orbital Cards around Floating Platform */}
      <div className="hidden lg:block absolute right-0 top-0 w-2/3 h-full overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
        
        {/* Orbital System Container */}
        <div className="relative h-full flex items-center justify-center">
          {/* Central Floating Platform */}
          <div className="floating-platform absolute z-20">
            <div className="platform-core relative w-48 h-48 rounded-full bg-gradient-to-br from-cyan/30 to-transparent border-4 border-cyan/40 backdrop-blur-xl shadow-2xl shadow-cyan/20">
              <div className="absolute inset-0 rounded-full bg-gradient-radial from-cyan/20 to-transparent animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full border-2 border-cyan/30" />
              <div className="absolute inset-8 rounded-full border border-cyan/20" />
              
              {/* Platform Logo/Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Car className="h-12 w-12 text-cyan mx-auto mb-2" />
                  <div className="text-xs font-bold text-cyan">TRIXON</div>
                  <div className="text-[10px] text-cyan/60">MOTORS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting Cards */}
          <div className="orbit-container absolute w-[600px] h-[600px]">
            {/* Card 1 - Premium Selection */}
            <div className="orbit-card orbit-card-1 portrait-card">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 rounded-lg bg-cyan/20">
                    <Car className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Premium Selection</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked luxury vehicles from global markets</p>
                </div>
              </div>
            </div>

            {/* Card 2 - Global Import */}
            <div className="orbit-card orbit-card-2 portrait-card">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 rounded-lg bg-cyan/20">
                    <Globe className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Global Import</h3>
                  <p className="text-sm text-muted-foreground">Direct imports from Japan, USA, Europe & UAE</p>
                </div>
              </div>
            </div>

            {/* Card 3 - Certified Quality */}
            <div className="orbit-card orbit-card-3 portrait-card">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 rounded-lg bg-cyan/20">
                    <Shield className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Certified Quality</h3>
                  <p className="text-sm text-muted-foreground">Rigorous 150-point inspection process</p>
                </div>
              </div>
            </div>

            {/* Card 4 - Full Documentation */}
            <div className="orbit-card orbit-card-4 portrait-card">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 rounded-lg bg-cyan/20">
                    <FileText className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Full Documentation</h3>
                  <p className="text-sm text-muted-foreground">Complete paperwork & customs clearance</p>
                </div>
              </div>
            </div>

            {/* Card 5 - Secure Delivery */}
            <div className="orbit-card orbit-card-5 portrait-card">
              <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-4 rounded-lg bg-cyan/20">
                    <Truck className="h-8 w-8 text-cyan" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Secure Delivery</h3>
                  <p className="text-sm text-muted-foreground">Insured shipping to your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}