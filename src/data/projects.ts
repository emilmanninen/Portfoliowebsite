// Names, GitHub links, tags, and blurbs are all real now. Live demo links are still "#"
// placeholders (only there to test the button layout), and ToolShare still needs a screenshot.
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  githubHref: string;
  liveHref?: string;
  /** Path under public/, e.g. "/projects/leaguepipeline.png". Omit to show the placeholder box. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "RAG Chatbot",
    blurb:
      "Answers questions about Finnish student financial aid (Kela) with citations back to the source page.",
    tags: ["RAG", "FastAPI", "pgvector"],
    githubHref: "https://github.com/emilmanninen/qaragbot",
    image: "/projects/1280800ragbpt.png",
    liveHref: "#", // placeholder — just testing the Live demo button layout
  },
  {
    name: "LeaguePipeline",
    blurb:
      "Ingests raw League of Legends match data from Riot's API and visualizes champion win rate and pick rate trends.",
    tags: ["REST API Integration", "Data Pipeline", "Raw SQL"],
    githubHref: "https://github.com/emilmanninen/leaguefrontend",
    image: "/projects/loldash1280800.png",
    liveHref: "#", // placeholder — just testing the Live demo button layout
  },
  {
    name: "ToolShare",
    blurb:
      "A neighborhood marketplace for lending and borrowing tools — list what you have, browse what's available, message neighbors to arrange pickup.",
    tags: ["BaaS", "RLS", "Community App"],
    githubHref: "https://github.com/emilmanninen/neighborhoodapp",
    liveHref: "#", // placeholder — just testing the Live demo button layout
  },
];
