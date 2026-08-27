// Placeholder project copy — names and GitHub links are real, but the one-liners and tags
// below are still drafts. Swap in real descriptions, tech tags, and screenshots before
// treating this section as done.
export type Project = {
  name: string;
  blurb: string;
  tags: string[];
  githubHref: string;
  liveHref?: string;
};

export const projects: Project[] = [
  {
    name: "RAG Chatbot",
    blurb: "One-line placeholder — what problem this project solves and for whom.",
    tags: ["Tag", "Tag", "Tag"],
    githubHref: "https://github.com/emilmanninen/qaragbot",
  },
  {
    name: "LeaguePipeline",
    blurb: "One-line placeholder — what problem LeaguePipeline solves and for whom.",
    tags: ["Tag", "Tag", "Tag"],
    githubHref: "https://github.com/emilmanninen/leaguefrontend",
  },
  {
    name: "ToolShare",
    blurb: "One-line placeholder — what problem ToolShare solves and for whom.",
    tags: ["Tag", "Tag", "Tag"],
    githubHref: "https://github.com/emilmanninen/neighborhoodapp",
  },
];
