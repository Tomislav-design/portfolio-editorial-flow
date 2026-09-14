import summitArtwork from "@/assets/future-leaders-summit.png.asset.json";

export interface ProjectSection {
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  role: string;
  tools: string[];
  description: string;
  coverImage: string;
  images: string[];
  sections: ProjectSection[];
  skills: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "future-leaders-summit-2024",
    title: "Future Leaders Summit 2024",
    category: "Conference landing page",
    tags: ["WEB DESIGN", "BRAND IDENTITY"],
    year: "2024",
    client: "Future Leaders Summit",
    role: "End-to-end web design & responsive",
    tools: ["Figma", "Kinetik design system", "Google Fonts"],
    description:
      "A complete landing page for a three-day business conference, designed from scratch for a youthful, mixed audience. The direction balances corporate clarity with visionary energy across the hero, speakers, agenda, registration, upcoming events, and footer.",
    coverImage: summitArtwork.url,
    images: [summitArtwork.url],
    sections: [
      {
        title: "Brand & identity",
        description:
          "Explored six typography and color directions before defining the selected identity, including an ascending double-chevron logo and flexible logo variants.",
      },
      {
        title: "Kinetik design system",
        description:
          "Built a reusable foundation of H1–H4, Body, Body Bold, and Eyebrow styles using Space Grotesk, Inter, and Space Mono. Paint styles pair Midnight, Cobalt, Blaze Orange, White, and Steel, with contrast verified to WCAG standards.",
      },
      {
        title: "Content & SEO",
        description:
          "Developed the page narrative from headline to conversion, including subheads, eyebrow copy, calls to action, metadata, a focused page title, description, slug, and keyword direction.",
      },
      {
        title: "Hero & speakers",
        description:
          "Created a marquee wordmark behind a veiled foreground hierarchy. Speaker portraits use a cohesive duotone and grain treatment, with cards designed to flip on hover and reveal more detail.",
      },
      {
        title: "Agenda & events",
        description:
          "Explored three agenda systems: a horizontal accordion, a detailed icon-and-gauge concept, and the final vertical timeline with scroll reveals. Upcoming Events combines a featured video with a live thumbnail filmstrip.",
      },
      {
        title: "Registration & footer",
        description:
          "Designed a two-column registration experience with an illustration, underline inputs, ticket selectors, and a direct submit action. The glass-inspired footer closes with social links, newsletter signup, and an oversized wordmark.",
      },
      {
        title: "Responsive handoff",
        description:
          "Created dedicated tablet and mobile versions, pairing manual refinements with structured Figma AI prompts. Every interaction—including flips, accordions, reveals, marquee motion, and glass effects—was documented for development.",
      },
    ],
    skills: [
      "Brand identity",
      "Design systems",
      "Type scale",
      "WCAG",
      "Duotone & grain",
      "Micro-interactions",
      "SEO copy",
      "Responsive design",
    ],
    outcome:
      "A complete Figma landing page—from brand direction and design system through every desktop, tablet, and mobile section—with interactions documented and the final experience ready for developer handoff.",
  },
];