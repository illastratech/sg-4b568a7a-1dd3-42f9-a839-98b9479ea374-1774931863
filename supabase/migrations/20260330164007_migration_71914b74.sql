-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL CHECK (subject IN ('General Inquiry', 'Vehicle Information', 'Import Service', 'Financing', 'Trade-In', 'Service & Repair')),
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for contact_submissions
CREATE POLICY "Anyone can submit contact form" ON contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated users can view all submissions" ON contact_submissions
  FOR SELECT USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update submissions" ON contact_submissions
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Create index for status filtering
CREATE INDEX contact_submissions_status_idx ON contact_submissions(status);
CREATE INDEX contact_submissions_created_at_idx ON contact_submissions(created_at DESC);