"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type ExperienceItemProps = {
  company: string;
  position: string;
  date: string;
  link: string;
  location: string;
  present?: boolean;
  incoming?: boolean;
};

const ExperienceItem = ({
  company,
  position,
  date,
  link,
  location,
  present,
  incoming,
}: ExperienceItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={link}
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group flex w-full cursor-pointer flex-col gap-1 py-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center transition-all duration-200 ease-in-out group-hover:text-neutral-500 font-medium text-neutral-900`}
          >
            {company}

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

            {present && (
              <span className="ml-2 rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                Present
              </span>
            )}
            {incoming && (
              <span className="ml-2 rounded-full bg-neutral-100 px-1.5 py-0.5 text-[10px] font-medium text-neutral-500">
                Incoming
              </span>
            )}
          </div>
        </div>
        <span className="text-xs tabular-nums text-neutral-300 group-hover:text-neutral-400 transition-colors">
          {date}
        </span>
      </div>
      <div className="flex items-center gap-1.5 text-sm tracking-[0.01em] text-neutral-400">
        <span>{position}</span>
        <span className="text-neutral-300">·</span>
        <span>{location}</span>
      </div>
    </Link>
  );
};

export default ExperienceItem;
