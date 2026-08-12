import HomePage from "@/components/HomePage";
import { getSortedPosts } from "@/lib/blogs";

export default function Home() {
  const posts = getSortedPosts();
  return <HomePage posts={posts} />;
}
