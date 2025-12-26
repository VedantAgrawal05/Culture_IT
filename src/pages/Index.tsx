import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SlidingPanels from "@/components/SlidingPanels";
import heroImage from "@/assets/hero-banner.png";
import logoImage from "@/assets/culture-it-logo.png";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";

const slidingPanelContent = [
  {
    id: "mission",
    title: "Our Mission",
    subtitle: "What We Stand For",
    description: "Culture-IT is dedicated to celebrating the rich tapestry of cultures that make up our college community. We believe in fostering understanding, respect, and appreciation for diverse traditions, arts, and customs.",
    color: "primary" as const,
    icon: <Star className="h-8 w-8" />,
  },
  {
    id: "events",
    title: "Cultural Events",
    subtitle: "Experience Diversity",
    description: "From traditional dance performances to music festivals, art exhibitions to food fairs, we organize events throughout the year that showcase the beautiful diversity of our community.",
    color: "secondary" as const,
    icon: <Calendar className="h-8 w-8" />,
  },
  {
    id: "community",
    title: "Join Our Community",
    subtitle: "Be Part of Something Special",
    description: "Become a member and connect with students from all backgrounds. Share your culture, learn about others, and create lasting friendships that transcend boundaries.",
    color: "accent" as const,
    icon: <Users className="h-8 w-8" />,
  },
  {
    id: "achievements",
    title: "Our Achievements",
    subtitle: "Making an Impact",
    description: "Recognized as the most vibrant cultural club on campus, we've organized 50+ events, welcomed 500+ members, and created countless memories celebrating unity in diversity.",
    color: "success" as const,
    icon: <Trophy className="h-8 w-8" />,
  },
];

const upcomingEvents = [
  {
    title: "Annual Cultural Fest 2025",
    date: "January 15, 2025",
    image: event1,
    description: "A grand celebration featuring performances from 20+ cultural groups.",
  },
  {
    title: "Music Night",
    date: "February 8, 2025",
    image: event2,
    description: "Live performances featuring classical and contemporary music.",
  },
  {
    title: "Art & Craft Exhibition",
    date: "March 1, 2025",
    image: event3,
    description: "Showcasing traditional arts and crafts from across the nation.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Cultural celebration"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-4 py-20">
          <div className="flex flex-col items-center text-center space-y-8">
            <img
              src={logoImage}
              alt="Culture IT Logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain animate-float"
            />
            <div className="space-y-4 opacity-0 animate-fade-in">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider">
                <span className="text-gradient-primary">CULTURE</span>
                <span className="text-foreground">-IT</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                Celebrating Unity in Diversity
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in animation-delay-200">
              <Button variant="hero" size="xl" asChild>
                <Link to="/events">
                  Explore Events <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/story">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Sliding Panels Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
              DISCOVER <span className="text-primary">CULTURE-IT</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission, events, and the vibrant community that makes us who we are.
            </p>
          </div>
          <SlidingPanels slides={slidingPanelContent} />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider">
                UPCOMING <span className="text-secondary">EVENTS</span>
              </h2>
              <p className="text-muted-foreground mt-2">Don't miss out on our exciting cultural celebrations</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/events">View All Events <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                variant="event"
                className="opacity-0 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-secondary">{event.date}</p>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Members", color: "text-primary" },
              { number: "50+", label: "Events", color: "text-secondary" },
              { number: "20+", label: "Cultures", color: "text-accent" },
              { number: "5", label: "Years", color: "text-success" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className={`font-display text-4xl md:text-5xl ${stat.color}`}>{stat.number}</p>
                <p className="text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="container px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
            READY TO <span className="text-gradient-cultural">JOIN US</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Be part of the most vibrant cultural community on campus. Connect, learn, and celebrate with us!
          </p>
          <Button variant="cultural" size="xl" asChild>
            <Link to="/members">
              Become a Member <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
