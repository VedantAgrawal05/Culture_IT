import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SlideContent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  color: "primary" | "secondary" | "accent" | "success";
  icon: React.ReactNode;
}

interface SlidingPanelsProps {
  slides: SlideContent[];
  autoPlayInterval?: number;
}

const colorClasses = {
  primary: "border-primary/50 bg-primary/5",
  secondary: "border-secondary/50 bg-secondary/5",
  accent: "border-accent/50 bg-accent/5",
  success: "border-success/50 bg-success/5",
};

const iconBgClasses = {
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  accent: "bg-accent/20 text-accent",
  success: "bg-success/20 text-success",
};

const SlidingPanels = ({ slides, autoPlayInterval = 5000 }: SlidingPanelsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => setActiveIndex(index);
  const goToPrev = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full">
      {/* Main Slider */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className={cn(
                "min-w-full p-6 md:p-10 border-l-4",
                colorClasses[slide.color]
              )}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className={cn("p-4 rounded-xl", iconBgClasses[slide.color])}>
                  {slide.icon}
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
                    {slide.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={goToPrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SlidingPanels;
