import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ArrowLeft, Calendar, Gauge, Zap, MapPin, Shield, Check, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { vehicleService, type Vehicle } from "@/services/vehicleService";
import { SEO } from "@/components/SEO";

export default function VehicleDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [vehicle, setVehicle] = useState<Vehicle | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) {
      loadVehicle();
    }
  }, [id]);

  const loadVehicle = async () => {
    try {
      const data = await vehicleService.getById(id as string);
      setVehicle(data);
    } catch (error) {
      console.error("Error loading vehicle:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <SEO title="Loading..." />
        <div className="min-h-screen bg-gradient-to-b from-background to-space-blue">
          <Navigation />
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan"></div>
              <p className="mt-4 text-muted-foreground">Loading vehicle details...</p>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!vehicle) {
    return (
      <>
        <SEO title="Vehicle Not Found" />
        <div className="min-h-screen bg-gradient-to-b from-background to-space-blue">
          <Navigation />
          <div className="container mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Vehicle Not Found</h1>
              <p className="text-muted-foreground mb-8">The vehicle you're looking for doesn't exist.</p>
              <Link href="/">
                <Button className="bg-cyan hover:bg-cyan/90">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  const images = vehicle.images && vehicle.images.length > 0 
    ? vehicle.images 
    : ["https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800"];

  return (
    <>
      <SEO 
        title={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        description={vehicle.description || `${vehicle.year} ${vehicle.make} ${vehicle.model} - ${vehicle.condition} condition, ${vehicle.mileage.toLocaleString()} miles`}
        image={images[0]}
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-space-blue">
        <Navigation />
        
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link href="/">
            <Button variant="outline" className="mb-6 border-cyan/20 hover:bg-cyan/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Inventory
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <Card className="p-4 bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border-cyan/20 overflow-hidden">
                <div className="aspect-video rounded-lg overflow-hidden mb-4 relative group">
                  <img
                    src={images[selectedImage]}
                    alt={`${vehicle.make} ${vehicle.model}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {vehicle.status === "sold" && (
                    <div className="absolute inset-0 bg-destructive/80 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">SOLD</span>
                    </div>
                  )}
                </div>
                
                {images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === idx ? "border-cyan" : "border-transparent hover:border-cyan/50"
                        }`}
                      >
                        <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </Card>
            </div>

            {/* Vehicle Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">
                      {vehicle.year} {vehicle.make} {vehicle.model}
                    </h1>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-cyan/30 text-cyan">
                        {vehicle.category === "for_sale" ? "For Sale" : "Import Service"}
                      </Badge>
                      <Badge variant="outline" className={`${
                        vehicle.status === "available" ? "border-green-500/30 text-green-500" :
                        vehicle.status === "sold" ? "border-destructive/30 text-destructive" :
                        "border-amber-500/30 text-amber-500"
                      }`}>
                        {vehicle.status.charAt(0).toUpperCase() + vehicle.status.slice(1)}
                      </Badge>
                      <Badge variant="outline" className="border-cyan/30">
                        {vehicle.condition.charAt(0).toUpperCase() + vehicle.condition.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-cyan">${vehicle.price.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">USD</div>
                  </div>
                </div>

                {vehicle.description && (
                  <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
                )}
              </div>

              {/* Key Specs */}
              <Card className="p-6 bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border-cyan/20">
                <h2 className="text-xl font-bold mb-4">Key Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-cyan" />
                    <div>
                      <div className="text-sm text-muted-foreground">Mileage</div>
                      <div className="font-semibold">{vehicle.mileage.toLocaleString()} mi</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-cyan" />
                    <div>
                      <div className="text-sm text-muted-foreground">Fuel Type</div>
                      <div className="font-semibold capitalize">{vehicle.fuel_type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-cyan" />
                    <div>
                      <div className="text-sm text-muted-foreground">Transmission</div>
                      <div className="font-semibold capitalize">{vehicle.transmission}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-cyan" />
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="font-semibold">{vehicle.location}</div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Additional Details */}
              <Card className="p-6 bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border-cyan/20">
                <h2 className="text-xl font-bold mb-4">Additional Details</h2>
                <div className="grid gap-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Body Type:</span>
                    <span className="font-semibold capitalize">{vehicle.body_type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Exterior Color:</span>
                    <span className="font-semibold">{vehicle.exterior_color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interior Color:</span>
                    <span className="font-semibold">{vehicle.interior_color}</span>
                  </div>
                  {vehicle.engine && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Engine:</span>
                      <span className="font-semibold">{vehicle.engine}</span>
                    </div>
                  )}
                  {vehicle.horsepower && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Horsepower:</span>
                      <span className="font-semibold">{vehicle.horsepower} HP</span>
                    </div>
                  )}
                  {vehicle.vin && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">VIN:</span>
                      <span className="font-semibold font-mono text-sm">{vehicle.vin}</span>
                    </div>
                  )}
                  {vehicle.stock_number && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stock #:</span>
                      <span className="font-semibold">{vehicle.stock_number}</span>
                    </div>
                  )}
                </div>
              </Card>

              {/* Features */}
              {vehicle.features && vehicle.features.length > 0 && (
                <Card className="p-6 bg-gradient-to-br from-space-blue via-space-blue/95 to-space-blue border-cyan/20">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-cyan" />
                    Features & Equipment
                  </h2>
                  <div className="grid grid-cols-1 gap-2">
                    {vehicle.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-cyan" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Import Info */}
              {vehicle.category === "import_service" && (
                <Card className="p-6 bg-gradient-to-br from-cyan/10 via-cyan/5 to-transparent border-cyan/20">
                  <h2 className="text-xl font-bold mb-4">Import Information</h2>
                  <div className="space-y-3">
                    {vehicle.import_origin_country && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Origin Country:</span>
                        <span className="font-semibold">{vehicle.import_origin_country}</span>
                      </div>
                    )}
                    {vehicle.import_status && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Import Status:</span>
                        <Badge variant="outline" className="border-cyan/30 text-cyan">
                          {vehicle.import_status}
                        </Badge>
                      </div>
                    )}
                    {vehicle.estimated_arrival_date && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Est. Arrival:</span>
                        <span className="font-semibold">
                          {new Date(vehicle.estimated_arrival_date).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                  </div>
                </Card>
              )}

              {/* Contact CTA */}
              <Card className="p-6 bg-gradient-to-br from-cyan/20 via-cyan/10 to-transparent border-cyan/30">
                <h3 className="text-xl font-bold mb-4">Interested in this vehicle?</h3>
                <p className="text-muted-foreground mb-4">
                  Contact us today to schedule a test drive or get more information about this {vehicle.make} {vehicle.model}.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/#contact">
                    <Button className="bg-cyan hover:bg-cyan/90">
                      Contact Us
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-cyan/20 hover:bg-cyan/10">
                      View More Vehicles
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}