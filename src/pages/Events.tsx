import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, MapPin, Clock, ArrowRight, Sparkles, 
  Camera, Quote, History, X, Info
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";

// --- Helper Functions ---
const images = [event1, event2, event3];
const getImage = (index: number) => images[index % images.length];

// --- Data ---
const allEvents = [
  // --- UPCOMING (2025) ---
  {
    id: "sleigh-2025",
    title: "Sleigh the Night",
    date: "2025-12-17",
    displayDate: "17th Dec 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Main Auditorium",
    description: "A magical Christmas celebration filled with carols, performances, and festive cheer. Let's end the year on a high note! We have invited the city's best choir and prepared a surprise Santa visit.",
  },
  {
    id: "neural-2025",
    title: "Neural Strokes",
    date: "2025-11-01",
    displayDate: "1st Nov 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Creative Lab",
    description: "Where AI meets Art. An immersive exhibition and workshop exploring how technology interprets human creativity. Participants will get hands-on experience with Generative AI tools.",
  },
  
  // --- PAST ---
  {
    id: "nandotsav-2",
    title: "Nandotsav 2.0",
    date: "2024-08-21",
    displayDate: "21st Aug 2024",
    time: "4:00 PM - 8:00 PM",
    location: "Central Lawn",
    description: "Celebrating the divine playfulness of Krishna. The campus came alive with the rhythm of drums, the height of the Dahi Handi, and the joy of togetherness. We witnessed an exhilarating pyramid formation by the student council team that broke the record for the highest handi ever reached in college history. The evening concluded with traditional prasad distribution.",
  },
  {
    id: "vibrance-2024",
    title: "Vibrance 2024",
    date: "2024-03-06",
    displayDate: "6th-7th Mar 2024",
    time: "All Day",
    location: "Campus Wide",
    description: "The festival of colors and culture. Two days of non-stop energy, featuring a fashion show, battle of bands, and a DJ night that shook the ground. Over 2000 students participated from 15 different colleges, making it our biggest success yet.",
  },
  {
    id: "vibnexus-2024",
    title: "Vibnexus '24",
    date: "2024-02-21",
    displayDate: "21st Feb 2024",
    time: "5:00 PM - 9:00 PM",
    location: "Main Auditorium",
    description: "Bringing together the best dancers on campus for an electrifying face-off. Every beat was matched with a move, every drop with a cheer. The solo performances left the judges in awe.",
  },
   {
    id: "aarambh",
    title: "Aarambh",
    date: "2022-11-08",
    displayDate: "8th Nov 2022",
    time: "10:00 AM - 1:00 PM",
    location: "Main Auditorium",
    description: "The Beginning. The official launch of the Culture-IT club where we planted the seeds of the community we are today. It started with just 10 members and a dream.",
  },
];

