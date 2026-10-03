"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import Image from "next/image";
import { encode } from "qss";
import type { ReactNode } from "react";

type LinkPreviewProps = {
  children: ReactNode;
  url: string;
};

const companyIcons: Record<string, string> = {
  "context.dev": "/img/company-icons/context.png",
  "getnisaa.com": "/img/company-icons/nisaa.png",
  "ebrain4everyone.com": "/img/company-icons/nyu.png",
  "becocapital.com": "/img/company-icons/beco.png",
  "olostep.com": "/img/company-icons/olostep.png",
};

export const LinkPreview = ({ children, url }: LinkPreviewProps) => {
  const isExternal = /^https?:\/\//.test(url);
  const absoluteUrl = new URL(url, "https://aadithyanrajesh.com").toString();
  const domain = new URL(absoluteUrl).hostname.replace(/^www\./, "");
  const icon = companyIcons[domain];
  const src = `https://api.microlink.io/?${encode({
    url: absoluteUrl,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 1200,
    "viewport.height": 750,
  })}`;

  return (
    <HoverCard.Root openDelay={140} closeDelay={80}>
      <HoverCard.Trigger
        href={url}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="company-link"
      >
        {icon && (
          <span
            className="company-link-icon"
            data-domain={domain}
            aria-hidden="true"
          >
            <Image src={icon} width={18} height={18} alt="" />
          </span>
        )}
        <span className="company-link-label">{children}</span>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className="company-preview"
          side="right"
          align="center"
          sideOffset={14}
          collisionPadding={18}
        >
          <div className="company-preview-image">
            <Image
              src={src}
              width={288}
              height={180}
              quality={72}
              alt={`${children} website preview`}
            />
          </div>
          <span>{domain}</span>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
