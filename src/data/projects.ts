// Names, GitHub links, and tags are real. The one-liner blurbs are still placeholders, and
// ToolShare still needs a screenshot.
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
    blurb: "One-line placeholder — what problem this project solves and for whom.",
    tags: ["RAG", "FastAPI", "pgvector"],
    githubHref: "https://github.com/emilmanninen/qaragbot",
    image: "/projects/1280800ragbpt.png",
  },
  {
    name: "LeaguePipeline",
    blurb: "One-line placeholder — what problem LeaguePipeline solves and for whom.",
    tags: ["REST API Integration", "Data Pipeline", "Raw SQL"],
    githubHref: "https://github.com/emilmanninen/leaguefrontend",
    image: "/projects/loldash1280800.png",
  },
  {
    name: "ToolShare",
    blurb: "One-line placeholder — what problem ToolShare solves and for whom.",
    tags: ["BaaS", "RLS", "Community App"],
    githubHref: "https://github.com/emilmanninen/neighborhoodapp",
  },
];
