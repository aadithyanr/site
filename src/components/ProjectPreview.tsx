"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectPreview = ({
  title,
  description,
  link,
  logo,
}: {
  title: string;
  description: string;
  link: string;
  logo: string;
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group flex w-fit cursor-pointer flex-col gap-1 py-3"
    >
      <div className="flex items-center gap-2">
        {logo && (
          <Image
            src={logo}
            alt={title}
            width={14}
            height={14}
            className="mb-0.5 h-3.5 w-3.5"
          />
        )}
        <div
          className={`flex items-center transition-all duration-200 ease-in-out group-hover:text-neutral-500 `}
        >
          {title}

          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                animate={{ opacity: 1, width: "auto", marginLeft: 4, scale: 1 }}
                exit={{ opacity: 0, width: 0, marginLeft: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ArrowUpRight className={`h-2.5 w-2.5`} strokeWidth={2.6} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <p className="text-sm tracking-[0.01em] text-neutral-400">
        {description}
      </p>
    </Link>
  );
};

export default ProjectPreview;
