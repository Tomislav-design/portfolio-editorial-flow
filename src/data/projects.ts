import summitArtwork from "@/assets/future-leaders-summit.png.asset.json";
import energiHero from "@/assets/energi-hero.jpg.asset.json";
import energiProductPage from "@/assets/energi-product-page.jpg.asset.json";

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
  detailLine: string;
  solvedHeading: string;
  coverImage: string;
  images: string[];
  imageAlts: string[];
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
    detailLine: "Sept 15–17, 2024 · Downtown Conference Center, NYC",
    solvedHeading: "A complete visual language, built for momentum.",
    coverImage: summitArtwork.url,
    images: [summitArtwork.url],
    imageAlts: ["Future Leaders Summit 2024 complete desktop landing page"],
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
  {
    id: "energi",
    title: "ENERGi",
    category: "Brand identity & product experience",
    tags: ["BRANDING", "WEB DESIGN"],
    year: "2026",
    client: "ENERGi",
    role: "End-to-end brand, 3D product & web design",
    tools: ["Figma", "Blender", "Python", "FFmpeg"],
    description:
      "A from-scratch brand and digital product experience for a natural, caffeine-free fruit energy drink made for children aged 6+. The work balances playful appeal for kids with the clarity, reassurance, and ingredient transparency parents need.",
    detailLine: "Croatian market · Children aged 6+ · Maximum 1 × 330 ml daily",
    solvedHeading: "A bright product world, grounded in parental trust.",
    coverImage: energiHero.url,
    images: [energiHero.url, energiProductPage.url],
    imageAlts: [
      "ENERGi Croatian landing page hero with two lemon drink cans",
      "ENERGi lemon product page with benefits, price, quantity selector, and flavour choices",
    ],
    sections: [
      {
        title: "Brand & product system",
        description:
          "Developed the ENERGi name, energetic wordmark, product identity, design tokens, and a 3D can system as one connected visual language. Teal establishes trust while cream creates warmth and orange is reserved for action and emphasis.",
      },
      {
        title: "Landing experience",
        description:
          "Designed a complete Croatian storefront spanning the hero, product story, benefits, flavours, social proof, FAQ, support and About content, plus a newsletter block with an email field and orange ‘Prijavi me’ call to action.",
      },
      {
        title: "Product page",
        description:
          "Made the essential purchase information immediately scannable: caffeine-free, 100% natural, vitamin benefits, suitability for children aged 6+, price, stock, delivery, quantity and flavour selection all sit beside the product render.",
      },
      {
        title: "Floating navigation",
        description:
          "Created Nav_Floating_Cream as a centered 960 × 64 cream navigation pill with a 32 px radius, soft teal shadow, ENERGi logo, five links and a deep-teal ‘Naruči probni paket’ action. A subtle cream glow reinforces the floating effect.",
      },
      {
        title: "Croatian SEO copy",
        description:
          "Wrote the experience natively in Croatian rather than translating it. The voice stays warm and reassuring for parents, playful for children, and clinically transparent across the hero, product story, ten FAQ answers, expert endorsement, parent reviews and footer disclaimers.",
      },
      {
        title: "Depth, rhythm & photography",
        description:
          "Used layered blurred ellipses, shadows and edge fades instead of flat gradients. Rotated card fans and portrait walls break grid stiffness, while photography bleeds into the brand color rather than sitting inside a hard frame.",
      },
      {
        title: "Trust by design",
        description:
          "Distributed ratings, family counts and expert guidance throughout the journey instead of isolating them in one testimonial section. Ingredient clarity, the 6+ age gate and the maximum daily serving are built into the experience and legal footer.",
      },
      {
        title: "Footer & compliance",
        description:
          "Finished the page with support and About links, newsletter signup, child-safety guidance, copyright, terms, privacy and OIB information—giving a regulated children’s product a clear, credible close.",
      },
    ],
    skills: [
      "Brand strategy",
      "Visual identity",
      "3D product design",
      "Design systems",
      "UI/UX design",
      "Croatian copywriting",
      "SEO copy",
      "Motion workflow",
      "Regulated-category design",
    ],
    outcome:
      "An end-to-end brand system—from name, wordmark and 3D product to a complete localized shopping experience—showing how distinctive visual storytelling, cross-tool production and responsible product communication can work as one cohesive launch-ready concept.",
  },
];