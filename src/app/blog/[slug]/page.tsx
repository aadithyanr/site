import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/blogs";

const Post = async ({ params }: { params: { slug: string } }) => {
  let post;

  try {
    post = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <article className="article-page">
      <header className="article-header">
        <p className="article-category">{post.category}</p>
        <h1>{post.title}</h1>
        {post.description && <p className="article-deck">{post.description}</p>}
        <div className="article-meta">
          <time>{post.date}</time>
          <span>{post.readTime} min read</span>
        </div>
      </header>

      <div
        className="post"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      <footer className="article-footer">
        <Link href="/blog">all writing</Link>
        <Link href="/">home</Link>
      </footer>
    </article>
  );
};

export default Post;
