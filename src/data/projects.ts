import summitHero from "@/assets/future-leaders-hero.png.asset.json";
import summitSpeakers from "@/assets/future-leaders-speakers.png.asset.json";
import energiHero from "@/assets/energi-hero.jpg.asset.json";
import energiProductPage from "@/assets/energi-product-page.jpg.asset.json";
import capturrHero from "@/assets/capturr-hero.jpg.asset.json";
import capturrPortfolio from "@/assets/capturr-portfolio.png.asset.json";
import capturrFooter from "@/assets/capturr-footer.png.asset.json";

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
    coverImage: summitHero.url,
    images: [summitHero.url, summitSpeakers.url],
    imageAlts: [
      "Future Leaders Summit 2024 hero with speaker filmstrip, headline, and event details",
      "Future Leaders Summit 2024 keynote speakers section with numbered speaker cards",
    ],
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
  {
    id: "capturr-photography-studio",
    title: "CAPTURR® — Photography Studio",
    category: "Brand identity & editorial photography website",
    tags: ["BRAND IDENTITY", "WEB DESIGN"],
    year: "2026",
    client: "CAPTURR® Photography Studio",
    role: "End-to-end brand & web design",
    tools: ["Figma", "HTML", "CSS"],
    description:
      "A brand identity and single-page editorial website for a Zagreb portrait, lifestyle, wedding and commercial photography studio. The experience showcases the work, communicates an artistic point of view, and turns interest into bookings without falling into familiar wedding-boutique, dark-tech or newspaper-inspired conventions.",
    detailLine: "Zagreb, Croatia · Identity · Design system · UX/UI · Prototyping",
    solvedHeading: "The frame CAPTURR chooses to keep.",
    coverImage: capturrHero.url,
    images: [capturrHero.url, capturrPortfolio.url, capturrFooter.url],
    imageAlts: [
      "CAPTURR photography studio homepage with viewfinder wordmark and editorial photo strip",
      "CAPTURR portfolio section showing wedding, pregnancy, brand, and portrait photography",
      "CAPTURR contact footer with oversized typography and a 50mm camera lens replacing the letter O",
    ],
    sections: [
      {
        title: "The viewfinder idea",
        description:
          "Built the identity around four corner brackets: the frame CAPTURR chooses to keep. The viewfinder mark frames photography, headings and the wordmark, turning selection—not merely capture—into the studio’s defining idea.",
      },
      {
        title: "Photographic neutral + cyanotype",
        description:
          "Cool paper and ink neutrals let warm portraits and commercial work coexist without the interface competing with the image. Cyanotype blue, drawn from one of photography’s oldest processes, is the single accent connecting traditional craft with a modern finish.",
      },
      {
        title: "Editorial type system",
        description:
          "Paired Schibsted Grotesk Bold for confident headlines, Libre Franklin for clear editorial body copy and UI, and DM Mono for frame numbers, labels and EXIF-style details. Three families create one disciplined hierarchy.",
      },
      {
        title: "Logo & photography direction",
        description:
          "Created horizontal, reversed, icon and stacked stamp lockups, including a cyanotype center dot and outlined vector delivery. Photography uses cyanotype-leaning shadows, true skin tones, soft key light, deep falloff, tight off-center crops, negative space and restrained film grain.",
      },
      {
        title: "Hero & approach",
        description:
          "Activated the hero’s negative space with mono studio labels, a viewfinder-framed CAPTURR® stamp and a film-strip grid that dissolves into paper. The three-part manifesto—We read you, We shape your light, We keep the frame—translates the artistic method into client language.",
      },
      {
        title: "Portfolio & services",
        description:
          "Designed a featured shoot, six-category filter and labeled thumbnail contact sheet, separated from adjacent photography by a paper-fade seam. A centered services carousel combines imagery, rich descriptions, practical inclusions and clear quote and portfolio actions.",
      },
      {
        title: "Contact, menu & motion",
        description:
          "The contact collage turns photo-filled letters into viewfinder windows, layering labeled, rotated images around booking details. A dark six-category overlay, fade seams, cover-flow motion and considered hover states extend the identity through interaction.",
      },
      {
        title: "The closing frame",
        description:
          "A giant GET IN TOUCH footer replaces the O with a native 50mm f/1.4 lens built from concentric barrel, focus and aperture rings, cyanotype glass and a specular highlight. Link columns, local time and back-to-top complete the story the viewfinder opened.",
      },
      {
        title: "System & handoff",
        description:
          "Structured ten text styles, eight color tokens and reusable marks, lockups, buttons, chips, cards and rows as native Figma variables and components. HTML/CSS mockups document interaction, leaving the full experience ready for Webflow or custom front-end development.",
      },
    ],
    skills: [
      "Brand identity",
      "Design system architecture",
      "Typography hierarchy",
      "Editorial art direction",
      "UX composition",
      "Micro-interactions",
      "Duotone treatment",
      "Icon systems",
      "Responsive design",
      "Case-study writing",
    ],
    outcome:
      "A photography studio identity and website that feels neither wedding-boutique nor tech-flat. Cool photographic neutrals, one ownable cyanotype accent, recurring viewfinder brackets, mono labels and duotone imagery make every section feel edited rather than assembled—and ready to convert enquiries into bookings.",
  },
];