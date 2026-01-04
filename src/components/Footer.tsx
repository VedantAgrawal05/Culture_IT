import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-primary tracking-wider">CULTURE-IT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Celebrating Unity in Diversity. Bringing together students from all backgrounds 
              to share, learn, and celebrate our rich cultural heritage.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/cultureit.vitcc/?hl=en" className="p-2 rounded-full bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground tracking-wider">QUICK LINKS</h4>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">Events</Link>
              <Link to="/members" className="text-sm text-muted-foreground hover:text-primary transition-colors">Members</Link>
              <Link to="/alumni" className="text-sm text-muted-foreground hover:text-primary transition-colors">Alumni</Link>
              <Link to="/gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              <Link to="/story" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Story</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground tracking-wider">CONTACT US</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>VIT Chennai,Tamil Nadu  – 600127</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-secondary" />
                <span>cultureitvit@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 62630 67328</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Culture-IT Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
