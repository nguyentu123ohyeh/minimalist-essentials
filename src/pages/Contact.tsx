import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="min-h-[50vh] flex items-end pt-32 pb-20">
        <div className="container-page">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Contact
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-foreground max-w-3xl leading-[1.1]">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container-page pb-32">
        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="border-0 border-b border-border rounded-none bg-transparent px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  rows={6}
                  required
                  className="border-0 border-b border-border rounded-none bg-transparent px-0 py-4 focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-8 px-12"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="space-y-12">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Joel Ortiz
                </p>
                <p className="text-foreground">
                  <a 
                    href="mailto:NealJoseph8878@outlook.com"
                    className="hover:text-primary transition-colors"
                  >
                    NealJoseph8878@outlook.com
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Phone
                </p>
                <p className="text-foreground">
                  <a 
                    href="tel:+14045339184"
                    className="hover:text-primary transition-colors"
                  >
                    +1 (404) 533-9184
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Address
                </p>
                <p className="text-foreground">
                  Owen Drive 1761<br />
                  Clearwater, Florida 33759
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                  Hours
                </p>
                <p className="text-foreground">
                  Mon — Fri: 9am — 6pm EST<br />
                  Sat — Sun: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[50vh] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112664.76407758587!2d-82.83086565!3d27.9658533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2f0a864159c7b%3A0x7bcd3a1a2f32a687!2sClearwater%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1704067200000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our location in Clearwater, Florida"
        />
      </section>
    </Layout>
  );
}
