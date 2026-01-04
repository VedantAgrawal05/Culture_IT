import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-banner.png";
import logoImage from "@/assets/culture-it-logo.png";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";

// --- Utility Component: RevealOnScroll ---
// This wrapper handles the Intersection Observer logic
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Offset slightly so it triggers before bottom
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12" // Start 12 units down and invisible
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Data ---
const featureSections = [
  {
    id: "mission",
    title: "Our Mission",
    subtitle: "What We Stand For",
    description: "Culture-IT is dedicated to celebrating the rich tapestry of cultures that make up our college community. We believe in fostering understanding, respect, and appreciation for diverse traditions, arts, and customs.",
    color: "primary",
    hex: "from-primary/20 to-primary/5",
    icon: <Star className="h-6 w-6" />,
    image: heroImage,
  },
  {
    id: "events",
    title: "Cultural Events",
    subtitle: "Experience Diversity",
    description: "From traditional dance performances to music festivals, art exhibitions to food fairs, we organize events throughout the year. Our stage is open to all voices, creating a vibrant atmosphere.",
    color: "secondary",
    hex: "from-secondary/20 to-secondary/5",
    icon: <Calendar className="h-6 w-6" />,
    image: event1,
  },
  {
    id: "achievements",
    title: "Our Achievements",
    subtitle: "Making an Impact",
    description: "Recognized as the most vibrant cultural club on campus, we've organized 30+ events, welcomed 300+ members, and created countless memories. We continue to set the benchmark for student engagement.",
    color: "emerald-500",
    hex: "from-emerald-500/20 to-emerald-500/5",
    icon: <Trophy className="h-6 w-6" />,
    image: event2,
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Keeps immediate load animation for above-the-fold content */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cultural celebration"
            className="w-full h-full object-cover opacity-30 scale-105 animate-pulse-slow" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/20 to-background" />
        </div>

        <div className="container relative z-10 px-4 pt-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <img
                src={logoImage}
                alt="Culture IT Logo"
                className="relative w-40 h-40 md:w-56 md:h-56 object-contain animate-float drop-shadow-2xl"
              />
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in max-w-4xl mx-auto">
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-primary bg-300% animate-gradient">
                  CULTURE-IT
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
                Celebrating the <span className="text-foreground font-medium">Unity</span> in our <span className="text-foreground font-medium">Diversity</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 opacity-0 animate-fade-in animation-delay-200">
              <Button variant="default" size="xl" className="rounded-full px-8 text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300" asChild>
                <Link to="/events">
                  Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="rounded-full px-8 text-lg hover:bg-secondary/10 border-foreground/10" asChild>
                <Link to="/story">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Layout with RevealOnScroll */}
      <section className="py-24 md:py-40 overflow-hidden relative">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

        <div className="container px-4 relative z-10">
          {/* Scroll Reveal for Header */}
          <RevealOnScroll>
            <div className="text-center mb-32">
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight mb-6">
                DISCOVER CULTURE - <span className="text-primary">IT</span>
              </h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-80" />
            </div>
          </RevealOnScroll>

          <div className="space-y-32 md:space-y-48">
            {featureSections.map((item, index) => (
              <RevealOnScroll key={item.id}>
                <div 
                  className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  } group perspective-1000`}
                >
                  {/* Text Side */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="space-y-8 relative">
                      <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/50 backdrop-blur-md border border-foreground/5 shadow-sm`}>
                        <span className={`text-${item.color === 'emerald-500' ? 'emerald-500' : item.color}`}>{item.icon}</span>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground">{item.subtitle}</span>
                      </div>
                      
                      <h3 className="font-display text-5xl md:text-6xl text-foreground leading-[1.1]">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 w-full relative">
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${item.hex} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 scale-110`} 
                    />
                    
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transform transition-all duration-700 group-hover:-translate-y-4 group-hover:rotate-1">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full aspect-[4/3] object-cover transform transition-transform duration-1000 scale-100 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent z-20 opacity-60" />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Staggered Reveal */}
      <section className="py-24 border-y border-white/5 bg-white/[0.02]">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "300+", label: "Members", color: "text-primary" },
              { number: "30+", label: "Events", color: "text-secondary" },
              { number: "20+", label: "Cultures", color: "text-accent" },
              { number: "4", label: "Years", color: "text-emerald-500" },
            ].map((stat, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className="text-center group cursor-default">
                  <p className={`font-display text-5xl md:text-7xl ${stat.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110 transform transition-transform`}>
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-widest mt-4">
                    {stat.label}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Scroll Reveal */}
      <RevealOnScroll>
        <section className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
          <div className="container px-4 relative z-10 text-center">
            <h2 className="font-display text-4xl md:text-6xl text-foreground tracking-tight mb-8">
              READY TO JOIN &nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                US?
              </span>
            </h2> 
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Be part of the most vibrant cultural community on campus. Connect, learn, and celebrate with us!
            </p>
            <Button variant="default" size="xl" className="h-14 px-10 text-lg rounded-full shadow-2xl hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/members">
                Become a Member <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </RevealOnScroll>
    </Layout>
  );
};

export default Index;