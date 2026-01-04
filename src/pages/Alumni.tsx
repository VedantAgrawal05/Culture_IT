import { useState } from "react";
import { MapPin, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";

// Updated Data with the specific names provided
const alumni = [
  // --- Batch 2024-25 ---
  {
    id: 1,
    name: "Shatakshi",
    batch: "2024-25",
    position: "President",
    location: "Chennai", 
    image: "https://i.pravatar.cc/150?u=shatakshi",
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Aanchal",
    batch: "2024-25",
    position: "Vice President",
    location: "Delhi", 
    image: "https://i.pravatar.cc/150?u=aanchal",
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Charanya Jogi",
    batch: "2024-25",
    position: "Gen Sec",
    location: "Mumbai", 
    image: "https://i.pravatar.cc/150?u=charanya",
    color: "bg-accent",
  },

  // --- Batch 2023-24 ---
  {
    id: 4,
    name: "Gargi",
    batch: "2023-24",
    position: "President",
    location: "Bangalore", 
    image: "https://i.pravatar.cc/150?u=gargi",
    color: "bg-primary",
  },
  {
    id: 5,
    name: "Sohil",
    batch: "2023-24",
    position: "Vice President",
    location: "Hyderabad", 
    image: "https://i.pravatar.cc/150?u=sohil",
    color: "bg-secondary",
  },
  {
    id: 6,
    name: "Aryan Mani",
    batch: "2023-24",
    position: "Gen Sec",
    location: "Pune", 
    image: "https://i.pravatar.cc/150?u=aryan",
    color: "bg-accent",
  },

  // --- Batch 2022-23 ---
  {
    id: 7,
    name: "Himanshu Mittal",
    batch: "2022-23",
    position: "President",
    location: "Gurgaon", 
    image: "https://i.pravatar.cc/150?u=himanshu",
    color: "bg-primary",
  },
  {
    id: 8,
    name: "Adrija Ghosh",
    batch: "2022-23",
    position: "Vice President",
    location: "Kolkata", 
    image: "https://i.pravatar.cc/150?u=adrija",
    color: "bg-secondary",
  },
];

// Extract unique batches (Sorted newest first)
const batches = ["All", ...new Set(alumni.map(a => a.batch))].sort().reverse();

const Alumni = () => {
  const [selectedBatch, setSelectedBatch] = useState("All");

  const filteredAlumni = selectedBatch === "All" 
    ? alumni 
    : alumni.filter(a => a.batch === selectedBatch);

  return (
    <Layout>
      {/* --- HERO SECTION --- */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container relative px-4 text-center z-10">
          <h1 className="font-display text-5xl md:text-7xl text-foreground tracking-tight mb-6">
            HALL OF <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">FAME</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Honoring the leaders and visionaries who built the foundation of <span className="text-foreground font-medium">Culture-IT</span>.
          </p>
        </div>
      </section>

      {/* --- BATCH FILTER --- */}
      <section className="sticky top-20 z-40 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container px-4 overflow-x-auto">
          <div className="flex justify-center min-w-max gap-2">
            {batches.map((batch) => (
              <button
                key={batch}
                onClick={() => setSelectedBatch(batch)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  selectedBatch === batch
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-card border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {batch === "All" ? "All Batches" : `'${batch.split('-')[1]} Batch`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- LEGACY GRID --- */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredAlumni.map((person, index) => (
              <div 
                key={person.id}
                className="group relative opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* CARD BACKGROUND & GLOW */}
                <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/5`} />
                
                <div className="relative p-8 flex flex-col items-center text-center">
                  
                  {/* 1. BATCH YEAR WATERMARK (Behind Image) */}
                  <div className="absolute top-4 text-[5rem] font-display font-bold text-foreground/5 opacity-50 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    '{person.batch.split('-')[1]}
                  </div>

                  {/* 2. PROFILE IMAGE */}
                  <div className="relative mb-6 mt-4">
                    {/* Standard uniform glow for everyone */}
                    <div className="absolute -inset-1 rounded-full opacity-70 blur-md transition-opacity duration-500 group-hover:opacity-100 bg-primary/20" />
                    
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="relative w-28 h-28 rounded-full object-cover border-4 border-background shadow-xl"
                    />
                  </div>

                  {/* 3. INFO */}
                  <div className="space-y-1 relative z-10">
                    <h3 className="font-display text-2xl text-foreground tracking-wide group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    
                    <div className="flex items-center justify-center gap-2 text-sm font-medium">
                      <div className={`w-2 h-2 rounded-full ${person.color}`} />
                      <span className="text-muted-foreground uppercase tracking-wider text-xs">
                        {person.position}
                      </span>
                    </div>
                  </div>

                  {/* 4. FOOTER INFO */}
                  <div className="mt-6 pt-6 border-t border-border/50 w-full flex justify-between items-center text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Batch {person.batch}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{person.location}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Alumni;