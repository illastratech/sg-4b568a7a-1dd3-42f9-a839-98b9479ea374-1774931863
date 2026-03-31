import Link from "next/link";
import { Car, Shield, Globe, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-space-blue/90 backdrop-blur-lg border-b border-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan/20 blur-xl group-hover:bg-cyan/30 transition-all rounded-full" />
              <Car className="h-8 w-8 text-cyan relative" />
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan via-cyan to-accent bg-clip-text text-transparent">
                TRIXON MOTORS
              </div>
              <div className="text-xs text-cyan/60 -mt-1">Global Import Excellence</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-sm font-medium text-cyan/80 hover:text-cyan transition-colors flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Services
            </Link>
            <Link href="/#inventory" className="text-sm font-medium text-cyan/80 hover:text-cyan transition-colors flex items-center gap-2">
              <Car className="h-4 w-4" />
              Inventory
            </Link>
            <Link href="/#import" className="text-sm font-medium text-cyan/80 hover:text-cyan transition-colors flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Import Process
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-cyan/80 hover:text-cyan transition-colors">
              Contact
            </Link>
          </div>

          {/* Admin Button */}
          <Link href="/admin">
            <Button className="bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 text-cyan">
              <Settings className="h-4 w-4 mr-2" />
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}