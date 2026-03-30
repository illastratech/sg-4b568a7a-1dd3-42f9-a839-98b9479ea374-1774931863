import { useState } from "react";
import { Car, Zap, MapPin, Gauge, Calendar, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Vehicle {
  id: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  mileage: number;
  location: string;
  image: string;
  type: "sale" | "import";
  featured?: boolean;
}

const mockVehicles: Vehicle[] = [
  {
    id: "1",
    name: "Model S Plaid",
    brand: "Tesla",
    year: 2024,
    price: 129990,
    mileage: 1200,
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80",
    type: "sale",
    featured: true
  },
  {
    id: "2",
    name: "911 Turbo S",
    brand: "Porsche",
    year: 2024,
    price: 235000,
    mileage: 500,
    location: "Stuttgart, Germany",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80",
    type: "import",
    featured: true
  },
  {
    id: "3",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    year: 2023,
    price: 517770,
    mileage: 2100,
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=800&q=80",
    type: "import"
  },
  {
    id: "4",
    name: "AMG GT Black Series",
    brand: "Mercedes-Benz",
    year: 2024,
    price: 389000,
    mileage: 800,
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    type: "sale"
  }
];

export function VehicleInventory() {
  const [filter, setFilter] = useState<"all" | "sale" | "import">("all");
  
  const filteredVehicles = filter === "all" 
    ? mockVehicles 
    : mockVehicles.filter(v => v.type === filter);

  return (
    <section id="inventory" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
            ELITE <span className="text-primary text-glow">COLLECTION</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Handpicked premium vehicles from around the globe
          </p>
          
          <div className="inline-flex gap-2 p-2 glass-effect rounded-lg border border-border">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "bg-primary text-primary-foreground" : ""}
            >
              All Vehicles
            </Button>
            <Button
              variant={filter === "sale" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("sale")}
              className={filter === "sale" ? "bg-primary text-primary-foreground" : ""}
            >
              For Sale
            </Button>
            <Button
              variant={filter === "import" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("import")}
              className={filter === "import" ? "bg-primary text-primary-foreground" : ""}
            >
              Import Service
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <Card 
              key={vehicle.id}
              className="group overflow-hidden bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.brand} ${vehicle.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {vehicle.featured && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0 gap-1">
                    <Zap className="h-3 w-3" />
                    Featured
                  </Badge>
                )}
                
                <Badge className="absolute top-4 right-4 glass-effect border-primary/30">
                  {vehicle.type === "sale" ? "For Sale" : "Import Service"}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-orbitron text-2xl font-bold text-primary mb-1">
                      {vehicle.brand}
                    </h3>
                    <p className="text-lg text-foreground font-semibold">
                      {vehicle.name}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-orbitron font-bold text-primary">
                      ${vehicle.price.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span>{vehicle.mileage.toLocaleString()} mi</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="truncate">{vehicle.location.split(",")[0]}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-cyan group/btn">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}