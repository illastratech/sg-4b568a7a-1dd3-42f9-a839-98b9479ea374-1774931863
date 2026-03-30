import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Car, ArrowLeft, Upload, Plus, X, LogOut, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { vehicleService } from "@/services/vehicleService";
import { authService } from "@/services/authService";
import { SEO } from "@/components/SEO";
import { AdminGuard } from "@/components/AdminGuard";

export default function EditVehicle() {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState("");
  
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    transmission: "automatic",
    fuel_type: "gasoline",
    body_type: "sedan",
    exterior_color: "",
    interior_color: "",
    engine: "",
    horsepower: 0,
    location: "",
    condition: "excellent",
    category: "for_sale",
    status: "available",
    description: "",
    features: [] as string[],
    import_status: "",
    estimated_arrival_date: "",
    vin: "",
  });

  useEffect(() => {
    if (id && typeof id === "string") {
      loadVehicle(id);
    }
  }, [id]);

  const loadVehicle = async (vehicleId: string) => {
    try {
      const vehicle = await vehicleService.getById(vehicleId);
      if (vehicle) {
        setFormData({
          make: vehicle.make,
          model: vehicle.model,
          year: vehicle.year,
          price: vehicle.price,
          mileage: vehicle.mileage,
          transmission: vehicle.transmission || "automatic",
          fuel_type: vehicle.fuel_type || "gasoline",
          body_type: vehicle.body_type || "sedan",
          exterior_color: vehicle.exterior_color || "",
          interior_color: vehicle.interior_color || "",
          engine: vehicle.engine || "",
          horsepower: vehicle.horsepower || 0,
          location: vehicle.location || "",
          condition: vehicle.condition || "excellent",
          category: vehicle.category || "for_sale",
          status: vehicle.status || "available",
          description: vehicle.description || "",
          features: vehicle.features || [],
          import_status: vehicle.import_status || "",
          estimated_arrival_date: vehicle.estimated_arrival_date || "",
          vin: vehicle.vin || "",
        });
        setImageUrls(vehicle.images || []);
      }
    } catch (error) {
      console.error("Error loading vehicle:", error);
    } finally {
      setInitialLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || typeof id !== "string") return;
    
    setLoading(true);

    try {
      const vehicleData = {
        ...formData,
        images: imageUrls,
      };

      await vehicleService.update(id, vehicleData);
      router.push("/admin/vehicles");
    } catch (error) {
      console.error("Error updating vehicle:", error);
      alert("Failed to update vehicle. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const addImageUrl = () => {
    if (newImageUrl.trim()) {
      setImageUrls([...imageUrls, newImageUrl.trim()]);
      setNewImageUrl("");
    }
  };

  const removeImageUrl = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (initialLoading) {
    return (
      <AdminGuard>
        <div className="min-h-screen bg-space flex items-center justify-center">
          <Loader2 className="h-12 w-12 text-cyan animate-spin" />
        </div>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <SEO title="Edit Vehicle" />
      <div className="min-h-screen bg-space">
        <div className="grid-pattern" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-cyan/20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link href="/admin/vehicles">
                    <Button variant="outline" size="sm" className="border-cyan/30">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="p-2 bg-cyan/10 rounded-lg border border-cyan/30">
                    <Car className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Edit Vehicle</h1>
                    <p className="text-sm text-muted-foreground">{formData.year} {formData.make} {formData.model}</p>
                  </div>
                </div>
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

          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <form onSubmit={handleSubmit}>
              <Card className="p-8 bg-card/80 backdrop-blur-sm border-cyan/20 mb-6">
                {/* Basic Information */}
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Car className="h-5 w-5 text-cyan" />
                  Basic Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="make">Make *</Label>
                    <Input
                      id="make"
                      name="make"
                      value={formData.make}
                      onChange={handleInputChange}
                      placeholder="e.g., Toyota"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="model">Model *</Label>
                    <Input
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                      placeholder="e.g., Camry"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="year">Year *</Label>
                    <Input
                      id="year"
                      name="year"
                      type="number"
                      value={formData.year}
                      onChange={handleInputChange}
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g., 25000"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mileage">Mileage (km) *</Label>
                    <Input
                      id="mileage"
                      name="mileage"
                      type="number"
                      value={formData.mileage}
                      onChange={handleInputChange}
                      placeholder="e.g., 50000"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="vin">VIN</Label>
                    <Input
                      id="vin"
                      name="vin"
                      value={formData.vin}
                      onChange={handleInputChange}
                      placeholder="Vehicle Identification Number"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                    />
                  </div>
                </div>

                {/* Technical Specifications */}
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 mt-8">
                  <Car className="h-5 w-5 text-cyan" />
                  Technical Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="transmission">Transmission *</Label>
                    <select
                      id="transmission"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="automatic">Automatic</option>
                      <option value="manual">Manual</option>
                      <option value="cvt">CVT</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="fuel_type">Fuel Type *</Label>
                    <select
                      id="fuel_type"
                      name="fuel_type"
                      value={formData.fuel_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="gasoline">Gasoline</option>
                      <option value="diesel">Diesel</option>
                      <option value="electric">Electric</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="body_type">Body Type *</Label>
                    <select
                      id="body_type"
                      name="body_type"
                      value={formData.body_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="coupe">Coupe</option>
                      <option value="truck">Truck</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="convertible">Convertible</option>
                      <option value="wagon">Wagon</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="engine">Engine</Label>
                    <Input
                      id="engine"
                      name="engine"
                      value={formData.engine}
                      onChange={handleInputChange}
                      placeholder="e.g., 2.5L V6"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="horsepower">Horsepower</Label>
                    <Input
                      id="horsepower"
                      name="horsepower"
                      type="number"
                      value={formData.horsepower}
                      onChange={handleInputChange}
                      placeholder="e.g., 300"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                    />
                  </div>
                  <div>
                    <Label htmlFor="exterior_color">Exterior Color *</Label>
                    <Input
                      id="exterior_color"
                      name="exterior_color"
                      value={formData.exterior_color}
                      onChange={handleInputChange}
                      placeholder="e.g., Black"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="interior_color">Interior Color</Label>
                    <Input
                      id="interior_color"
                      name="interior_color"
                      value={formData.interior_color}
                      onChange={handleInputChange}
                      placeholder="e.g., Beige"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Showroom A, Tokyo"
                      className="bg-background/50 border-cyan/20 focus:border-cyan"
                      required
                    />
                  </div>
                </div>

                {/* Status & Category */}
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 mt-8">
                  <Car className="h-5 w-5 text-cyan" />
                  Status & Category
                </h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <Label htmlFor="condition">Condition *</Label>
                    <select
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="fair">Fair</option>
                      <option value="needs_work">Needs Work</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="for_sale">For Sale</option>
                      <option value="import_service">Import Service</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="status">Status *</Label>
                    <select
                      id="status"
                      name="status"
                      value={formData.status}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-background/50 border border-cyan/20 rounded-md focus:border-cyan focus:outline-none"
                      required
                    >
                      <option value="available">Available</option>
                      <option value="reserved">Reserved</option>
                      <option value="sold">Sold</option>
                      <option value="importing">Importing</option>
                    </select>
                  </div>
                </div>

                {/* Import Information (if applicable) */}
                {formData.category === "import_service" && (
                  <>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2 mt-8">
                      <Car className="h-5 w-5 text-cyan" />
                      Import Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <Label htmlFor="import_status">Import Status</Label>
                        <Input
                          id="import_status"
                          name="import_status"
                          value={formData.import_status}
                          onChange={handleInputChange}
                          placeholder="e.g., In Transit"
                          className="bg-background/50 border-cyan/20 focus:border-cyan"
                        />
                      </div>
                      <div>
                        <Label htmlFor="estimated_arrival_date">Estimated Arrival Date</Label>
                        <Input
                          id="estimated_arrival_date"
                          name="estimated_arrival_date"
                          type="date"
                          value={formData.estimated_arrival_date ? formData.estimated_arrival_date.split('T')[0] : ''}
                          onChange={handleInputChange}
                          className="bg-background/50 border-cyan/20 focus:border-cyan"
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Description */}
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 mt-8">
                  <Car className="h-5 w-5 text-cyan" />
                  Description
                </h2>
                <div className="mb-6">
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter vehicle description..."
                    rows={4}
                    className="bg-background/50 border-cyan/20 focus:border-cyan"
                  />
                </div>

                {/* Images */}
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 mt-8">
                  <Upload className="h-5 w-5 text-cyan" />
                  Images
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Enter image URL (e.g., https://example.com/car.jpg)"
                      className="flex-1 bg-background/50 border-cyan/20 focus:border-cyan"
                    />
                    <Button
                      type="button"
                      onClick={addImageUrl}
                      className="bg-cyan hover:bg-cyan-light text-space"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {imageUrls.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {imageUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Vehicle ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg border border-cyan/20"
                          />
                          <Button
                            type="button"
                            size="sm"
                            variant="destructive"
                            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => removeImageUrl(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-end gap-4">
                <Link href="/admin/vehicles">
                  <Button type="button" variant="outline" className="border-cyan/30">
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-cyan hover:bg-cyan-light text-space"
                >
                  {loading ? "Saving..." : "Update Vehicle"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}