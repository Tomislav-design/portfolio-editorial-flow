import { Navigate, Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) return <Navigate to="/work" replace />;

  return (
    <Layout noPadding headerRevealMode showEchelonFooter>
      <section className="relative min-h-screen overflow-hidden bg-card">
        <img
          src={project.coverImage}
          alt={`${project.title} landing page overview`}
          className="absolute inset-0 h-full w-full object-cover object-top opacity-55"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 container-wide flex min-h-screen flex-col justify-end pb-12 pt-32 md:pb-16">
          <p className="text-label mb-5">{project.category} · {project.year}</p>
          <h1 className="max-w-5xl font-display text-5xl font-bold leading-none sm:text-6xl md:text-8xl lg:text-9xl">
            {project.title}
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span key={tag} className="border border-foreground/30 px-3 py-1 text-xs uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-16 md:py-24">
        <div className="grid gap-12 border-b border-separator pb-16 md:grid-cols-3 md:gap-16 md:pb-24">
          <dl className="space-y-8">
            <div>
              <dt className="text-label mb-2">Type</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt className="text-label mb-2">Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt className="text-label mb-2">Tools</dt>
              <dd>{project.tools.join(" · ")}</dd>
            </div>
          </dl>
          <div className="md:col-span-2">
            <p className="text-label mb-5">Brief</p>
            <p className="text-2xl leading-relaxed text-muted-foreground md:text-3xl">
              {project.description}
            </p>
            <p className="mt-8 text-sm uppercase tracking-widest text-foreground">
              Sept 15–17, 2024 · Downtown Conference Center, NYC
            </p>
          </div>
        </div>
      </section>

      <section className="container-wide pb-20 md:pb-32">
        <div className="mx-auto max-w-5xl overflow-hidden border border-separator bg-card">
          <img
            src={project.images[0]}
            alt={`${project.title} complete desktop landing page`}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="border-y border-separator">
        <div className="container-wide py-20 md:py-32">
          <p className="text-label mb-6">Solved</p>
          <h2 className="text-headline max-w-3xl">A complete visual language, built for momentum.</h2>
          <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {project.sections.map((section, index) => (
              <article key={section.title} className="border-t border-separator pt-6">
                <p className="mb-6 text-xs text-muted-foreground">0{index + 1}</p>
                <h3 className="mb-4 text-2xl font-semibold">{section.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{section.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="text-label mb-6">Skills</p>
            <div className="flex flex-wrap gap-3">
              {project.skills.map((skill) => (
                <span key={skill} className="border border-separator px-4 py-2 text-sm">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-label mb-6">Outcome</p>
            <p className="text-2xl leading-relaxed md:text-3xl">{project.outcome}</p>
          </div>
        </div>
      </section>

      <section className="container-wide pb-24">
        <Link to="/work" className="group inline-flex items-center gap-3 text-muted-foreground hover-highlight">
          <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to selected work</span>
        </Link>
      </section>
    </Layout>
  );
};

export default Project;