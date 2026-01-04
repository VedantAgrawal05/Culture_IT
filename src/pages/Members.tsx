import { Quote, Linkedin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import vedantImg from "@/assets/Ved_Prez.png";
import SrividyaImg from "@/assets/Srividya.jpeg";
import DevanandaImg from "@/assets/Devananda.jpeg";
import ShubhamImg from "@/assets/Shubham.jpeg";
import ChaarukeshImg from "@/assets/Chaarukesh.jpeg";
import ShubhraImg from "@/assets/Shubhra.jpeg";

// Placeholder images - REPLACE THESE WITH YOUR REAL IMPORTS
// import vedantImg from "@/assets/vedant.png";
const placeholder = (id: number) => `https://i.pravatar.cc/300?img=${id}`;

const members = [
  {
    id: 1,
    name: "Vedant Agrawal",
    position: "President",
    year: "2025-26",
    department: "Computer Science",
    image: vedantImg, // Replace with actual image variable
    quote: "Repping Culture, Chasing Memories.",
    color: "border-primary",
  },
  {
    id: 2,
    name: "Pari Gupta",
    position: "Vice President",
    year: "2025-26",
    department: "Electronics",
    image: placeholder(5),
    quote: "Crafting spaces where culture thrives and people unite.",
    color: "border-secondary",
  },
  {
    id: 3,
    name: "Sadhana Tamilarasi",
    position: "General Secretary",
    year: "2025-26",
    department: "Mechanical",
    image: placeholder(9),
    quote: "I don't keep the minutes-I make the moments worth remembering.",
    color: "border-accent",
  },
  {
    id: 4,
    name: "Tijin Renoy",
    position: "Joint Secretary",
    year: "2025-26",
    department: "Civil",
    image: placeholder(3),
    quote: "Building bridges between cultures.",
    color: "border-success", // Ensure 'success' exists in tailwind config or use border-green-500
  },
  {
    id: 5,
    name: "Shubhra Negi",
    position: "Cultural Lead",
    year: "2025-26",
    department: "Architecture",
    image: ShubhraImg,
    quote: "In the colours of our culture,I find both my roots and my wings - a harmony where uniqueness blooms,yet unity binds us all.",
    color: "border-primary",
  },
  {
    id: 6,
    name: "Srividya Rajgopalan",
    position: "Events Coordinator",
    year: "2025-26",
    department: "Computer Science",
    image: SrividyaImg,
    quote: "It is what it is.",
    color: "border-secondary",
  },
  {
    id: 7,
    name: "Garima Patel",
    position: "Creative Lead",
    year: "2025-26",
    department: "Design",
    image: placeholder(32),
    quote: "Every new idea is a creative spirit that inspires change.",
    color: "border-accent",
  },
  {
    id: 8,
    name: "Chaarukesh",
    position: "Social Media Lead",
    year: "2025-26",
    department: "Media Studies",
    image: ChaarukeshImg,
    quote: "Breathing the beauty of now.",
    color: "border-green-500",
  },
  {
    id: 9,
    name: "Devananda",
    position: "Operations Lead",
    year: "2025-26",
    department: "Media Studies",
    image: DevanandaImg,
    quote: "But poetry,beauty,romance,love these are what we stay alive for.",
    color: "border-green-500",
  },
  {
    id: 10,
    name: "Shubhaam Naik",
    position: "Finance Lead",
    year: "2025-26",
    department: "Media Studies",
    image: ShubhamImg,
    quote: "Jack of all trades hoping to master some.",
    color: "border-green-500",
  },
  {
    id: 11,
    name: "Krithika N",
    position: "Creative Lead",
    year: "2025-26",
    department: "Media Studies",
    image: placeholder(35),
    quote: "They made me Creative Lead because 'Chief of Chaos' wasn't availaible.",
    color: "border-green-500",
  },
];

const MemberCard = ({ member }: { member: typeof members[0] }) => (
  <Card 
    className={`group relative overflow-hidden border-0 bg-transparent h-full`}
  >
    {/* Image Container with Hover Effect */}
    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
      {/* The Image */}
      <img 
        src={member.image} 
        alt={member.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
      />
      
      {/* Gradient Overlay (Always visible at bottom for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

      {/* HOVER REVEAL: Quote Overlay */}
      <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center transform translate-y-4 group-hover:translate-y-0">
        <Quote className="w-8 h-8 text-primary-foreground/50 mb-4 rotate-180" />
        <p className="font-display text-xl text-primary-foreground leading-relaxed italic">
          "{member.quote}"
        </p>
        
        {/* Social Icons (Optional) */}
        <div className="flex gap-4 mt-6">
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>

    {/* Info Below Card */}
    <div className="pt-4 text-center group-hover:-translate-y-2 transition-transform duration-300">
      <h3 className="font-display text-xl text-foreground tracking-wide">
        {member.name}
      </h3>
      <div className="flex items-center justify-center gap-2 mt-1">
        <Badge variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-0">
          {member.position}
        </Badge>
      </div>
      {/* <p className="text-xs text-muted-foreground mt-2">{member.department}</p> */}
    </div>
  </Card>
);

const Members = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-background overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px]" />
        
        <div className="container px-4 text-center relative z-10">
          {/* <Badge className="mb-6 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            2025-26 Batch
          </Badge> */}
          <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-wider mb-6">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SQUAD</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the passionate individuals who drive Culture-IT's mission forward. Our team for the year 2025-26.
          </p>
        </div>
      </section>

      {/* Core Team Grid */}
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
              CORE <span className="text-primary">COUNCIL</span>
            </h2>
            <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {members.slice(0, 4).map((member, index) => (
              <div 
                key={member.id} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heads Grid */}
      <section className="py-12 md:py-20 bg-secondary/5 border-t border-border/50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-foreground tracking-wider mb-4">
              TEAM <span className="text-secondary">LEADS</span>
            </h2>
            <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {members.slice(4).map((member, index) => (
              <div 
                key={member.id} 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <MemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Members;