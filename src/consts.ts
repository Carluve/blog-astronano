import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Carlos Luengo Vera",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "AI researcher applying Generative AI to education, business, and public services.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/carluve",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/carlosluengo/",
  },
  {
    NAME: "orcid",
    HREF: "https://orcid.org/0009-0008-2591-1210",
  }
];
