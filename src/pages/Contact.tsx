import { Mail, Phone, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-16 lg:pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="font-sans text-sm uppercase tracking-[0.3em] text-accent mb-6">Get in Touch</p>
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl text-foreground mb-8 leading-[1.1]">
              Let's Create Something Extraordinary
            </h1>
            <p className="font-sans text-xl text-muted-foreground leading-relaxed">
              Available for luxury residential, hospitality, and commercial design projects worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-accent/10">
                        <Phone size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-2">Phone</p>
                        <a 
                          href="tel:+919379151845" 
                          className="font-sans text-lg text-foreground hover:text-accent transition-colors duration-300"
                        >
                          +91-9379151845
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-accent/10">
                        <Mail size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-2">Email</p>
                        <a 
                          href="mailto:zeeshaanm10114@gmail.com" 
                          className="font-sans text-lg text-foreground hover:text-accent transition-colors duration-300"
                        >
                          zeeshaanm10114@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-accent/10">
                        <MapPin size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-2">Location</p>
                        <p className="font-sans text-lg text-foreground">
                          Available for projects in India, GCC, and remotely worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="font-serif text-2xl text-foreground mb-6">Services Offered</h3>
                <ul className="space-y-3 font-sans text-base text-muted-foreground">
                  <li>• Luxury Residential Interior Design</li>
                  <li>• 5-Star Hospitality & Hotel Design</li>
                  <li>• High-End Restaurant & F&B Concepts</li>
                  <li>• Commercial & Corporate Interiors</li>
                  <li>• Wellness & Spa Design</li>
                  <li>• 3D Visualization & Rendering</li>
                  <li>• Design Consultation & Art Direction</li>
                </ul>
              </div>
            </div>

            {/* Inquiry Section */}
            <div className="bg-secondary/30 p-8 lg:p-12">
              <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                Project Inquiries
              </h3>
              <p className="font-sans text-base text-muted-foreground mb-8 leading-relaxed">
                I welcome collaborations with discerning clients who value exceptional design and meticulous attention to detail. Whether you're envisioning a luxury villa, boutique hotel, or commercial space, I'd be delighted to discuss how we can bring your vision to life.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-3">Preferred Contact Method</h4>
                  <p className="font-sans text-base text-foreground">
                    Email for detailed inquiries, phone for initial discussions
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-3">Response Time</h4>
                  <p className="font-sans text-base text-foreground">
                    Within 24-48 hours
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm uppercase tracking-[0.2em] text-accent mb-3">Consultation</h4>
                  <p className="font-sans text-base text-foreground">
                    Complimentary initial consultation to discuss your project goals and vision
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-sans text-sm text-muted-foreground italic">
                  "Mohammed's technical precision combined with his artistic vision resulted in a truly exceptional space. His attention to detail is unparalleled."
                </p>
                <p className="font-sans text-sm text-foreground mt-3">— Private Villa Client, Dubai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
