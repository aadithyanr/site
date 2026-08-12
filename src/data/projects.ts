export type Project = {
  title: string;
  description: string;
  link: string;
  category: "AI" | "Web" | "Systems" | "Networking" | "Languages" | "Mobile";
  year?: string;
  featured?: boolean;
  logo?: string;
};

export const projects: Project[] = [
  // Featured Projects (from HomePage)
  {
    title: "Nisaa",
    description: "First period tracker App built for Muslim women with Islamic guidance and fiqh rulings.",
    link: "https://apps.apple.com/us/app/nisaa-muslim-cycle-tracking/id6756938661",
    category: "Mobile",
    featured: true,
  },
  {
    title: "Anti Doomscroll",
    description: "A browser extension that blocks doom scrolling habits and keeps you intentional online.",
    link: "https://github.com/aadithyanr/Anti-Doomscroll",
    category: "Web",
    featured: true,
  },
  {
    title: "Ferrite",
    description: "A minimal database written in Rust from scratch, with b tree indexing, write ahead logging, and a sql parser.",
    link: "https://github.com/aadithyanr/ferrite",
    category: "Systems",
    featured: true,
  },
  {
    title: "ohmymood",
    description: "An AI app that sends you food when you're sad.",
    link: "https://github.com/aadithyanr/ohmymood",
    category: "AI",
    featured: true,
  },
  {
    title: "ConvoSense",
    description: "Scrapes Google and sitemap data to suggest conversation starters.",
    link: "https://github.com/aadithyanr/convosense",
    category: "AI",
    featured: true,
  },
  {
    title: "Pebble",
    description: "AI powered app that builds and shares chatbots in under 5 minutes.",
    link: "https://pebble.ae",
    category: "AI",
    featured: true,
  },
  {
    title: "MOP",
    description: "A Go CLI tool that recursively cleans node_modules.",
    link: "https://github.com/aadithyanr/mop",
    category: "Systems",
    featured: true,
  },
  {
    title: "Mindfuck",
    description: "A Brainfuck interpreter implemented from scratch in C.",
    link: "https://github.com/aadithyanr/bf-interpreter",
    category: "Languages",
    featured: true,
  },
  {
    title: "Socketeer",
    description: "A Linux socket API implemented from scratch in C++.",
    link: "https://github.com/aadithyanr/groupchat",
    category: "Networking",
    featured: true,
  },

  // Scratch Projects (from Scratch page)
  {
    title: "linux containers in c",
    description: "A minimal container runtime implementation",
    link: "https://github.com/aadithyanr/linux-containers",
    category: "Systems",
  },
  {
    title: "http server in c++",
    description: "A lightweight HTTP server built from scratch",
    link: "https://github.com/aadithyanr/http-server",
    category: "Networking",
  },
  {
    title: "port scanner in rust",
    description: "A fast, concurrent port scanner",
    link: "https://github.com/aadithyanr/rportscan",
    category: "Networking",
  },
  {
    title: "dns server in rust",
    description: "A DNS server implementation",
    link: "https://github.com/aadithyanr/dns-server",
    category: "Networking",
  },
  {
    title: "arithmetic interpreter in go",
    description: "A simple interpreter for arithmetic expressions",
    link: "https://github.com/aadithyanr/arithmetic-interpreter",
    category: "Languages",
  },
  {
    title: "programming language in py",
    description: "A simple programming language implementation",
    link: "https://github.com/aadithyanr/my-lang",
    category: "Languages",
  },
];
