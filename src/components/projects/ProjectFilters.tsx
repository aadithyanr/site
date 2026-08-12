import { AnimatePresence, motion } from "framer-motion";
import { useAtom, useAtomValue } from "jotai";
import {
  CpuIcon,
  GlobeIcon,
  LanguagesIcon,
  NetworkIcon,
  TerminalIcon,
  XIcon,
} from "lucide-react";
import { isProjectsFilterOpenAtom, projectFilterAtom } from "@/utils/atoms";

export default function ProjectFilters() {
  const [selectedCategory, setSelectedCategory] = useAtom(projectFilterAtom);
  const isOpen = useAtomValue(isProjectsFilterOpenAtom);

  const categories = [
    { id: "AI", label: "AI", icon: CpuIcon },
    { id: "Web", label: "Web", icon: GlobeIcon },
    { id: "Systems", label: "Systems", icon: TerminalIcon },
    { id: "Networking", label: "Networking", icon: NetworkIcon },
    { id: "Languages", label: "Languages", icon: LanguagesIcon },
  ] as const;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            y: -4,
            filter: "blur(4px)",
            height: 0,
            marginTop: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            height: "auto",
            marginTop: 12,
          }}
          exit={{
            opacity: 0,
            y: -4,
            filter: "blur(4px)",
            height: 0,
            marginTop: 0,
          }}
          transition={{ duration: 0.4, type: "spring", bounce: 0 }}
          className="flex w-40 flex-col gap-2 overflow-hidden"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                selectedCategory === category.id
                  ? setSelectedCategory(null)
                  : setSelectedCategory(category.id)
              }
              className={`flex w-fit select-none items-center gap-[5px] text-[12px] text-neutral-600 transition-colors hover:text-neutral-950 ${
                selectedCategory === category.id || selectedCategory === null
                  ? "opacity-100"
                  : "opacity-50 "
              }`}
            >
              <category.icon
                className="mb-[1px] mr-px size-3 fill-neutral-200"
                strokeWidth={2.5}
              />
              {category.label}
              <AnimatePresence>
                {selectedCategory === category.id && (
                  <motion.div
                    initial={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -4, filter: "blur(4px)" }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <XIcon className="ml-px size-2.5 text-neutral-400 transition-all duration-200 ease-in-out group-hover:text-neutral-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
