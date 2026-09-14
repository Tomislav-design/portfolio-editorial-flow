import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const featuredProject = projects[0];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate offset from center (normalized to -1 to 1)
    const x = (e.clientX - rect.left - centerX) / centerX;
    const y = (e.clientY - rect.top - centerY) / centerY;
    
    setMousePosition({ x, y });
  };

  return (
    <Layout hideFooter noPadding>
      <section 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative h-screen overflow-hidden"
      >
        <div
          className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePosition.x * 40}px, ${-mousePosition.y * 40}px)`,
          }}
        >
          {featuredProject && (
            <img
              src={featuredProject.coverImage}
              alt="Future Leaders Summit 2024 website design"
              className="h-[118%] w-[118%] object-cover object-top opacity-60"
            />
          )}
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-background/30" />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight text-foreground">
              Tomislav
            </h1>
            {featuredProject && (
              <Link to={`/work/${featuredProject.id}`} className="mt-6 inline-block text-sm uppercase tracking-widest link-underline">
                View featured project
              </Link>
            )}
          </div>
        </div>

        {/* Bio - Bottom Left */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10 max-w-xs md:max-w-sm">
          <p className="text-sm md:text-base font-sans text-foreground/80 leading-relaxed">
            Hi! I'm Tomislav, an independent artist and designer based in Zagreb, Croatia, specializing in brand identity, illustration, and visual design. I help brands tell their stories through thoughtful, distinctive creative work.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
