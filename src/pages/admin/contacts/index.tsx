import { useState, useEffect } from "react";
import Link from "next/link";
import { MessageSquare, ArrowLeft, LogOut, Search, Trash2, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { contactService } from "@/services/contactService";
import type { Tables } from "@/integrations/supabase/types";
import { authService } from "@/services/authService";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import { AdminGuard } from "@/components/AdminGuard";

type Contact = Tables<"contact_submissions">;

export default function ContactsManagement() {
  const router = useRouter();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      const data = await contactService.getAll();
      setContacts(data);
    } catch (error) {
      console.error("Error loading contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await contactService.updateStatus(id, newStatus);
      setContacts(contacts.map(c => 
        c.id === id ? { ...c, status: newStatus } : c
      ));
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      await contactService.delete(id);
      setContacts(contacts.filter(c => c.id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete inquiry");
    }
  };

  const handleLogout = async () => {
    try {
      await authService.signOut();
      router.push("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = 
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || contact.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminGuard>
      <SEO title="Contact Inquiries" />
      <div className="min-h-screen bg-space">
        <div className="grid-pattern" />
        
        <div className="relative z-10">
          {/* Header */}
          <div className="border-b border-cyan/20 bg-card/50 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Link href="/admin">
                    <Button variant="outline" size="sm" className="border-cyan/30">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </Link>
                  <div className="p-2 bg-cyan/10 rounded-lg border border-cyan/30">
                    <MessageSquare className="h-6 w-6 text-cyan" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">Contact Inquiries</h1>
                    <p className="text-sm text-muted-foreground">{filteredContacts.length} inquiries found</p>
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

          <div className="container mx-auto px-4 py-8">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or message..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-card/80 border-cyan/20 focus:border-cyan"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  className={filterStatus === "all" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  All
                </Button>
                <Button
                  variant={filterStatus === "new" ? "default" : "outline"}
                  onClick={() => setFilterStatus("new")}
                  className={filterStatus === "new" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  New
                </Button>
                <Button
                  variant={filterStatus === "in_progress" ? "default" : "outline"}
                  onClick={() => setFilterStatus("in_progress")}
                  className={filterStatus === "in_progress" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  In Progress
                </Button>
                <Button
                  variant={filterStatus === "resolved" ? "default" : "outline"}
                  onClick={() => setFilterStatus("resolved")}
                  className={filterStatus === "resolved" ? "bg-cyan text-space" : "border-cyan/30"}
                >
                  Resolved
                </Button>
              </div>
            </div>

            {/* Inquiries List */}
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan border-r-transparent mb-4"></div>
                <p className="text-muted-foreground">Loading inquiries...</p>
              </div>
            ) : filteredContacts.length === 0 ? (
              <Card className="p-12 text-center bg-card/80 backdrop-blur-sm border-cyan/20">
                <MessageSquare className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-bold mb-2">No inquiries found</h3>
                <p className="text-muted-foreground">
                  {searchQuery || filterStatus !== "all" 
                    ? "Try adjusting your filters" 
                    : "You haven't received any contact inquiries yet"}
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredContacts.map((contact) => (
                  <Card key={contact.id} className="p-6 bg-card/80 backdrop-blur-sm border-cyan/20">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold">{contact.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            contact.status === "new" ? "bg-cyan/20 text-cyan border border-cyan/50" :
                            contact.status === "in_progress" ? "bg-amber/20 text-amber border border-amber/50" :
                            "bg-green-500/20 text-green-400 border border-green-500/50"
                          }`}>
                            {contact.status.replace("_", " ").toUpperCase()}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(contact.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                          <span>📧 {contact.email}</span>
                          {contact.phone && <span>📱 {contact.phone}</span>}
                        </div>
                        <div className="p-4 bg-background/50 rounded-lg border border-cyan/10">
                          <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                        </div>
                      </div>
                      
                      <div className="flex md:flex-col gap-2 justify-start md:justify-center border-t md:border-t-0 md:border-l border-cyan/20 pt-4 md:pt-0 md:pl-4">
                        {contact.status !== "new" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-cyan/30"
                            onClick={() => handleStatusChange(contact.id, "new")}
                          >
                            Mark New
                          </Button>
                        )}
                        {contact.status !== "in_progress" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-amber/30 text-amber hover:bg-amber/10"
                            onClick={() => handleStatusChange(contact.id, "in_progress")}
                          >
                            <Clock className="h-4 w-4 mr-2" />
                            In Progress
                          </Button>
                        )}
                        {contact.status !== "resolved" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="border-green-500/30 text-green-500 hover:bg-green-500/10"
                            onClick={() => handleStatusChange(contact.id, "resolved")}
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Resolve
                          </Button>
                        )}
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-destructive/30 text-destructive hover:bg-destructive/10 mt-auto"
                          onClick={() => handleDelete(contact.id)}
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminGuard>
  );
}