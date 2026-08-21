"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { type PointerEvent, type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type IdentityHoverProps = {
  children: ReactNode;
};

export default function IdentityHover({ children }: IdentityHoverProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawRotate = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 26, mass: 0.45 });
  const y = useSpring(rawY, { stiffness: 220, damping: 26, mass: 0.45 });
  const rotate = useSpring(rawRotate, {
    stiffness: 220,
    damping: 26,
    mass: 0.45,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const movePreview = (event: PointerEvent<HTMLDivElement>) => {
    const horizontal = event.clientX / window.innerWidth - 0.5;
    const vertical = event.clientY / window.innerHeight - 0.5;

    rawX.set(horizontal * 12);
    rawY.set(vertical * 8);
    rawRotate.set(horizontal * 2.4);
  };

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") {
      return;
    }

    movePreview(event);
    setVisible(true);
  };

  const handlePointerLeave = () => {
    setVisible(false);
    rawX.set(0);
    rawY.set(0);
    rawRotate.set(0);
  };

  return (
    <>
      <div
        className="identity-hover-target"
        onPointerEnter={handlePointerEnter}
        onPointerMove={movePreview}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {visible && (
              <motion.figure
                className="identity-hover-preview"
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ x, y, rotate }}
              >
                <Image
                  src="/aadithyan-hover.jpg"
                  alt=""
                  width={1200}
                  height={1600}
                  quality={85}
                  priority
                  sizes="(max-width: 820px) 0px, 252px"
                />
              </motion.figure>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
