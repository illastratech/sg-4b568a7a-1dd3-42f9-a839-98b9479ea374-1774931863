import { ArrowRight, Zap, Car, Globe, Shield, FileText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-space-blue overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Content - Takes full width on mobile/tablet, 1/3 on desktop */}
          <div className="lg:col-span-1 text-center md:text-left">
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

          {/* Right Two-Thirds - 3D Carousel - Now visible on tablets */}
          <div className="hidden md:block absolute right-0 top-0 md:w-full lg:w-2/3 h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
            
            {/* 3D Carousel Container - Centered and Responsive */}
            <div className="relative h-full flex items-center justify-center px-4">
              <div className="carousel-wrapper" style={{ perspective: "1200px" }}>
                
                {/* Floor Platform - Center piece that cards orbit around */}
                <div className="carousel-floor-center">
                  <div className="floor-surface">
                    {/* Circular floor base */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-cyan/10 to-purple/10 backdrop-blur-xl border-2 border-cyan/20 shadow-2xl flex items-center justify-center">
                      {/* Floor rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-cyan/20"></div>
                      <div className="absolute inset-4 rounded-full border border-cyan/15"></div>
                      <div className="absolute inset-8 rounded-full border border-cyan/10"></div>
                      <div className="absolute inset-12 rounded-full border border-cyan/5"></div>
                      
                      {/* Logo/Brand centered on floor */}
                      <div className="relative z-10 text-center">
                        <Car className="h-12 w-12 sm:h-16 sm:w-16 text-cyan mx-auto mb-2" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider">TRIXON</h3>
                        <p className="text-xs sm:text-sm text-cyan tracking-widest">MOTORS</p>
                      </div>
                      
                      {/* Floor glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cyan/20 to-transparent animate-pulse-slow"></div>
                      
                      {/* Shadow underneath */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/30 blur-2xl rounded-full"></div>
                    </div>
                  </div>

                  {/* Orbiting Portrait Cards - Orbit around the floor */}
                  <div className="cards-orbit-container">
                    
                    {/* Card 1 - Premium Selection */}
                    <div className="orbit-card-around-floor orbit-card-1">
                      <div className="portrait-card glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
                        <div className="flex flex-col items-center text-center h-full justify-between">
                          <div className="p-3 sm:p-4 rounded-lg bg-cyan/20 mb-3 sm:mb-4">
                            <Car className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Premium Selection</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Hand-picked luxury vehicles</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 2 - Global Import */}
                    <div className="orbit-card-around-floor orbit-card-2">
                      <div className="portrait-card glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
                        <div className="flex flex-col items-center text-center h-full justify-between">
                          <div className="p-3 sm:p-4 rounded-lg bg-cyan/20 mb-3 sm:mb-4">
                            <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Global Import</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Direct from global markets</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 3 - Certified Quality */}
                    <div className="orbit-card-around-floor orbit-card-3">
                      <div className="portrait-card glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
                        <div className="flex flex-col items-center text-center h-full justify-between">
                          <div className="p-3 sm:p-4 rounded-lg bg-cyan/20 mb-3 sm:mb-4">
                            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Certified Quality</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">150-point inspection</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 4 - Full Documentation */}
                    <div className="orbit-card-around-floor orbit-card-4">
                      <div className="portrait-card glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
                        <div className="flex flex-col items-center text-center h-full justify-between">
                          <div className="p-3 sm:p-4 rounded-lg bg-cyan/20 mb-3 sm:mb-4">
                            <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Full Documentation</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Complete paperwork</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card 5 - Secure Delivery */}
                    <div className="orbit-card-around-floor orbit-card-5">
                      <div className="portrait-card glass-card p-4 sm:p-6 rounded-xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
                        <div className="flex flex-col items-center text-center h-full justify-between">
                          <div className="p-3 sm:p-4 rounded-lg bg-cyan/20 mb-3 sm:mb-4">
                            <Truck className="h-6 w-6 sm:h-8 sm:w-8 text-cyan" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Secure Delivery</h3>
                            <p className="text-xs sm:text-sm text-muted-foreground">Insured shipping</p>
                          </div>
                        </div>
                      </div>
                    </div>
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