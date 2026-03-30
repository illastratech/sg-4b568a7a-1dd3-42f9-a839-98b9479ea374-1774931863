-- Create admin_users table for admin authentication
CREATE TABLE admin_users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  role TEXT DEFAULT 'admin' CHECK (role IN ('admin', 'super_admin')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_login TIMESTAMP WITH TIME ZONE
);

-- Enable RLS
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Admin users can only view their own record
CREATE POLICY "Admin users can view their own record" ON admin_users FOR SELECT USING (auth.uid() = id);

-- Create index
CREATE INDEX admin_users_email_idx ON admin_users(email);