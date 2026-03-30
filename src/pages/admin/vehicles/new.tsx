import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Car, ArrowLeft, Upload, Save } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";
import { vehicleService, type VehicleInsert } from "@/services/vehicleService";

export default function NewVehicle() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<VehicleInsert>({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuel_type: "Gasoline",
    transmission: "Automatic",
    body_type: "Sedan",
    exterior_color: "",
    interior_color: "",
    location: "",
    condition: "New",
    status: "available",
    category: "for_sale",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await vehicleService.create(formData);
      alert("Vehicle added successfully!");
      router.push("/admin/vehicles");
    } catch (error) {
      console.error("Error creating vehicle:", error);
      alert("Failed to add vehicle. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof VehicleInsert, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEO
        title="Add New Vehicle - Admin"
        description="Add a new vehicle to inventory"
      />
      <div className="min-h-screen bg-background">
        <div className="tech-grid" />
        
        {/* Header */}
        <div className="border-b border-border/50 backdrop-blur-xl bg-background/80">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center gap-3">
              <Link href="/admin/vehicles">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-cyan-600 glow-effect">
                <Car className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-neon-colors">Add New Vehicle</h1>
                <p className="text-xs text-muted-foreground">Fill in vehicle details</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 max-w-4xl relative z-10">
          <form onSubmit={handleSubmit}>
            <Card className="futuristic-card p-8 mb-6">
              <h2 className="text-2xl font-bold text-neon-colors mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="make">Make *</Label>
                  <Input
                    id="make"
                    required
                    value={formData.make}
                    onChange={(e) => handleChange("make", e.target.value)}
                    className="futuristic-border"
                    placeholder="e.g., Toyota, BMW, Tesla"
                  />
                </div>
                <div>
                  <Label htmlFor="model">Model *</Label>
                  <Input
                    id="model"
                    required
                    value={formData.model}
                    onChange={(e) => handleChange("model", e.target.value)}
                    className="futuristic-border"
                    placeholder="e.g., Camry, M5, Model 3"
                  />
                </div>
                <div>
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    type="number"
                    required
                    value={formData.year}
                    onChange={(e) => handleChange("year", parseInt(e.target.value))}
                    className="futuristic-border"
                    min="1900"
                    max={new Date().getFullYear() + 1}
                  />
                </div>
                <div>
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    required
                    value={formData.price}
                    onChange={(e) => handleChange("price", parseFloat(e.target.value))}
                    className="futuristic-border"
                    min="0"
                    step="0.01"
                  />
                </div>
                <div>
                  <Label htmlFor="mileage">Mileage *</Label>
                  <Input
                    id="mileage"
                    type="number"
                    required
                    value={formData.mileage}
                    onChange={(e) => handleChange("mileage", parseInt(e.target.value))}
                    className="futuristic-border"
                    min="0"
                  />
                </div>
                <div>
                  <Label htmlFor="vin">VIN</Label>
                  <Input
                    id="vin"
                    value={formData.vin || ""}
                    onChange={(e) => handleChange("vin", e.target.value)}
                    className="futuristic-border"
                    placeholder="17-character VIN"
                  />
                </div>
                <div>
                  <Label htmlFor="stock_number">Stock Number</Label>
                  <Input
                    id="stock_number"
                    value={formData.stock_number || ""}
                    onChange={(e) => handleChange("stock_number", e.target.value)}
                    className="futuristic-border"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    required
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="futuristic-border"
                    placeholder="e.g., Los Angeles, CA"
                  />
                </div>
              </div>
            </Card>

            <Card className="futuristic-card p-8 mb-6">
              <h2 className="text-2xl font-bold text-neon-colors mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="body_type">Body Type *</Label>
                  <select
                    id="body_type"
                    required
                    value={formData.body_type}
                    onChange={(e) => handleChange("body_type", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Truck">Truck</option>
                    <option value="Van">Van</option>
                    <option value="Convertible">Convertible</option>
                    <option value="Wagon">Wagon</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="fuel_type">Fuel Type *</Label>
                  <select
                    id="fuel_type"
                    required
                    value={formData.fuel_type}
                    onChange={(e) => handleChange("fuel_type", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Gasoline">Gasoline</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Plug-in Hybrid">Plug-in Hybrid</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="transmission">Transmission *</Label>
                  <select
                    id="transmission"
                    required
                    value={formData.transmission}
                    onChange={(e) => handleChange("transmission", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="Automatic">Automatic</option>
                    <option value="Manual">Manual</option>
                    <option value="CVT">CVT</option>
                    <option value="Semi-Automatic">Semi-Automatic</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="condition">Condition *</Label>
                  <select
                    id="condition"
                    required
                    value={formData.condition}
                    onChange={(e) => handleChange("condition", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="exterior_color">Exterior Color *</Label>
                  <Input
                    id="exterior_color"
                    required
                    value={formData.exterior_color}
                    onChange={(e) => handleChange("exterior_color", e.target.value)}
                    className="futuristic-border"
                  />
                </div>
                <div>
                  <Label htmlFor="interior_color">Interior Color *</Label>
                  <Input
                    id="interior_color"
                    required
                    value={formData.interior_color}
                    onChange={(e) => handleChange("interior_color", e.target.value)}
                    className="futuristic-border"
                  />
                </div>
                <div>
                  <Label htmlFor="engine">Engine</Label>
                  <Input
                    id="engine"
                    value={formData.engine || ""}
                    onChange={(e) => handleChange("engine", e.target.value)}
                    className="futuristic-border"
                    placeholder="e.g., 2.0L Turbo I4"
                  />
                </div>
                <div>
                  <Label htmlFor="horsepower">Horsepower</Label>
                  <Input
                    id="horsepower"
                    type="number"
                    value={formData.horsepower || ""}
                    onChange={(e) => handleChange("horsepower", parseInt(e.target.value))}
                    className="futuristic-border"
                    min="0"
                  />
                </div>
              </div>
            </Card>

            <Card className="futuristic-card p-8 mb-6">
              <h2 className="text-2xl font-bold text-neon-colors mb-6">Sales Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => handleChange("category", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="for_sale">For Sale</option>
                    <option value="import_service">Import Service</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="status">Status *</Label>
                  <select
                    id="status"
                    required
                    value={formData.status}
                    onChange={(e) => handleChange("status", e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="available">Available</option>
                    <option value="reserved">Reserved</option>
                    <option value="sold">Sold</option>
                    <option value="importing">Importing</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="futuristic-card p-8 mb-6">
              <h2 className="text-2xl font-bold text-neon-colors mb-6">Additional Details</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description || ""}
                    onChange={(e) => handleChange("description", e.target.value)}
                    className="futuristic-border min-h-32"
                    placeholder="Detailed vehicle description..."
                  />
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={loading}
                className="futuristic-button"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? "Saving..." : "Save Vehicle"}
              </Button>
              <Link href="/admin/vehicles">
                <Button type="button" variant="outline" className="futuristic-border">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}