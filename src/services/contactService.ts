import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type ContactSubmission = Tables<"contact_submissions">;

export interface ContactSubmissionInsert {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const contactService = {
  // Submit contact form
  async submit(submission: ContactSubmissionInsert) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert(submission)
      .select()
      .single();

    console.log("Submit contact form:", { data, error });

    if (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }

    return data;
  },

  // Get all submissions (admin only)
  async getAll(status?: string) {
    let query = supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (status && status !== "all") {
      query = query.eq("status", status);
    }

    const { data, error } = await query;
    console.log("Get all contact submissions:", { data, error });

    if (error) {
      console.error("Error fetching submissions:", error);
      throw error;
    }

    return data || [];
  },

  // Update submission status
  async updateStatus(id: string, status: string) {
    const { data, error } = await supabase
      .from("contact_submissions")
      .update({
        status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    console.log("Update submission status:", { data, error });

    if (error) {
      console.error("Error updating submission:", error);
      throw error;
    }

    return data;
  },

  // Get submission statistics
  async getStats() {
    const { data: submissions, error } = await supabase
      .from("contact_submissions")
      .select("status");

    if (error) {
      console.error("Error fetching stats:", error);
      return {
        total: 0,
        new: 0,
        inProgress: 0,
        resolved: 0,
      };
    }

    const subs = submissions || [];
    
    return {
      total: subs.length,
      new: subs.filter(s => s.status === "new").length,
      inProgress: subs.filter(s => s.status === "in_progress").length,
      resolved: subs.filter(s => s.status === "resolved").length,
    };
  },
};