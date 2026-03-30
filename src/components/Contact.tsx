import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            GET IN <span className="text-primary text-glow">TOUCH</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Our team is here to assist you 24/7
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="p-8 glass-effect border-border">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name</label>
                    <Input placeholder="John Doe" className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-secondary border-border" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input placeholder="+1 (555) 000-0000" className="bg-secondary border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Service Interest</label>
                  <Input placeholder="Vehicle purchase, Import service, etc." className="bg-secondary border-border" />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements..." 
                    className="bg-secondary border-border min-h-32"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold mb-1">Email Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Get in touch via email
                  </p>
                  <a href="mailto:contact@autonexus.com" className="text-primary hover:underline">
                    contact@autonexus.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold mb-1">Call Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    24/7 customer support
                  </p>
                  <a href="tel:+15550000000" className="text-primary hover:underline">
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold mb-1">Visit Us</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Main showroom location
                  </p>
                  <p className="text-primary">
                    123 Luxury Drive, Dubai, UAE
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 glass-effect border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="font-orbitron font-bold mb-2 text-lg">Operating Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">By Appointment</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}