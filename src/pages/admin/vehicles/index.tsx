import { useState } from "react";
import Link from "next/link";
import { Car, Plus, Search, Edit, Trash2, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";

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
  status: "active" | "sold" | "pending";
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
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80",
    type: "sale",
    status: "active"
  },
  {
    id: "2",
    name: "911 Turbo S",
    brand: "Porsche",
    year: 2024,
    price: 235000,
    mileage: 500,
    location: "Stuttgart, Germany",
    image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=400&q=80",
    type: "import",
    status: "active"
  },
  {
    id: "3",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    year: 2023,
    price: 517770,
    mileage: 2100,
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?w=400&q=80",
    type: "import",
    status: "pending"
  }
];

export default function VehiclesManagement() {
  const [vehicles] = useState<Vehicle[]>(mockVehicles);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "sale" | "import">("all");

  const filteredVehicles = vehicles.filter(v => {
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "all" || v.type === filterType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-primary/10 text-primary border-primary/30";
      case "sold": return "bg-accent/10 text-accent border-accent/30";
      case "pending": return "bg-muted/10 text-muted-foreground border-muted/30";
      default: return "";
    }
  };

  return (
    <>
      <SEO 
        title="Vehicle Management - AutoNexus Admin"
        description="Manage your vehicle inventory"
      />
      <div className="min-h-screen bg-background">
        <nav className="border-b border-border glass-effect">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/admin" className="flex items-center gap-3">
                <Car className="h-8 w-8 text-primary" />
                <span className="font-orbitron text-2xl font-bold">
                  AUTO<span className="text-primary">NEXUS</span>
                  <span className="text-sm text-muted-foreground ml-2">Admin</span>
                </span>
              </Link>
              
              <Link href="/admin">
                <Button variant="outline" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-orbitron text-4xl font-bold mb-2">
                VEHICLE <span className="text-primary text-glow">MANAGEMENT</span>
              </h1>
              <p className="text-muted-foreground">Add and manage your vehicle inventory</p>
            </div>
            
            <Link href="/admin/vehicles/new">
              <Button className="bg-primary hover:bg-primary/90 glow-cyan gap-2">
                <Plus className="h-5 w-5" />
                Add Vehicle
              </Button>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search vehicles by name or brand..." 
                className="pl-10 bg-secondary border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 glass-effect p-2 rounded-lg border border-border">
              <Button
                variant={filterType === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilterType("all")}
                className={filterType === "all" ? "bg-primary text-primary-foreground" : ""}
              >
                All
              </Button>
              <Button
                variant={filterType === "sale" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilterType("sale")}
                className={filterType === "sale" ? "bg-primary text-primary-foreground" : ""}
              >
                For Sale
              </Button>
              <Button
                variant={filterType === "import" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilterType("import")}
                className={filterType === "import" ? "bg-primary text-primary-foreground" : ""}
              >
                Import
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="p-6 glass-effect border-border hover:border-primary/50 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.brand} ${vehicle.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-orbitron text-xl font-bold text-primary mb-1">
                          {vehicle.brand} {vehicle.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {vehicle.year} • {vehicle.mileage.toLocaleString()} miles • {vehicle.location}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-orbitron font-bold text-primary">
                          ${vehicle.price.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Badge className={getStatusColor(vehicle.status)}>
                        {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                      </Badge>
                      <Badge variant="outline" className="border-primary/30">
                        {vehicle.type === "sale" ? "For Sale" : "Import Service"}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Link href={`/admin/vehicles/${vehicle.id}/edit`}>
                        <Button variant="outline" size="sm" className="gap-2 border-primary/50 hover:bg-primary/10">
                          <Edit className="h-4 w-4" />
                          Edit
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="gap-2 border-destructive/50 hover:bg-destructive/10 text-destructive">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <Card className="p-12 glass-effect border-border text-center">
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-orbitron text-xl font-bold mb-2">No vehicles found</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? "Try adjusting your search" : "Start by adding your first vehicle"}
              </p>
              <Link href="/admin/vehicles/new">
                <Button className="bg-primary hover:bg-primary/90 glow-cyan gap-2">
                  <Plus className="h-5 w-5" />
                  Add Vehicle
                </Button>
              </Link>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}