const Events = () => {
  const today = new Date("2025-10-25");
  const [selectedEvent, setSelectedEvent] = useState<typeof allEvents[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedEvent]);

  const upcomingEvents = allEvents
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const pastEvents = allEvents
    .filter((e) => new Date(e.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-background">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px]" />
        
        <div className="container relative px-4 text-center max-w-4xl mx-auto z-10">
          {/* <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm uppercase tracking-widest border-primary/20 text-primary bg-primary/5 backdrop-blur-sm">
            Cultural Timeline
          </Badge> */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tighter mb-8 leading-[0.9]">
            MOMENTS IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary animate-gradient bg-300%">
              MOTION
            </span>
          </h1>
          <p className="text-xl text-muted-foreground/80 leading-relaxed font-light max-w-2xl mx-auto">
            Every event is a story waiting to be told.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-12 md:py-24 relative">
          <div className="container px-4">
            <div className="flex items-end gap-4 mb-12 border-b border-border/40 pb-4">
              <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight">
                UPCOMING <span className="text-primary italic">EVENTS</span>
              </h2>
              <Sparkles className="w-8 h-8 text-secondary mb-2 animate-pulse" />
            </div>

            <div className="flex flex-col gap-12">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="group relative rounded-[2rem] bg-card/30 border border-white/5 overflow-hidden backdrop-blur-sm hover:border-primary/20 transition-all duration-500"
                >
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-5 relative h-64 lg:h-auto overflow-hidden">
                      <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                      <img
                        src={getImage(index)}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-[0.8] group-hover:saturate-100"
                      />
                      <div className="absolute top-6 left-6 z-20 bg-background/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl text-center min-w-[80px]">
                        <span className="block text-xs font-bold text-muted-foreground uppercase tracking-wider">
                          {event.date.split('-')[1]}
                        </span>
                        <span className="block text-2xl font-display text-primary">
                          {event.date.split('-')[2]}
                        </span>
                      </div>
                    </div>

                    <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
                      <div className="flex flex-wrap gap-4 mb-6 text-sm font-medium text-muted-foreground/80">
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                           <Clock className="w-4 h-4" /> {event.time}
                        </span>
                        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                           <MapPin className="w-4 h-4" /> {event.location}
                        </span>
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                        {event.title}
                      </h3>
                      <div className="relative mb-8 p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border-l-4 border-primary">
                        <Quote className="absolute top-4 left-4 w-6 h-6 text-primary/20 transform -scale-x-100" />
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic relative z-10 pl-2">
                          "{event.description}"
                        </p>
                      </div>
                      <div>
                        <Button size="xl" className="rounded-full px-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                          Register Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- PAST EVENTS --- */}
      <section className="py-12 md:py-24 bg-secondary/5 border-t border-white/5">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              PAST <span className="text-secondary">EVENTS</span>
            </h2>
            <div className="h-1 w-20 bg-secondary mx-auto rounded-full opacity-60" />
            <p className="mt-4 text-muted-foreground">Click on any event to read the full story.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={event.id} 
                onClick={() => setSelectedEvent(event)} // CLICK OPENS MODAL
                className="group relative border-0 bg-card/40 backdrop-blur-sm h-[500px] flex flex-col overflow-hidden hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 rounded-3xl cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-[45%] overflow-hidden">
                  <img
                    src={getImage(index + 3)}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/90" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    <span className="text-xs font-bold text-white tracking-widest uppercase">
                      {event.displayDate}
                    </span>
                  </div>
                </div>

                <CardContent className="flex flex-col flex-grow p-6 relative z-10">
                  <h3 className="font-display text-3xl text-foreground mb-4 leading-none group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  
                  {/* Truncated Description */}
                  <div className="mb-4 pl-4 border-l-2 border-secondary/30 relative">
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    {/* Visual cue to click */}
                    <span className="text-xs text-primary font-bold mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Info className="w-3 h-3" /> Read Full Story
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground/60 uppercase tracking-widest mt-auto mb-12">
                     <History className="w-3 h-3" /> {event.location}
                  </div>

                  {/* Film Strip (Stop Propagation to prevent opening modal) */}
                  <div 
                    className="absolute inset-x-0 bottom-0 translate-y-[calc(100%-4px)] group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.19, 1, 0.22, 1) bg-background/95 backdrop-blur-xl border-t border-white/10 p-5 z-20"
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-1 bg-primary/50 rounded-full" />
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Camera className="w-4 h-4 text-primary" /> Event Gallery
                      </span>
                    </div>
                    
                    <Button asChild className="w-full rounded-xl font-bold tracking-wide" variant="secondary">
                      <Link to={`/gallery?event=${event.id}`}>
                        View Full Album
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* --- EVENT DETAILS MODAL --- */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-white/10 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full backdrop-blur-md transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 md:h-80 w-full">
              <img 
                src={getImage(3)} // In real app, use selectedEvent.image
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-6 left-6 md:left-8">
                <Badge className="bg-primary text-primary-foreground mb-2 hover:bg-primary">
                  {selectedEvent.displayDate}
                </Badge>
                <h2 className="font-display text-4xl md:text-5xl text-foreground">
                  {selectedEvent.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary/10 rounded-full text-secondary">
                  <MapPin className="w-4 h-4" /> {selectedEvent.location}
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 rounded-full text-accent">
                  <Clock className="w-4 h-4" /> {selectedEvent.time}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  {/* Fake extra content to demonstrate long descriptions */}
                  It was an event to remember. The energy in the {selectedEvent.location} was palpable from the moment the doors opened. 
                  Students from all departments came together to celebrate the spirit of our club.
                </p>
              </div>

              <div className="pt-6 border-t border-border flex justify-end gap-4">
                <Button variant="outline" onClick={() => setSelectedEvent(null)}>
                  Close
                </Button>
                <Button asChild>
                  <Link to={`/gallery?event=${selectedEvent.id}`}>
                    View Photo Gallery <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Events;