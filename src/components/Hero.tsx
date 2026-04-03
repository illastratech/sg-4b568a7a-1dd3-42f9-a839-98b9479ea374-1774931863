import { ArrowRight, Zap, Car, Globe, Shield, FileText, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-space-blue overflow-hidden">
      {/* Animated Background Grid - Only on left side */}
      <div className="absolute inset-0 lg:w-1/3 bg-grid opacity-20"></div>
      <div className="absolute inset-0 lg:w-1/3 bg-gradient-to-b from-transparent via-cyan/5 to-transparent"></div>
      
      {/* Car Background Images - Only on left side */}
      <div className="absolute inset-0 lg:w-1/3 opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-purple/20 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Two Column Layout */}
      <div className="relative h-screen flex">
        
        {/* Left Section - Content (1/3) */}
        <div className="w-full lg:w-1/3 flex items-center justify-center px-6 lg:px-12 relative z-10" style={{ backgroundColor: "#0f3665", backgroundImage: "none" }}>
          <div className="max-w-xl text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
              <Zap className="h-4 w-4 text-cyan animate-pulse" />
              <span className="text-sm text-cyan font-semibold tracking-wider">FUTURE OF AUTOMOTIVE</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Import Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple" style={{ color: "#bababa" }}>
                Dream Car
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Premium vehicle imports from global markets. Experience luxury, quality, and seamless delivery to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan to-cyan/80 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan/50 transition-all flex items-center justify-center gap-2">
                Explore Inventory
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-lg font-semibold border border-white/10 hover:bg-white/10 transition-all">
                Import Request
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/10">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-cyan mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Cars Imported</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-cyan mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-cyan mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - 3D Carousel (2/3) - Clean background */}
        <div className="hidden lg:flex w-2/3 items-center justify-center relative">
          {/* Clean subtle gradient - no filters */}
          <div className="absolute inset-0 bg-gradient-to-l from-space-blue via-transparent to-transparent" style={{ backgroundImage: "url(\"/ChatGPT_Image_Mar_30_2026_10_05_18_PM.png\")", backgroundColor: "transparent" }}></div>
          
          {/* 3D Carousel */}
          <div className="carousel-wrapper relative z-10" style={{ perspective: "1200px" }}>
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
    </section>);

}