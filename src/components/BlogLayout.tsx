import Link from "next/link";

interface BlogLayoutProps {
  title: string;
  authorName?: string;
  authorLink?: string;
  lastUpdated: string;
  featuredImage: string;
  featuredImageAlt: string;
  children: React.ReactNode;
}

export default function BlogLayout({
  title,
  authorName = "Dan Labrador",
  authorLink = "https://daniellabrador.com",
  lastUpdated,
  featuredImage,
  featuredImageAlt,
  children,
}: BlogLayoutProps) {
  return (
    <div className="blog-container">
      <nav className="blog-nav">
        <div className="blog-nav__logo">
          <Link href="/">
            <img
              src="/images/logo/logo-light.svg"
              alt="Dan's Portfolio"
              className="blog-nav__logo-img"
            />
          </Link>
        </div>
        <ul className="blog-nav__list">
          <li className="blog-nav__item">
            <Link href="/" className="blog-nav__link">
              Portfolio
            </Link>
          </li>
          <li className="blog-nav__item">
            <Link href="/#projects" className="blog-nav__link">
              Projects
            </Link>
          </li>
          <li className="blog-nav__item">
            <Link href="/#contact" className="blog-nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main className="blog-main">
        <header className="blog-header">
          <h1 className="blog-header__title">{title}</h1>
          <div className="blog-entry-meta">
            <p className="blog-entry-meta__author-name">
              Written by{" "}
              <a
                href={authorLink}
                className="blog-entry-meta__author-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {authorName}
              </a>
            </p>
            <img
              src="/images/blog/author__dan-labrador.jpg"
              alt="Author's profile picture"
              className="blog-entry-meta__profile-image"
            />
            <p className="blog-entry-meta__date">Last Updated: {lastUpdated}</p>
          </div>
          <img
            src={featuredImage}
            alt={featuredImageAlt}
            className="blog-entry-meta__featured-image"
          />
        </header>

        <article className="blog-article">{children}</article>
      </main>

      <footer className="blog-footer">
        <p className="blog-footer__text">
          Made with ❤️ during Uplift Code Camp. Built with Next.js and Tailwind
          CSS, deployed with GitHub Pages. © 2025 Dan Labrador
        </p>
      </footer>
    </div>
  );
}
