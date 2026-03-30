import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Plus, Search, Edit, Trash2, ArrowLeft, LogOut } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { vehicleService } from "@/services/vehicleService";
import type { Tables } from "@/integrations/supabase/types";
import { authService } from "@/services/authService";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { AdminGuard } from "@/components/AdminGuard";

type Vehicle = Tables<"vehicles">;

export default function VehiclesManagement() {
  const router = useRouter();
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const data = await vehicleService.getAll();
      setVehicles(data);
    } catch (error) {
      console.error("Error loading vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this vehicle?")) return;

    try {
      await vehicleService.delete(id);
      setVehicles(vehicles.filter(v => v.id !== id));
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      alert("Failed to delete vehicle");
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

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = 
      vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.year.toString().includes(searchQuery);
    
    const matchesStatus = filterStatus === "all" || vehicle.category === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminGuard>
      <SEO title="Manage Vehicles" />
      <div className="min-h-screen bg-space">
        <div className="grid-pattern" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-cyan/20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link href="/admin">
                    <Button variant="outline" size="sm" className="border-cyan/30">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="p-2 bg-cyan/10 rounded-lg border border-cyan/30">
                    <Car className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Manage Vehicles</h1>
                    <p className="text-sm text-muted-foreground">{filteredVehicles.length} vehicles found</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href="/admin/vehicles/new">
                    <Button className="bg-cyan hover:bg-cyan-light text-space">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Vehicle
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-destructive/30 text-destructive hover:bg-destructive/10"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by make, model, or year..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/80 border-cyan/20 focus:border-cyan"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  className={filterStatus === "all" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "for_sale" ? "default" : "outline"}
                  onClick={() => setFilterStatus("for_sale")}
                  className={filterStatus === "for_sale" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  For Sale
                </Button>
                <Button
                  variant={filterStatus === "import_service" ? "default" : "outline"}
                  onClick={() => setFilterStatus("import_service")}
                  className={filterStatus === "import_service" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  Import
                </Button>
              </div>
            </div>

            {/* Vehicles Grid */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan border-r-transparent mb-4"></div>
                <p className="text-muted-foreground">Loading vehicles...</p>
              </div>
            ) : filteredVehicles.length === 0 ? (
              <Card className="p-12 text-center bg-card/80 backdrop-blur-sm border-cyan/20">
                <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">No vehicles found</h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery || filterStatus !== "all" 
                    ? "Try adjusting your filters" 
                    : "Get started by adding your first vehicle"}
                </p>
                <Link href="/admin/vehicles/new">
                  <Button className="bg-cyan hover:bg-cyan-light text-space">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Vehicle
                  </Button>
                </Link>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="bg-card/80 backdrop-blur-sm border-cyan/20 overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-cyan/20 to-space relative overflow-hidden">
                      {vehicle.images && vehicle.images.length > 0 ? (
                        <img
                          src={vehicle.images[0]}
                          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Car className="h-16 w-16 text-cyan/30" />
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          vehicle.category === "for_sale" 
                            ? "bg-green-500/20 border border-green-500/50 text-green-400"
                            : "bg-amber/20 border border-amber/50 text-amber"
                        }`}>
                          {vehicle.category === "for_sale" ? "For Sale" : "Import Service"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-2xl font-bold text-cyan mb-4">
                        ${vehicle.price.toLocaleString()}
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
                        <div>Mileage: {vehicle.mileage.toLocaleString()} km</div>
                        <div>Transmission: {vehicle.transmission}</div>
                        <div>Fuel: {vehicle.fuel_type}</div>
                        <div>Status: {vehicle.status}</div>
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/admin/vehicles/edit/${vehicle.id}`} className="flex-1">
                          <Button variant="outline" className="w-full border-cyan/30">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          className="border-destructive/30 text-destructive hover:bg-destructive/10"
                          onClick={() => handleDelete(vehicle.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}