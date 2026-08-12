// src/components/HomeContent.tsx

"use client";

import { motion } from "framer-motion";
import Experiences from "@/components/Sections/Experiences";
import Projects from "@/components/Sections/Projects";
import LatestPosts from "@/components/Sections/LatestPosts";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { Spotlight } from "@/components/ui/Spotlight";
import type { PostItem } from "@/types";

type HomeContentProps = {
  posts: Record<string, PostItem[]>;
};

export default function HomeContent({ posts }: HomeContentProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.main
      className="flex flex-col gap-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <motion.div variants={itemVariants} className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Aadithyan Rajesh
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          I&apos;m a founding engineer building real world data infrastructure for
          AI at{" "}
          <LinkPreview url="https://context.dev/">
            <span className="font-semibold text-foreground">context.dev</span>
          </LinkPreview>
          .
        </p>
        <p className="max-w-2xl text-lg text-muted-foreground">
          You can find my thoughts on technology and design in my{" "}
          <LinkPreview url="/blog">
            <span className="font-semibold text-foreground">writing</span>
          </LinkPreview>
          , or connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/aadithyanrajesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground hover:underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Experiences />
      </motion.div>

      <motion.div variants={itemVariants}>
        <Projects />
      </motion.div>

      <motion.div variants={itemVariants}>
        <LatestPosts posts={posts} />
      </motion.div>
    </motion.main>
  );
}
