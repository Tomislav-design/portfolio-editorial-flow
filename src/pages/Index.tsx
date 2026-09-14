import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Index = () => {
  const featuredProject = projects[0];

  return (
    <Layout hideFooter noPadding>
      <section className="relative h-screen overflow-hidden bg-background">
        {/* Subtle radial glow for depth — no photographic background */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, hsl(0 0% 10%) 0%, hsl(0 0% 0%) 65%)",
          }}
        />

        {/* Top-left accent */}
        <div className="absolute top-8 md:top-12 left-6 md:left-12 z-10">
          <span className="text-label text-muted-foreground">
            Zagreb, Croatia
          </span>
        </div>

        {/* Centered name + featured project link */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-6">
            <h1
              className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-serif font-light tracking-tight text-foreground"
              style={{ textShadow: "0 8px 40px rgba(0, 0, 0, 0.45)" }}
            >
              Tomislav
            </h1>
            {featuredProject && (
              <Link
                to={`/work/${featuredProject.id}`}
                className="mt-8 inline-block text-sm uppercase tracking-widest link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                View featured project
              </Link>
            )}
          </div>
        </div>

        {/* Bio — bottom left */}
        <div className="absolute bottom-8 md:bottom-12 left-6 md:left-12 z-10 max-w-xs md:max-w-sm">
          <div className="mb-4 h-px w-8 bg-foreground/30" />
          <p className="text-sm md:text-base font-sans text-foreground/90 leading-relaxed">
            Hi! I'm Tomislav, an independent artist and designer based in Zagreb, Croatia, specializing in brand identity, illustration, and visual design. I help brands tell their stories through thoughtful, distinctive creative work.
          </p>
        </div>

        {/* Bottom-right accent */}
        <div className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-10 hidden sm:block">
          <span className="text-label text-muted-foreground">
            Available for projects
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
