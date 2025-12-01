import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl lg:text-3xl mb-4">Mohammed Zeeshan</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Award-winning luxury interior designer specializing in contemporary hospitality and high-end residential projects.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-accent">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 text-accent" />
                <a href="tel:+919379151845" className="text-sm hover:text-accent transition-colors duration-300">
                  +91-9379151845
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 text-accent" />
                <a href="mailto:zeeshaanm10114@gmail.com" className="text-sm hover:text-accent transition-colors duration-300">
                  zeeshaanm10114@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-accent" />
                <p className="text-sm">India, GCC & Worldwide</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm uppercase tracking-[0.2em] mb-6 text-accent">Specializations</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li>Contemporary Luxury</li>
              <li>Modern Minimalist</li>
              <li>Arabian Modern</li>
              <li>Japandi Aesthetic</li>
              <li>5-Star Hospitality</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Mohammed Zeeshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
