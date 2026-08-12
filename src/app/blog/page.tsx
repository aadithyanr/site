import Link from "next/link";
import moment from "moment";
import { getSortedPosts } from "@/lib/blogs";

export default function Blog() {
  const posts = getSortedPosts();

  return (
    <section className="writing-index">
      <header className="writing-index-header">
        <h1>writing</h1>
        <p>notes on software, products and things i keep thinking about.</p>
      </header>

      <ol className="writing-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="writing-item"
              href={`/blog/${post.slug || post.id}`}
            >
              <div className="writing-item-topline">
                <h2>{post.title}</h2>
                <time dateTime={post.date}>
                  {moment(post.date, "MM-DD-YYYY").format("MMM YYYY")}
                </time>
              </div>
              {post.description && <p>{post.description}</p>}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
