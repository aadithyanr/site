import Link from "next/link";
import {
  PiEnvelopeSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiX,
} from "react-icons/pi";
import { LinkPreview } from "@/components/ui/LinkPreview";
import type { PostItem } from "@/types";

type HomePageProps = {
  posts: PostItem[];
};

const HomePage = ({ posts }: HomePageProps) => {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="home-layout">
      <section className="home-main">
        <header className="portfolio-header">
          <p className="portfolio-greeting">hello, hola, مرحباً</p>
          <h1>aadithyan rajesh</h1>
          <p>
            founding engg at{" "}
            <LinkPreview url="https://context.dev/">context.dev</LinkPreview> (yc
            s26)
          </p>
        </header>

        <div className="site-copy home-intro">
          <p>
            i work across engineering, product and growth at{" "}
            <LinkPreview url="https://context.dev/">context.dev</LinkPreview>,
            making the web usable by ai.
          </p>

          <details className="bio-details">
            <summary>
              <span className="more-label">read more</span>
              <span className="less-label">read less</span>
            </summary>
            <div className="bio-more">
              <p>
                my obsession with computers started when i was eight. i wanted
                to understand how things worked, then learned to code so i
                could make my own.
              </p>
              <p>
                at{" "}
                <LinkPreview url="https://context.dev/">context.dev</LinkPreview>,
                i move between engineering, product and growth, wherever the
                biggest problem is.
              </p>
              <p>
                i built{" "}
                <LinkPreview url="https://www.getnisaa.com/">
                  nisaa
                </LinkPreview>{" "}
                , a first of its kind period tracker for muslim women, and grew
                it to 3,000+ users organically.
              </p>
              <p>
                i researched spiking neural networks at{" "}
                <LinkPreview url="https://ebrain4everyone.com/">
                  nyu&apos;s ebrain lab
                </LinkPreview>
                .
              </p>
              <p>
                after olostep, i interned with the investments and data team at{" "}
                <LinkPreview url="https://www.becocapital.com/">
                  beco capital
                </LinkPreview>
                , mena&apos;s biggest vc.
              </p>
              <p>
                before that, i was a founding engineer at{" "}
                <LinkPreview url="https://www.olostep.com/">
                  olostep
                </LinkPreview>
                , working on data extraction infrastructure for ai companies.
              </p>
              <p>
                i&apos;ve also founded and exited a startup, and worked across a
                bunch of other roles. the full trail is on{" "}
                <a href="https://www.linkedin.com/in/aadithyanrajesh/">
                  linkedin
                </a>
                .
              </p>
            </div>
          </details>

          <div className="investing-note">
            <p className="investing-label">investing</p>
            <p>
              i&apos;m looking to write $1k to $5k checks into early ai,
              developer tools and deep tech startups.{" "}
              <a href="mailto:aadithyan@context.dev">email me</a>
              .
            </p>
          </div>

          <p className="projects-note">
            oh, and i also build{" "}
            <Link href="/projects">projects from scratch</Link>.
          </p>
        </div>

        <nav className="social-links" aria-label="contact links">
          <a
            href="https://x.com/aadithyanr"
            aria-label="aadithyan on x"
            title="x"
          >
            <PiX aria-hidden="true" />
          </a>
          <a
            href="https://github.com/aadithyanr"
            aria-label="aadithyan on github"
            title="github"
          >
            <PiGithubLogo aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/aadithyanrajesh/"
            aria-label="aadithyan on linkedin"
            title="linkedin"
          >
            <PiLinkedinLogo aria-hidden="true" />
          </a>
          <a
            href="mailto:aadithyan@context.dev"
            aria-label="email aadithyan"
            title="email"
          >
            <PiEnvelopeSimple aria-hidden="true" />
          </a>
        </nav>
      </section>

      {recentPosts.length > 0 && (
        <aside className="writing-rail">
          <p className="writing-label">i write occasionally</p>
          <ul>
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blog/${post.slug || post.id}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
          <Link className="writing-all" href="/blog">
            all writing →
          </Link>
        </aside>
      )}
    </div>
  );
};

export default HomePage;
