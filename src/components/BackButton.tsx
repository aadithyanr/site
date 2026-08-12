"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BackButton = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const href = pathname.startsWith("/blog/") ? "/blog" : "/";
  const label = pathname.startsWith("/blog/") ? "writing" : "home";

  return (
    <nav className="site-back" aria-label="Back">
      <Link href={href}>← {label}</Link>
    </nav>
  );
};

export default BackButton;
