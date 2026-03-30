import { supabase } from "@/integrations/supabase/client";

/**
 * Dynamic redirect URL helper for OAuth flows
 * Handles both development and production environments
 */
const getRedirectUrl = () => {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/auth/callback`;
  }
  return process.env.NEXT_PUBLIC_SITE_URL 
    ? `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
    : "http://localhost:3000/auth/callback";
};

export const authService = {
  /**
   * Sign up a new admin user with email and password
   */
  async signUpAdmin(email: string, password: string, fullName?: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      console.error("Sign up error:", error);
      throw error;
    }

    // Create admin user record if signup successful
    if (data.user) {
      const { error: profileError } = await supabase
        .from("admin_users")
        .insert({
          id: data.user.id,
          email: data.user.email!,
          full_name: fullName,
          role: "admin",
        });

      if (profileError) {
        console.error("Admin profile creation error:", profileError);
      }
    }

    return { data, error };
  },

  /**
   * Sign in admin user with email and password
   */
  async signInWithPassword(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Sign in error:", error);
      throw error;
    }

    // Update last login
    if (data.user) {
      await supabase
        .from("admin_users")
        .update({ last_login: new Date().toISOString() })
        .eq("id", data.user.id);
    }

    return { data, error };
  },

  /**
   * Sign out the current user
   */
  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Sign out error:", error);
      throw error;
    }
    return { error };
  },

  /**
   * Get the current session
   */
  async getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) {
      console.error("Get session error:", error);
    }
    return { session, error };
  },

  /**
   * Get the current user
   */
  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Get user error:", error);
    }
    return { user, error };
  },

  /**
   * Check if user is an admin
   */
  async isAdmin() {
    const { user } = await this.getCurrentUser();
    if (!user) return false;

    const { data, error } = await supabase
      .from("admin_users")
      .select("role")
      .eq("id", user.id)
      .single();

    if (error || !data) return false;
    return data.role === "admin" || data.role === "super_admin";
  },

  /**
   * Reset password for email
   */
  async resetPassword(email: string) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${getRedirectUrl()}/reset-password`,
    });

    if (error) {
      console.error("Reset password error:", error);
      throw error;
    }

    return { data, error };
  },

  /**
   * Update password
   */
  async updatePassword(newPassword: string) {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) {
      console.error("Update password error:", error);
      throw error;
    }

    return { data, error };
  },

  /**
   * Listen to auth state changes
   */
  onAuthStateChange(callback: (event: string, session: any) => void) {
    return supabase.auth.onAuthStateChange(callback);
  },
};