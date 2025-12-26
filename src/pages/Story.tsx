import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import logoImage from "@/assets/culture-it-logo.png";

const Story = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 via-accent/5 to-transparent">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              OUR <span className="text-gradient-cultural">STORY</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              The journey of Culture-IT from a small group of dreamers to a vibrant community 
              celebrating unity in diversity.
            </p>
          </div>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="opacity-0 animate-fade-in-left">
              <h2 className="font-display text-3xl text-foreground tracking-wider mb-6">
                THE <span className="text-primary">BEGINNING</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It all started in 2019, when a group of five students from different states, 
                  speaking different languages, and celebrating different festivals found themselves 
                  sitting together during their first college orientation.
                </p>
                <p>
                  As they shared stories about their homes, traditions, and cultural practices, 
                  they realized how little they knew about each other's rich heritage despite 
                  being from the same country. This sparked an idea – what if they could create 
                  a space where students could share, learn, and celebrate this incredible diversity?
                </p>
                <p>
                  With just a small meeting room and 12 enthusiastic students, Culture-IT was born. 
                  The name "Culture-IT" came from a simple belief: culture isn't just something 
                  you inherit, it's something you actively embrace and share – you "Culture It!"
                </p>
              </div>
            </div>
            <div className="flex justify-center opacity-0 animate-fade-in-right">
              <img 
                src={logoImage} 
                alt="Culture IT Logo" 
                className="w-64 h-64 object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container px-4">
          <h2 className="font-display text-3xl text-foreground tracking-wider mb-12 text-center">
            OUR <span className="text-secondary">JOURNEY</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2019",
                title: "The Foundation",
                description: "Culture-IT was founded with 12 members, organizing our first small cultural evening in a classroom.",
                color: "border-primary",
              },
              {
                year: "2020",
                title: "Growing Strong",
                description: "Despite the pandemic, we went virtual and reached 100+ members, hosting online cultural sessions and virtual festivals.",
                color: "border-secondary",
              },
              {
                year: "2021",
                title: "Official Recognition",
                description: "Culture-IT was officially recognized as a college club, with dedicated space and funding for events.",
                color: "border-accent",
              },
              {
                year: "2022",
                title: "First Annual Fest",
                description: "We organized our first large-scale cultural fest with 500+ attendees and 20 performing groups.",
                color: "border-success",
              },
              {
                year: "2023",
                title: "National Recognition",
                description: "Culture-IT was featured in a national education magazine for its efforts in promoting cultural harmony.",
                color: "border-primary",
              },
              {
                year: "2024-25",
                title: "And Beyond",
                description: "With 500+ members and countless memories, we continue to grow, inspire, and celebrate unity in diversity.",
                color: "border-secondary",
              },
            ].map((item, index) => (
              <div 
                key={item.year}
                className={`relative pl-8 border-l-4 ${item.color} opacity-0 animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-card border-4 border-current" 
                     style={{ borderColor: item.color.replace('border-', 'hsl(var(--') + '))' }} />
                <span className="font-display text-xl text-primary">{item.year}</span>
                <h3 className="font-display text-2xl text-foreground tracking-wider mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <Card variant="glow" className="max-w-3xl mx-auto p-8 md:p-12">
            <CardContent className="p-0 text-center">
              <Quote className="h-12 w-12 text-primary mx-auto mb-6" />
              <blockquote className="font-display text-2xl md:text-3xl text-foreground tracking-wider leading-relaxed mb-6">
                "In the dance of colors, in the harmony of music, in the beauty of art – 
                we find the common thread that binds us all. Culture-IT is not just a club; 
                it's a family that celebrates what makes us different and cherishes what makes us one."
              </blockquote>
              <p className="text-muted-foreground">
                – Rohan Mehta, Founding President (2019-20)
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Vision */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-foreground tracking-wider mb-6">
              OUR <span className="text-accent">VISION</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We envision a campus where every culture is celebrated, every tradition is respected, 
              and every student feels at home regardless of where they come from. Through our events, 
              workshops, and community initiatives, we strive to build bridges of understanding 
              and create memories that last a lifetime.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-primary/30">
              <span className="font-display text-xl text-gradient-cultural tracking-wider">
                Celebrating Unity in Diversity
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
