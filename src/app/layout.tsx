import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "./globals.css";
import ContentWrapper from "@/components/ContentWrapper";
import BackButton from "@/components/BackButton";

export const metadata: Metadata = {
  title: "aadithyan rajesh",
  description: "founding engg at context.dev, making the web usable by ai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="firefox-scrollbar-fix min-h-screen">
          <ContentWrapper>
            <BackButton />
            {children}
          </ContentWrapper>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
