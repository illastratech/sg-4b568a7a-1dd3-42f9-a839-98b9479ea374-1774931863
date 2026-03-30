import { useState } from "react";
import Link from "next/link";
import { Car, Plus, Settings, LogOut, BarChart3, Package, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SEO } from "@/components/SEO";

export default function AdminDashboard() {
  const [stats] = useState({
    totalVehicles: 47,
    forSale: 28,
    importService: 19,
    pendingInquiries: 12
  });

  return (
    <>
      <SEO 
        title="Admin Dashboard - AutoNexus"
        description="Manage your automotive inventory and services"
      />
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border glass-effect">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Car className="h-8 w-8 text-primary" />
                <span className="font-orbitron text-2xl font-bold">
                  AUTO<span className="text-primary">NEXUS</span>
                  <span className="text-sm text-muted-foreground ml-2">Admin</span>
                </span>
              </Link>
              
              <Button variant="outline" size="sm" className="gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="font-orbitron text-4xl font-bold mb-2">
              ADMIN <span className="text-primary text-glow">DASHBOARD</span>
            </h1>
            <p className="text-muted-foreground">Manage your inventory and services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Package className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Vehicles</p>
                  <p className="text-3xl font-orbitron font-bold text-primary">{stats.totalVehicles}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Car className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">For Sale</p>
                  <p className="text-3xl font-orbitron font-bold text-accent">{stats.forSale}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Import Service</p>
                  <p className="text-3xl font-orbitron font-bold text-primary">{stats.importService}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 glass-effect border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <FileText className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Inquiries</p>
                  <p className="text-3xl font-orbitron font-bold text-accent">{stats.pendingInquiries}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/admin/vehicles">
              <Card className="group p-8 glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Car className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-orbitron text-xl font-bold">Vehicle Management</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Add, edit, and manage your vehicle inventory
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 glow-cyan">
                  Manage Vehicles
                </Button>
              </Card>
            </Link>

            <Card className="group p-8 glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Settings className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-orbitron text-xl font-bold">Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Configure services and pricing options
              </p>
              <Button variant="outline" className="w-full border-accent/50 hover:bg-accent/10">
                Manage Services
              </Button>
            </Card>

            <Card className="group p-8 glass-effect border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-orbitron text-xl font-bold">Inquiries</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                View and respond to customer inquiries
              </p>
              <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                View Inquiries
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}