import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";

const alumni = [
  {
    id: 1,
    name: "Rohan Mehta",
    batch: "2020-21",
    position: "President",
    currentRole: "Product Manager",
    company: "Google",
    location: "Bangalore",
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Kavya Iyer",
    batch: "2020-21",
    position: "Vice President",
    currentRole: "UX Designer",
    company: "Microsoft",
    location: "Hyderabad",
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Amit Verma",
    batch: "2021-22",
    position: "President",
    currentRole: "Software Engineer",
    company: "Amazon",
    location: "Pune",
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Neha Krishnan",
    batch: "2021-22",
    position: "Cultural Head",
    currentRole: "Marketing Manager",
    company: "Flipkart",
    location: "Bangalore",
    color: "bg-success",
  },
  {
    id: 5,
    name: "Sanjay Rao",
    batch: "2022-23",
    position: "President",
    currentRole: "Data Scientist",
    company: "Netflix",
    location: "Mumbai",
    color: "bg-primary",
  },
  {
    id: 6,
    name: "Riya Desai",
    batch: "2022-23",
    position: "Secretary",
    currentRole: "Business Analyst",
    company: "Deloitte",
    location: "Delhi",
    color: "bg-secondary",
  },
  {
    id: 7,
    name: "Karthik Nair",
    batch: "2023-24",
    position: "President",
    currentRole: "Pursuing M.Tech",
    company: "IIT Bombay",
    location: "Mumbai",
    color: "bg-accent",
  },
  {
    id: 8,
    name: "Shreya Agarwal",
    batch: "2023-24",
    position: "Events Coordinator",
    currentRole: "Consultant",
    company: "McKinsey",
    location: "Delhi",
    color: "bg-success",
  },
];

const Alumni = () => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const batches = [...new Set(alumni.map(a => a.batch))].sort().reverse();

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              OUR <span className="text-accent">ALUMNI</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Celebrating the achievements of our former members who continue to 
              carry the spirit of Culture-IT in their professional journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni by Batch */}
      {batches.map((batch) => (
        <section key={batch} className="py-12">
          <div className="container px-4">
            <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8">
              BATCH <span className="text-primary">{batch}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {alumni.filter(a => a.batch === batch).map((person, index) => (
                <Card 
                  key={person.id} 
                  variant="member"
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`w-20 h-20 ${person.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="font-display text-xl text-primary-foreground">
                        {getInitials(person.name)}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-foreground">{person.name}</CardTitle>
                    <CardDescription>
                      <Badge variant="outline" className="mt-1">
                        {person.position}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Briefcase className="h-4 w-4 text-secondary" />
                      <span className="text-foreground">{person.currentRole}</span>
                    </div>
                    <p className="text-sm text-muted-foreground pl-6">{person.company}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {person.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Stay Connected */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-4">
              STAY <span className="text-secondary">CONNECTED</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Are you a Culture-IT alumni? We'd love to hear about your journey and achievements. 
              Connect with us and inspire the current members!
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg text-foreground hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-secondary" />
                Join Alumni Network
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Alumni;
