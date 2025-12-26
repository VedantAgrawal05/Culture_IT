import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Calendar, Users, GraduationCap, Image, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/culture-it-logo.png";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Events", path: "/events", icon: Calendar },
  { name: "Members", path: "/members", icon: Users },
  { name: "Alumni", path: "/alumni", icon: GraduationCap },
  { name: "Gallery", path: "/gallery", icon: Image },
  { name: "Our Story", path: "/story", icon: BookOpen },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Culture IT Logo" 
              className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-lg group-hover:scale-105 transition-transform"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl md:text-2xl text-primary tracking-wider">CULTURE-IT</h1>
              <p className="text-[10px] md:text-xs text-muted-foreground tracking-wide">Celebrating Unity in Diversity</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "nav-link px-4 py-2 text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  "opacity-0 animate-fade-in"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className="h-4 w-4" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
