import Link from "next/link";
import { Car, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-space-blue border-t border-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan/20 blur-xl rounded-full" />
                <Car className="h-8 w-8 text-cyan relative" />
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan via-cyan to-accent bg-clip-text text-transparent">
                  TRIXON MOTORS
                </div>
                <div className="text-xs text-cyan/60 -mt-1">Global Import Excellence</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner in premium automotive sales and global vehicle imports. 
              Excellence in every transaction since 2015.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 rounded-lg flex items-center justify-center transition-all group">
                <Facebook className="h-4 w-4 text-cyan group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 rounded-lg flex items-center justify-center transition-all group">
                <Twitter className="h-4 w-4 text-cyan group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 rounded-lg flex items-center justify-center transition-all group">
                <Instagram className="h-4 w-4 text-cyan group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 rounded-lg flex items-center justify-center transition-all group">
                <Linkedin className="h-4 w-4 text-cyan group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/#inventory" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Vehicle Inventory
                </Link>
              </li>
              <li>
                <Link href="/#import" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Import Process
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Premium Vehicle Sales
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Global Import Service
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Documentation Assistance
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Quality Inspection
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  Secure Transportation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-cyan mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  123 Automotive Boulevard<br />
                  Tokyo, Japan 100-0001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan shrink-0" />
                <a href="tel:+81123456789" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  +81 12-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan shrink-0" />
                <a href="mailto:info@trixonmotors.com" className="text-sm text-muted-foreground hover:text-cyan transition-colors">
                  info@trixonmotors.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cyan/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Trixon Motors. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-cyan transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-cyan transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-cyan transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}