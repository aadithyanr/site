import LinkArrow from "@/components/LinkArrow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Aadithyan Rajesh",
  description: "Uh oh! This page does not exist",
};

const Custom404 = (): JSX.Element => (
  <div className="flex flex-col gap-4 animate-10">
    <h1 className="font-serif text-3xl font-medium tracking-tight text-neutral-900">
      404, Page Not Found
    </h1>
    <p className="text-neutral-400 text-sm">
      The page you are looking for does not exist.
    </p>
    <LinkArrow href="/" className="text-sm text-neutral-400">
      Back to Home
    </LinkArrow>
  </div>
);

export default Custom404;
