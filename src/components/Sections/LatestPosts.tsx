import PostList from "@/app/blog/components/PostList";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PostItem } from "@/types";

type LatestPostsProps = {
  posts: Record<string, PostItem[]>;
};

export default function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <div>
      <Link
        className="mb-1 flex items-center gap-1 text-xl font-bold"
        href="/blog"
      >
        Writing
        <ArrowUpRightIcon className="h-6 w-6 text-text-dark-headerDark transition-all hover:text-text-dark-body" />
      </Link>
      <p className="mb-4 max-w-lg text-sm leading-relaxed text-text-light-body dark:text-text-dark-body md:text-base">
        I occasionally write about things that I find interesting.
      </p>
      <PostList posts={posts} />
    </div>
  );
}
