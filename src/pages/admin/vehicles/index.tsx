import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Plus, Search, Filter, Edit, Trash2, Eye, ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { vehicleService, type Vehicle } from "@/services/vehicleService";

export default function VehiclesManagement() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    loadVehicles();
  }, [categoryFilter, statusFilter]);

  const loadVehicles = async () => {
    setLoading(true);
    try {
      const filters: any = {};
      if (categoryFilter !== "all") filters.category = categoryFilter;
      if (statusFilter !== "all") filters.status = statusFilter;
      
      const data = await vehicleService.getAll(filters);
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
      await loadVehicles();
    } catch (error) {
      console.error("Error deleting vehicle:", error);
      alert("Failed to delete vehicle");
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const search = searchQuery.toLowerCase();
    return (
      vehicle.make.toLowerCase().includes(search) ||
      vehicle.model.toLowerCase().includes(search) ||
      vehicle.vin?.toLowerCase().includes(search) ||
      vehicle.stock_number?.toLowerCase().includes(search)
    );
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", className: string }> = {
      available: { variant: "default", className: "bg-green-500/20 text-green-500 border-green-500/50" },
      sold: { variant: "secondary", className: "bg-gray-500/20 text-gray-400 border-gray-500/50" },
      importing: { variant: "outline", className: "bg-orange-500/20 text-orange-500 border-orange-500/50" },
      reserved: { variant: "outline", className: "bg-blue-500/20 text-blue-500 border-blue-500/50" },
    };
    const config = variants[status] || variants.available;
    return <Badge variant={config.variant} className={config.className}>{status}</Badge>;
  };

  return (
    <>
      <SEO
        title="Vehicle Management - Admin"
        description="Manage vehicle inventory"
      />
      <div className="min-h-screen bg-background">
        <div className="tech-grid" />
        
        {/* Header */}
        <div className="border-b border-border/50 backdrop-blur-xl bg-background/80">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link href="/admin">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-cyan-600 glow-effect">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-neon-colors">Vehicle Management</h1>
                  <p className="text-xs text-muted-foreground">{vehicles.length} vehicles in inventory</p>
                </div>
              </div>
              <Link href="/admin/vehicles/new">
                <Button className="futuristic-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vehicle
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          {/* Filters */}
          <Card className="futuristic-card p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by make, model, VIN, or stock #..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 futuristic-border"
                />
              </div>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Categories</option>
                <option value="for_sale">For Sale</option>
                <option value="import_service">Import Service</option>
              </select>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="sold">Sold</option>
                <option value="importing">Importing</option>
                <option value="reserved">Reserved</option>
              </select>
            </div>
          </Card>

          {/* Vehicles List */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading vehicles...</p>
            </div>
          ) : filteredVehicles.length === 0 ? (
            <Card className="futuristic-card p-12 text-center">
              <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
              <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? "Try adjusting your search filters" : "Start by adding your first vehicle"}
              </p>
              <Link href="/admin/vehicles/new">
                <Button className="futuristic-button">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Vehicle
                </Button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredVehicles.map((vehicle) => (
                <Card key={vehicle.id} className="futuristic-card p-6 hover-lift">
                  <div className="flex items-start gap-6">
                    {/* Vehicle Image */}
                    <div className="w-48 h-32 rounded-lg bg-card/50 border border-border/50 flex items-center justify-center flex-shrink-0">
                      {vehicle.images && vehicle.images.length > 0 ? (
                        <img
                          src={vehicle.images[0]}
                          alt={`${vehicle.make} ${vehicle.model}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <Car className="w-12 h-12 text-muted-foreground opacity-30" />
                      )}
                    </div>

                    {/* Vehicle Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-neon-colors mb-1">
                            {vehicle.year} {vehicle.make} {vehicle.model}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{vehicle.stock_number || vehicle.vin}</span>
                            <span>•</span>
                            <span>{vehicle.location}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary mb-1">
                            ${vehicle.price.toLocaleString()}
                          </p>
                          {getStatusBadge(vehicle.status || "available")}
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Mileage</p>
                          <p className="font-semibold">{vehicle.mileage.toLocaleString()} mi</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Transmission</p>
                          <p className="font-semibold">{vehicle.transmission}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Fuel Type</p>
                          <p className="font-semibold">{vehicle.fuel_type}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Condition</p>
                          <p className="font-semibold">{vehicle.condition}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button size="sm" variant="outline" className="futuristic-border">
                          <Eye className="w-4 h-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="futuristic-border">
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="futuristic-border text-red-500 border-red-500/50 hover:bg-red-500/10"
                          onClick={() => handleDelete(vehicle.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}