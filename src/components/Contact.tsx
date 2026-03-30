import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { contactService, type ContactSubmissionInsert } from "@/services/contactService";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactSubmissionInsert>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await contactService.submit(formData);
      alert("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: keyof ContactSubmissionInsert, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block p-2 rounded-lg bg-primary/10 border border-primary/30 mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neon-colors mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to find your dream vehicle? Contact us today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="futuristic-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-cyan-600 glow-effect">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neon-colors mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground text-sm">Mon-Fri: 9AM-6PM PST</p>
                </div>
              </div>
            </Card>

            <Card className="futuristic-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 glow-effect">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neon-colors mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm">sales@eliteauto.com</p>
                  <p className="text-muted-foreground text-sm">import@eliteauto.com</p>
                </div>
              </div>
            </Card>

            <Card className="futuristic-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 glow-effect">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neon-colors mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">123 Automotive Drive</p>
                  <p className="text-muted-foreground text-sm">Los Angeles, CA 90001</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="futuristic-card p-8 lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-colors">
                    Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    className="futuristic-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-colors">
                    Email *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="futuristic-border"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-colors">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="futuristic-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-neon-colors">
                    Subject *
                  </label>
                  <Input
                    required
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="How can we help?"
                    className="futuristic-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-neon-colors">
                  Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about your requirements..."
                  className="futuristic-border min-h-32"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full futuristic-button group"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}