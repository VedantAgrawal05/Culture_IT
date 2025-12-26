import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const members = [
  {
    id: 1,
    name: "Priya Sharma",
    position: "President",
    year: "2025-26",
    department: "Computer Science",
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Arjun Patel",
    position: "Vice President",
    year: "2025-26",
    department: "Electronics",
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Sneha Reddy",
    position: "Secretary",
    year: "2025-26",
    department: "Mechanical",
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Rahul Kumar",
    position: "Treasurer",
    year: "2025-26",
    department: "Civil",
    color: "bg-success",
  },
  {
    id: 5,
    name: "Ananya Gupta",
    position: "Cultural Head",
    year: "2025-26",
    department: "Architecture",
    color: "bg-primary",
  },
  {
    id: 6,
    name: "Vikram Singh",
    position: "Events Coordinator",
    year: "2025-26",
    department: "Computer Science",
    color: "bg-secondary",
  },
  {
    id: 7,
    name: "Meera Nair",
    position: "Creative Head",
    year: "2025-26",
    department: "Design",
    color: "bg-accent",
  },
  {
    id: 8,
    name: "Aditya Rao",
    position: "PR & Media Head",
    year: "2025-26",
    department: "Media Studies",
    color: "bg-success",
  },
];

const Members = () => {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              ACTIVE <span className="text-primary">MEMBERS</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Meet the passionate individuals who drive Culture-IT's mission forward. 
              Our team for the year 2025-26.
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8 text-center">
            CORE <span className="text-secondary">TEAM</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.slice(0, 4).map((member, index) => (
              <Card 
                key={member.id} 
                variant="member"
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-24 h-24 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="font-display text-2xl text-primary-foreground">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="outline" className="mt-2 border-primary text-primary">
                      {member.position}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                  <p className="text-xs text-muted-foreground mt-1">{member.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Heads */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-8 text-center">
            TEAM <span className="text-accent">HEADS</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.slice(4).map((member, index) => (
              <Card 
                key={member.id} 
                variant="member"
                className="text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="font-display text-xl text-primary-foreground">
                      {getInitials(member.name)}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                  <CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {member.position}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 md:py-24">
        <div className="container px-4 text-center">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
            <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-4">
              WANT TO <span className="text-primary">JOIN US</span>?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for passionate individuals who want to celebrate and promote cultural diversity.
              Contact us to know about membership opportunities!
            </p>
            <p className="text-primary font-medium">cultureit@college.edu</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;
