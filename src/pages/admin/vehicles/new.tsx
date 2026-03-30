import { useState } from "react";
import Link from "next/link";
import { Car, ArrowLeft, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { SEO } from "@/components/SEO";

export default function NewVehicle() {
  const [formData, setFormData] = useState({
    brand: "",
    name: "",
    year: new Date().getFullYear(),
    price: "",
    mileage: "",
    location: "",
    type: "sale",
    status: "active",
    description: "",
    specifications: "",
    image: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Vehicle data:", formData);
    // This is where you would connect to Supabase or your backend
    alert("Vehicle added successfully! (Demo mode - connect Supabase to persist data)");
  };

  return (
    <>
      <SEO 
        title="Add New Vehicle - AutoNexus Admin"
        description="Add a new vehicle to your inventory"
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
              
              <Link href="/admin/vehicles">
                <Button variant="outline" size="sm" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Vehicles
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="font-orbitron text-4xl font-bold mb-2">
              ADD NEW <span className="text-primary text-glow">VEHICLE</span>
            </h1>
            <p className="text-muted-foreground">Fill in the details to add a vehicle to your inventory</p>
          </div>

          <form onSubmit={handleSubmit}>
            <Card className="p-8 glass-effect border-border mb-6">
              <h2 className="font-orbitron text-xl font-bold mb-6 text-primary">Basic Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="brand" className="mb-2 block">Brand *</Label>
                  <Input
                    id="brand"
                    placeholder="e.g., Tesla, Porsche, Lamborghini"
                    className="bg-secondary border-border"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="name" className="mb-2 block">Model Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Model S Plaid, 911 Turbo S"
                    className="bg-secondary border-border"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <Label htmlFor="year" className="mb-2 block">Year *</Label>
                  <Input
                    id="year"
                    type="number"
                    placeholder="2024"
                    className="bg-secondary border-border"
                    value={formData.year}
                    onChange={(e) => setFormData({...formData, year: parseInt(e.target.value)})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="price" className="mb-2 block">Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="129990"
                    className="bg-secondary border-border"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="mileage" className="mb-2 block">Mileage *</Label>
                  <Input
                    id="mileage"
                    type="number"
                    placeholder="1200"
                    className="bg-secondary border-border"
                    value={formData.mileage}
                    onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <Label htmlFor="location" className="mb-2 block">Location *</Label>
                  <Input
                    id="location"
                    placeholder="Dubai, UAE"
                    className="bg-secondary border-border"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="type" className="mb-2 block">Type *</Label>
                  <select
                    id="type"
                    className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="sale">For Sale</option>
                    <option value="import">Import Service</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="description" className="mb-2 block">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Detailed description of the vehicle..."
                  className="bg-secondary border-border min-h-32"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <Label htmlFor="specifications" className="mb-2 block">Technical Specifications</Label>
                <Textarea
                  id="specifications"
                  placeholder="Engine, transmission, features..."
                  className="bg-secondary border-border min-h-24"
                  value={formData.specifications}
                  onChange={(e) => setFormData({...formData, specifications: e.target.value})}
                />
              </div>
            </Card>

            <Card className="p-8 glass-effect border-border mb-6">
              <h2 className="font-orbitron text-xl font-bold mb-6 text-primary">Vehicle Image</h2>
              
              <div className="mb-4">
                <Label htmlFor="image" className="mb-2 block">Image URL</Label>
                <Input
                  id="image"
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  className="bg-secondary border-border"
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Enter an image URL or use the upload feature (requires backend setup)
                </p>
              </div>

              <Button type="button" variant="outline" className="gap-2 border-primary/50 hover:bg-primary/10">
                <Upload className="h-4 w-4" />
                Upload Image (Coming Soon)
              </Button>
            </Card>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90 glow-cyan gap-2">
                <Save className="h-5 w-5" />
                Save Vehicle
              </Button>
              <Link href="/admin/vehicles" className="flex-1">
                <Button type="button" variant="outline" className="w-full border-border">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>

          <Card className="mt-6 p-6 glass-effect border-primary/30 bg-primary/5">
            <h3 className="font-orbitron font-bold mb-2 text-primary">💡 Note: Demo Mode</h3>
            <p className="text-sm text-muted-foreground">
              This form is currently in demo mode. To persist vehicle data, you need to:
            </p>
            <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
              <li>Enable Supabase integration (click "Enable Supabase" in the chat)</li>
              <li>Create a vehicles table in your database</li>
              <li>Connect the form submission to the Supabase client</li>
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}