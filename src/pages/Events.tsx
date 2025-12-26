import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";

const events = [
  {
    id: 1,
    title: "Annual Cultural Fest 2025",
    date: "January 15, 2025",
    time: "10:00 AM - 8:00 PM",
    location: "Main Auditorium",
    image: event1,
    description: "Our flagship event featuring performances from 20+ cultural groups, showcasing dance, music, drama, and art from diverse traditions. Join us for a day of celebration and unity!",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Classical Music Night",
    date: "February 8, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Theatre",
    image: event2,
    description: "An enchanting evening of classical and contemporary music featuring renowned artists and talented student performers. Experience the magic of musical heritage.",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Art & Craft Exhibition",
    date: "March 1, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Art Gallery, Block C",
    image: event3,
    description: "Showcasing traditional arts, crafts, and handloom from across the nation. Live demonstrations by artisans and interactive workshops for all.",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Diwali Celebration",
    date: "November 12, 2024",
    time: "5:00 PM - 11:00 PM",
    location: "Campus Ground",
    image: event1,
    description: "A grand celebration of the festival of lights with diyas, rangoli competition, fireworks, and traditional sweets. Spreading joy and light across campus!",
    status: "past",
  },
  {
    id: 5,
    title: "Folk Dance Competition",
    date: "October 5, 2024",
    time: "3:00 PM - 7:00 PM",
    location: "Main Auditorium",
    image: event2,
    description: "Teams from various departments competed in an exciting folk dance showdown, representing different states and their unique dance traditions.",
    status: "past",
  },
];

const Events = () => {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const pastEvents = events.filter(e => e.status === "past");

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              CLUB <span className="text-secondary">EVENTS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Join us for exciting cultural celebrations, performances, workshops, and more. 
              Every event is an opportunity to experience the beauty of diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8">
            UPCOMING <span className="text-primary">EVENTS</span>
          </h2>
          <div className="grid gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                variant="event"
                className="opacity-0 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card md:block hidden" />
                  </div>
                  <div className="md:col-span-2 p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        Upcoming
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-foreground tracking-wider mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-accent" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-success" />
                        {event.location}
                      </div>
                    </div>
                    <Button variant="hero">Register Now</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8">
            PAST <span className="text-muted-foreground">EVENTS</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.id} 
                variant="event"
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover grayscale opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-foreground">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
