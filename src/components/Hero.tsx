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
      
      {/* Content - Left Half */}
      <div className="relative z-10 w-full lg:w-1/2 px-4 sm:px-6 lg:px-12 xl:px-16 py-20">
        <div className="space-y-8 max-w-2xl">
          {/* Main Headline */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/20 mb-6">
              <Zap className="h-4 w-4 text-cyan" />
              <span className="text-sm font-medium text-cyan" style={{ textAlign: "center" }}>Premium Import & Sales Service</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan to-white" style={{ backgroundColor: "#1a1a1a", backgroundImage: "none", color: "#3b82f6" }}>
                Drive the Future
              </span>
              <br />
              <span className="text-white" style={{ backgroundColor: "#00000000", backgroundImage: "none", color: "#06b6d4" }}>with Trixon Motors</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed" style={{ color: "#171717", backgroundColor: "#00000000", backgroundImage: "none", textAlign: "left", opacity: "1" }}>
              Global vehicle import specialists delivering premium automobiles with unmatched precision and service excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button
              size="lg"
              className="bg-cyan hover:bg-cyan/90 text-background font-bold px-8 py-6 text-lg group" style={{ color: "#f3f4f6", backgroundColor: "#06b6d4", backgroundImage: "none" }}>
              
              Browse Inventory
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan/20 hover:bg-cyan/10 px-8 py-6 text-lg" style={{ backgroundColor: "#3b82f6", backgroundImage: "none" }}>
              
              Request Import Service
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-16" style={{ backgroundColor: "#00000000", backgroundImage: "none" }}>
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

      {/* Right Half - Auto-scrolling Cards */}
      <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
        
        {/* Auto-scrolling Cards Container */}
        <div className="relative h-full flex items-center justify-center py-20" style={{ backgroundImage: "url(\"/ChatGPT_Image_Mar_30_2026_10_05_34_PM.png\")", backgroundColor: "transparent", backgroundPosition: "right center" }}>
          <div className="scroll-container space-y-6 w-full max-w-md px-8">
            {/* Card 1 */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Car className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Premium Selection</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked luxury vehicles from global markets</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Globe className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Global Import</h3>
                  <p className="text-sm text-muted-foreground">Direct imports from Japan, USA, Europe & UAE</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Shield className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Certified Quality</h3>
                  <p className="text-sm text-muted-foreground">Rigorous 150-point inspection process</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <FileText className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Full Documentation</h3>
                  <p className="text-sm text-muted-foreground">Complete paperwork & customs clearance</p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Truck className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Secure Delivery</h3>
                  <p className="text-sm text-muted-foreground">Insured shipping to your doorstep</p>
                </div>
              </div>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Car className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Premium Selection</h3>
                  <p className="text-sm text-muted-foreground">Hand-picked luxury vehicles from global markets</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-cyan/20 shadow-2xl hover:border-cyan/40 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-cyan/20">
                  <Globe className="h-6 w-6 text-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Global Import</h3>
                  <p className="text-sm text-muted-foreground">Direct imports from Japan, USA, Europe & UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}