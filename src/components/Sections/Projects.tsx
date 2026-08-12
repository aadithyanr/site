import React from 'react';
import { ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="group border border-neutral-200 relative rounded-lg bg-background p-4 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <ExternalLink 
          className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-neutral-500 dark:text-neutral-500 dark:group-hover:text-neutral-400" 
        />
      </div>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      "title": "ohmymood",
      "description": "an ai app that sends you food when you're sad.",
      "link": "https://github.com/aadithyanr/ohmymood"
    },
    {
      "title": "ConvoSense",
      "description": "Scrapes Google and sitemap data to suggest the perfect conversation starter.",
      "link": "https://github.com/aadithyanr/convosense"
    },
    {
      "title": "Pebble",
      "description": "An AI powered app that builds and shares chatbots in under 5 minutes.",
      "link": "https://pebble.ae"
    },    
    {
      "title": "MOP",
      "description": "A Go CLI tool that recursively cleans every node_modules directory in your system.",
      "link": "https://github.com/aadithyanr/mop"
    },
    {
      "title": "Mindfuck",
      "description": "A Brainfuck interpreter implemented from scratch in C.",
      "link": "https://github.com/aadithyanr/bf-interpreter"
    },
    {
      "title": "Socketeer",
      "description": "A Linux socket API implemented from scratch in C++.",
      "link": "https://github.com/aadithyanr/groupchat"
    },
  ];

  return (
    <div className="w-full">
      <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        Projects
      </h1>
      <p className="mb-6 max-w-lg text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 md:text-base">
        Learning through building from scratch.
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link}
            className="block no-underline"
          >
            <ProjectCard {...project} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
