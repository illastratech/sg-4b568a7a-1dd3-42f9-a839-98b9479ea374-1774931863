import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Plus, Settings, TrendingUp, Package, MessageSquare, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { vehicleService } from "@/services/vehicleService";
import { contactService } from "@/services/contactService";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    vehicles: { total: 0, forSale: 0, importing: 0, sold: 0 },
    contacts: { total: 0, new: 0, inProgress: 0, resolved: 0 },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [vehicleStats, contactStats] = await Promise.all([
        vehicleService.getStats(),
        contactService.getStats(),
      ]);
      
      setStats({
        vehicles: vehicleStats,
        contacts: contactStats,
      });
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: "Total Vehicles",
      value: stats.vehicles.total,
      icon: Package,
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "For Sale",
      value: stats.vehicles.forSale,
      icon: Car,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Importing",
      value: stats.vehicles.importing,
      icon: TrendingUp,
      gradient: "from-orange-500 to-amber-600",
    },
    {
      title: "Contact Inquiries",
      value: stats.contacts.new,
      icon: MessageSquare,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <>
      <SEO
        title="Admin Dashboard - Vehicle Management"
        description="Manage vehicles, inventory, and customer inquiries"
      />
      <div className="min-h-screen bg-background">
        <div className="tech-grid" />
        
        {/* Header */}
        <div className="border-b border-border/50 backdrop-blur-xl bg-background/80">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-cyan-600 glow-effect">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-neon-colors">Admin Panel</h1>
                  <p className="text-xs text-muted-foreground">Vehicle & Service Management</p>
                </div>
              </div>
              <Link href="/">
                <Button variant="outline" className="futuristic-border">
                  Back to Site
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="futuristic-card p-6 hover-lift">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.gradient} glow-effect`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-neon-colors">
                      {loading ? "..." : stat.value}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="futuristic-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-cyan-600 glow-effect">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neon-colors">Vehicle Management</h2>
                  <p className="text-muted-foreground">Add, edit, and manage your inventory</p>
                </div>
              </div>
              <div className="space-y-3">
                <Link href="/admin/vehicles/new">
                  <Button className="w-full futuristic-button group">
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Vehicle
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/admin/vehicles">
                  <Button variant="outline" className="w-full futuristic-border">
                    View All Vehicles
                  </Button>
                </Link>
              </div>
            </Card>

            <Card className="futuristic-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 glow-effect">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-neon-colors">Contact Inquiries</h2>
                  <p className="text-muted-foreground">Manage customer messages</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-2xl font-bold text-primary">{stats.contacts.new}</p>
                  <p className="text-xs text-muted-foreground">New</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <p className="text-2xl font-bold text-orange-500">{stats.contacts.inProgress}</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <p className="text-2xl font-bold text-green-500">{stats.contacts.resolved}</p>
                  <p className="text-xs text-muted-foreground">Resolved</p>
                </div>
              </div>
              <Button variant="outline" className="w-full futuristic-border">
                View Inquiries (Coming Soon)
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}