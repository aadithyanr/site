import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostData } from "@/lib/blogs";
import BlogMedia, {
  type BlogMediaKind,
} from "@/components/blog/BlogMedia";

const mediaMarker = /<p>\[\[media:(cracked|community|food)\]\]<\/p>/g;

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

      <div className="post">
        {post.contentHtml.split(mediaMarker).map((part, index) =>
          index % 2 === 0 ? (
            <div
              className="post-copy"
              dangerouslySetInnerHTML={{ __html: part }}
              key={`copy-${index}`}
            />
          ) : (
            <BlogMedia kind={part as BlogMediaKind} key={`media-${part}`} />
          ),
        )}
      </div>

      <footer className="article-footer">
        <Link href="/blog">all writing</Link>
        <Link href="/">home</Link>
      </footer>
    </article>
  );
};

export default Post;
