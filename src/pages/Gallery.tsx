import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { X, ArrowLeft, Image as ImageIcon } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";
import heroBanner from "@/assets/hero-banner.png";

// 1. DATA: Add 'eventName' to make the section headings pretty
const galleryImages = [
  // --- Nandotsav 2.0 ---
  { id: 1, src: event1, title: "Krishna Dance", category: "Dance", eventId: "nandotsav-2", eventName: "Nandotsav 2.0 (2024)" },
  { id: 2, src: event2, title: "Dahi Handi", category: "Festival", eventId: "nandotsav-2", eventName: "Nandotsav 2.0 (2024)" },
  { id: 3, src: event3, title: "Crowd Cheers", category: "Crowd", eventId: "nandotsav-2", eventName: "Nandotsav 2.0 (2024)" },
  
  // --- Vibrance 2024 ---
  { id: 4, src: event3, title: "Main Stage", category: "Festival", eventId: "vibrance-2024", eventName: "Vibrance 2024" },
  { id: 5, src: heroBanner, title: "Opening Ceremony", category: "Festival", eventId: "vibrance-2024", eventName: "Vibrance 2024" },
  { id: 6, src: event1, title: "DJ Night", category: "Music", eventId: "vibrance-2024", eventName: "Vibrance 2024" },
  { id: 7, src: event2, title: "Fashion Show", category: "Fashion", eventId: "vibrance-2024", eventName: "Vibrance 2024" },

  // --- Vibnexus ---
  { id: 8, src: event1, title: "Group Dance", category: "Dance", eventId: "vibnexus-2024", eventName: "Vibnexus '24" },
  { id: 9, src: event2, title: "Solo Act", category: "Music", eventId: "vibnexus-2024", eventName: "Vibnexus '24" },
];

const Gallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterEventId = searchParams.get("event");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // 2. LOGIC: Group images by their Event Name
  const groupedImages = useMemo(() => {
    // If a specific event is selected via URL, filter first
    const relevantImages = filterEventId 
      ? galleryImages.filter(img => img.eventId === filterEventId)
      : galleryImages;

    // Group them: { "Nandotsav": [img1, img2], "Vibrance": [img3, img4] }
    const groups: Record<string, typeof galleryImages> = {};
    
    relevantImages.forEach((img) => {
      if (!groups[img.eventName]) {
        groups[img.eventName] = [];
      }
      groups[img.eventName].push(img);
    });

    return groups;
  }, [filterEventId]);

  const clearFilter = () => setSearchParams({});

  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container px-4 text-center">
          <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-wider mb-4">
            PHOTO <span className="text-primary">GALLERY</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {filterEventId 
              ? "Viewing a specific collection. Relive the moments from this event."
              : "A visual timeline of our journey, captured one frame at a time."}
          </p>
          
          {filterEventId && (
            <Button variant="outline" onClick={clearFilter} className="mt-6 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to All Albums
            </Button>
          )}
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="container px-4 pb-24 space-y-20">
        {Object.keys(groupedImages).length > 0 ? (
          Object.entries(groupedImages).map(([eventName, images], sectionIndex) => (
            <section key={eventName} className="animate-fade-in" style={{ animationDelay: `${sectionIndex * 100}ms` }}>
              
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8 border-b border-border/50 pb-4">
                <h2 className="font-display text-3xl text-foreground">{eventName}</h2>
                <span className="text-muted-foreground text-sm font-medium px-3 py-1 bg-secondary/10 rounded-full">
                  {images.length} Photos
                </span>
              </div>

              {/* Grid for this specific event */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, imgIndex) => (
                  <div
                    key={image.id}
                    className="relative group cursor-pointer overflow-hidden rounded-xl aspect-square bg-muted"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1">
                        {image.category}
                      </span>
                      <p className="text-white font-display text-lg">
                        {image.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))
        ) : (
          <div className="text-center py-20 opacity-50">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <p className="text-xl">No photos found for this event.</p>
            <Button variant="link" onClick={clearFilter} className="mt-2">
              View all albums
            </Button>
          </div>
        )}
      </div>

      {/* Lightbox Modal (Same as before) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] rounded-md shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-2xl text-white font-display tracking-wide">
                {selectedImage.title}
              </h3>
              <p className="text-white/60 mt-2">
                {selectedImage.eventName} • {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;