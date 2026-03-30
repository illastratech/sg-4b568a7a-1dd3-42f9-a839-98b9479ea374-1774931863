-- Create vehicles table
CREATE TABLE vehicles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  make TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type TEXT NOT NULL CHECK (fuel_type IN ('Gasoline', 'Diesel', 'Electric', 'Hybrid', 'Plug-in Hybrid')),
  transmission TEXT NOT NULL CHECK (transmission IN ('Manual', 'Automatic', 'CVT', 'Semi-Automatic')),
  body_type TEXT NOT NULL CHECK (body_type IN ('Sedan', 'SUV', 'Coupe', 'Hatchback', 'Convertible', 'Wagon', 'Truck', 'Van')),
  exterior_color TEXT NOT NULL,
  interior_color TEXT NOT NULL,
  vin TEXT UNIQUE,
  stock_number TEXT UNIQUE,
  location TEXT NOT NULL,
  condition TEXT NOT NULL CHECK (condition IN ('New', 'Used', 'Certified Pre-Owned')),
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'sold', 'reserved', 'importing')),
  category TEXT NOT NULL DEFAULT 'for_sale' CHECK (category IN ('for_sale', 'import_service')),
  engine TEXT,
  horsepower INTEGER,
  features TEXT[],
  description TEXT,
  images TEXT[],
  import_origin_country TEXT,
  estimated_arrival_date DATE,
  import_status TEXT CHECK (import_status IN ('ordered', 'in_transit', 'customs', 'arrived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL
);

-- Enable RLS
ALTER TABLE vehicles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for vehicles
CREATE POLICY "Anyone can view available vehicles" ON vehicles
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert vehicles" ON vehicles
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update vehicles" ON vehicles
  FOR UPDATE USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete vehicles" ON vehicles
  FOR DELETE USING (auth.uid() IS NOT NULL);

-- Create indexes for better query performance
CREATE INDEX vehicles_status_idx ON vehicles(status);
CREATE INDEX vehicles_category_idx ON vehicles(category);
CREATE INDEX vehicles_make_model_idx ON vehicles(make, model);
CREATE INDEX vehicles_created_at_idx ON vehicles(created_at DESC);