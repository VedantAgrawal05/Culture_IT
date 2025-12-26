import { useState } from "react";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import { cn } from "@/lib/utils";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";
import heroBanner from "@/assets/hero-banner.png";

const galleryImages = [
  { id: 1, src: event1, title: "Cultural Fest 2024", category: "Dance" },
  { id: 2, src: event2, title: "Music Night", category: "Music" },
  { id: 3, src: event3, title: "Art Exhibition", category: "Art" },
  { id: 4, src: heroBanner, title: "Unity Celebration", category: "Festival" },
  { id: 5, src: event1, title: "Classical Dance Performance", category: "Dance" },
  { id: 6, src: event2, title: "Instrumental Evening", category: "Music" },
  { id: 7, src: event3, title: "Craft Workshop", category: "Art" },
  { id: 8, src: heroBanner, title: "Diwali Celebration", category: "Festival" },
  { id: 9, src: event1, title: "Folk Dance Competition", category: "Dance" },
];

const categories = ["All", "Dance", "Music", "Art", "Festival"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-success/10 to-transparent">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
              PHOTO <span className="text-success">GALLERY</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Relive the beautiful moments from our past events. 
              Every picture tells a story of unity, celebration, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border">
        <div className="container px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square opacity-0 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs font-medium text-primary">{image.category}</span>
                  <h3 className="font-display text-lg text-foreground tracking-wider">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div 
            className="max-w-4xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl"
            />
            <div className="mt-4 text-center">
              <span className="text-sm font-medium text-primary">{selectedImage.category}</span>
              <h3 className="font-display text-2xl text-foreground tracking-wider mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
