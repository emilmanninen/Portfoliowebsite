// Names, GitHub links, tags, blurbs, screenshots, and live demo links are all real now.
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
    liveHref: "https://qaragbot.emilmanninen.com/",
  },
  {
    name: "LeaguePipeline",
    blurb:
      "Ingests raw League of Legends match data from Riot's API and visualizes champion win rate and pick rate trends.",
    tags: ["REST API Integration", "Data Pipeline", "Raw SQL"],
    githubHref: "https://github.com/emilmanninen/leaguefrontend",
    image: "/projects/960lol.png",
    liveHref: "https://leagueanalytics.emilmanninen.com/",
  },
  {
    name: "ToolShare",
    blurb:
      "A neighborhood marketplace for lending and borrowing tools — list what you have, browse what's available, message neighbors to arrange pickup.",
    tags: ["BaaS", "RLS", "Community App"],
    githubHref: "https://github.com/emilmanninen/neighborhoodapp",
    image: "/projects/960toolshare.png",
    liveHref: "https://toolshare.emilmanninen.com/",
  },
];
