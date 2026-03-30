import Link from "next/link";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Car className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
                <div className="absolute inset-0 blur-xl bg-primary opacity-50" />
              </div>
              <span className="font-orbitron text-2xl font-bold text-glow">
                AUTO<span className="text-primary">NEXUS</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your gateway to premium automotive excellence. Combining cutting-edge technology 
              with world-class service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group">
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group">
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group">
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/10 transition-colors group">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#inventory" className="text-muted-foreground hover:text-primary transition-colors">
                  Vehicle Inventory
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#import" className="text-muted-foreground hover:text-primary transition-colors">
                  Import Process
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">Premium Vehicle Sales</li>
              <li className="text-muted-foreground">Global Import Services</li>
              <li className="text-muted-foreground">Quality Inspection</li>
              <li className="text-muted-foreground">Secure Shipping</li>
              <li className="text-muted-foreground">Documentation Support</li>
              <li className="text-muted-foreground">After-Sales Care</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-orbitron font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Luxury Drive<br />Dubai, UAE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+15550000000" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (555) 000-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contact@autonexus.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@autonexus.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 AutoNexus. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}