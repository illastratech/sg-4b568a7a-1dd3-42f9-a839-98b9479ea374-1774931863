import Link from "next/link";
import { Car, Shield, Globe, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Car className="h-8 w-8 text-primary group-hover:text-primary/80 transition-colors" />
              <div className="absolute inset-0 blur-xl bg-primary opacity-50 group-hover:opacity-70 transition-opacity" />
            </div>
            <span className="font-orbitron text-2xl font-bold text-glow">AUTO<span className="text-primary">NEXUS</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#inventory" className="text-sm font-medium hover:text-primary transition-colors">
              Inventory
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/#import" className="text-sm font-medium hover:text-primary transition-colors">
              Import
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          <Link href="/admin">
            <Button variant="outline" size="sm" className="gap-2 glow-cyan hover:bg-primary hover:text-primary-foreground transition-all">
              <Settings className="h-4 w-4" />
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}