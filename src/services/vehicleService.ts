import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type Vehicle = Tables<"vehicles">;

export interface VehicleInsert {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  body_type: string;
  exterior_color: string;
  interior_color: string;
  vin?: string;
  stock_number?: string;
  location: string;
  condition: string;
  status?: string;
  category?: string;
  engine?: string;
  horsepower?: number;
  features?: string[];
  description?: string;
  images?: string[];
  import_origin_country?: string;
  estimated_arrival_date?: string;
  import_status?: string;
}

export const vehicleService = {
  // Get all vehicles
  async getAll(filters?: { category?: string; status?: string }) {
    let query = supabase
      .from("vehicles")
      .select("*")
      .order("created_at", { ascending: false });

    if (filters?.category) {
      query = query.eq("category", filters.category);
    }

    if (filters?.status) {
      query = query.eq("status", filters.status);
    }

    const { data, error } = await query;
    console.log("Get all vehicles:", { data, error });

    if (error) {
      console.error("Error fetching vehicles:", error);
      throw error;
    }

    return data || [];
  },

  // Get vehicle by ID
  async getById(id: string) {
    const { data, error } = await supabase
      .from("vehicles")
      .select("*")
      .eq("id", id)
      .single();

    console.log("Get vehicle by ID:", { data, error });

    if (error) {
      console.error("Error fetching vehicle:", error);
      throw error;
    }

    return data;
  },

  // Create new vehicle
  async create(vehicle: VehicleInsert) {
    const { data: session } = await supabase.auth.getSession();
    
    const { data, error } = await supabase
      .from("vehicles")
      .insert({
        ...vehicle,
        created_by: session.session?.user?.id,
      })
      .select()
      .single();

    console.log("Create vehicle:", { data, error });

    if (error) {
      console.error("Error creating vehicle:", error);
      throw error;
    }

    return data;
  },

  // Update vehicle
  async update(id: string, updates: Partial<VehicleInsert>) {
    const { data, error } = await supabase
      .from("vehicles")
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    console.log("Update vehicle:", { data, error });

    if (error) {
      console.error("Error updating vehicle:", error);
      throw error;
    }

    return data;
  },

  // Delete vehicle
  async delete(id: string) {
    const { error } = await supabase
      .from("vehicles")
      .delete()
      .eq("id", id);

    console.log("Delete vehicle:", { error });

    if (error) {
      console.error("Error deleting vehicle:", error);
      throw error;
    }

    return true;
  },

  // Get vehicle statistics
  async getStats() {
    const { data: allVehicles, error } = await supabase
      .from("vehicles")
      .select("status, category");

    if (error) {
      console.error("Error fetching stats:", error);
      return {
        total: 0,
        forSale: 0,
        importing: 0,
        sold: 0,
      };
    }

    const vehicles = allVehicles || [];
    
    return {
      total: vehicles.length,
      forSale: vehicles.filter(v => v.category === "for_sale" && v.status === "available").length,
      importing: vehicles.filter(v => v.category === "import_service" || v.status === "importing").length,
      sold: vehicles.filter(v => v.status === "sold").length,
    };
  },
};