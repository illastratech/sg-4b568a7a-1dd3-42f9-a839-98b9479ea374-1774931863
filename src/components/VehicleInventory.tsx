import { useState, useEffect } from "react";
import { Car, Zap, MapPin, Gauge, Calendar, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { vehicleService, type Vehicle } from "@/services/vehicleService";
import Link from "next/link";

export function VehicleInventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    loadVehicles();
  }, [activeFilter]);

  const loadVehicles = async () => {
    setLoading(true);
    try {
      const filters: any = {};
      if (activeFilter === "for_sale") filters.category = "for_sale";
      if (activeFilter === "import") filters.category = "import_service";

      const data = await vehicleService.getAll(filters);
      setVehicles(data);
    } catch (error) {
      console.error("Error loading vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  const filters = [
  { id: "all", label: "All Vehicles" },
  { id: "for_sale", label: "For Sale" },
  { id: "import", label: "Import Service" }];


  return (
    <section className="py-20 relative" style={{ backgroundColor: "#e5e5e5", backgroundImage: "none" }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-2 rounded-lg bg-primary/10 border border-primary/30 mb-4">
            <Car className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon-colors mb-4">
            Elite Vehicle Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Handpicked vehicles from around the world, ready for immediate delivery or import
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) =>
          <Button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            variant={activeFilter === filter.id ? "default" : "outline"}
            className={
            activeFilter === filter.id ?
            "futuristic-button" :
            "futuristic-border"
            }>
            
              {filter.label}
            </Button>
          )}
        </div>

        {/* Vehicles Grid */}
        {loading ?
        <div className="text-center py-12">
            <p className="text-muted-foreground">Loading vehicles...</p>
          </div> :
        vehicles.length === 0 ?
        <Card className="futuristic-card p-12 text-center">
            <Car className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">No vehicles available</h3>
            <p className="text-muted-foreground">Check back soon for new arrivals!</p>
          </Card> :

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) =>
          <Link key={vehicle.id} href={`/vehicles/${vehicle.id}`}>
                <Card className="group overflow-hidden bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border-cyan/20 hover:border-cyan/40 transition-all cursor-pointer h-full">
                  {/* Vehicle Image */}
                  <div className="relative h-48 bg-card/50 border-b border-border/50">
                    {vehicle.images && vehicle.images.length > 0 ?
                <img
                  src={vehicle.images[0]}
                  alt={`${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover" /> :


                <div className="flex items-center justify-center h-full">
                        <Car className="w-16 h-16 text-muted-foreground opacity-30" />
                      </div>
                }
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90 text-white border-0">
                        {vehicle.condition}
                      </Badge>
                    </div>
                    {vehicle.category === "import_service" &&
                <div className="absolute top-4 left-4">
                        <Badge className="bg-orange-500/90 text-white border-0">
                          Import Service
                        </Badge>
                      </div>
                }
                  </div>

                  {/* Vehicle Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-neon-colors mb-1">
                        {vehicle.year} {vehicle.make} {vehicle.model}
                      </h3>
                      <p className="text-sm text-muted-foreground">{vehicle.location}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Gauge className="w-4 h-4" />
                        <span>{vehicle.mileage.toLocaleString()} mi</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Zap className="w-4 h-4" />
                        <span>{vehicle.fuel_type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{vehicle.body_type}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan">${vehicle.price.toLocaleString()}</span>
                        <Button
                      size="sm"
                      className="bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 group-hover:bg-cyan group-hover:text-background transition-colors">
                      
                          View Details
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
          )}
          </div>
        }
      </div>
    </section>);

}