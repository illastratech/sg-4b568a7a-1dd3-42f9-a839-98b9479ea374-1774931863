import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Plus, Settings, Users, MessageSquare, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { vehicleService } from "@/services/vehicleService";
import { contactService } from "@/services/contactService";
import { authService } from "@/services/authService";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { AdminGuard } from "@/components/AdminGuard";

export default function AdminDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState({
    total: 0,
    forSale: 0,
    importing: 0,
    sold: 0,
  });
  const [contactStats, setContactStats] = useState({
    total: 0,
    new: 0,
    inProgress: 0,
    resolved: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [vehicleStats, contactStatsData] = await Promise.all([
        vehicleService.getStats(),
        contactService.getStats(),
      ]);
      setStats(vehicleStats);
      setContactStats(contactStatsData);
    } catch (error) {
      console.error("Error loading stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AdminGuard>
      <SEO title="Admin Dashboard" />
      <div className="min-h-screen bg-space">
        <div className="grid-pattern" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-cyan/20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan/10 rounded-lg border border-cyan/30">
                    <Car className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Admin Dashboard</h1>
                    <p className="text-sm text-muted-foreground">Manage your car inventory</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="/">
                    <Button variant="outline" className="border-cyan/30">
                      View Website
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-destructive/30 text-destructive hover:bg-destructive/10"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <Car className="h-8 w-8 text-cyan" />
                  <div className="text-3xl font-bold text-cyan">{stats.total}</div>
                </div>
                <div className="text-sm text-muted-foreground">Total Vehicles</div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <Car className="h-8 w-8 text-green-500" />
                  <div className="text-3xl font-bold text-green-500">{stats.forSale}</div>
                </div>
                <div className="text-sm text-muted-foreground">For Sale</div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <Car className="h-8 w-8 text-amber" />
                  <div className="text-3xl font-bold text-amber">{stats.importing}</div>
                </div>
                <div className="text-sm text-muted-foreground">Importing</div>
              </Card>

              <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20">
                <div className="flex items-center justify-between mb-4">
                  <MessageSquare className="h-8 w-8 text-cyan" />
                  <div className="text-3xl font-bold text-cyan">{contactStats.total}</div>
                </div>
                <div className="text-sm text-muted-foreground">Contact Inquiries</div>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/admin/vehicles/new">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20 hover:border-cyan/50 transition-colors cursor-pointer h-full">
                  <Plus className="h-10 w-10 text-cyan mb-4" />
                  <h3 className="text-xl font-bold mb-2">Add New Vehicle</h3>
                  <p className="text-muted-foreground text-sm">
                    Add a new vehicle to your inventory
                  </p>
                </Card>
              </Link>

              <Link href="/admin/vehicles">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20 hover:border-cyan/50 transition-colors cursor-pointer h-full">
                  <Car className="h-10 w-10 text-cyan mb-4" />
                  <h3 className="text-xl font-bold mb-2">Manage Vehicles</h3>
                  <p className="text-muted-foreground text-sm">
                    View and edit your vehicle inventory
                  </p>
                </Card>
              </Link>

              <Link href="/admin/contacts">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20 hover:border-cyan/50 transition-colors cursor-pointer h-full">
                  <MessageSquare className="h-10 w-10 text-cyan mb-4" />
                  <h3 className="text-xl font-bold mb-2">Contact Inquiries</h3>
                  <p className="text-muted-foreground text-sm">
                    Manage customer contact requests
                  </p>
                  <div className="flex gap-2 mt-4">
                    <span className="px-2 py-1 bg-cyan/10 border border-cyan/30 rounded text-xs text-cyan">
                      {contactStats.new} New
                    </span>
                    <span className="px-2 py-1 bg-amber/10 border border-amber/30 rounded text-xs text-amber">
                      {contactStats.inProgress} In Progress
                    </span>
                  </div>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}