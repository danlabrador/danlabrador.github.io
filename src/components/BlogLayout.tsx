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
    <div className="flex flex-col relative w-full bg-white min-h-screen">
      <nav className="flex items-center justify-start p-4 px-8 fixed top-0 w-full z-50 bg-background-right shadow-lg sm:justify-center">
        <div className="w-20">
          <Link href="/">
            <img
              src="/images/logo/logo-light.svg"
              alt="Dan's Portfolio"
              className="w-full h-auto"
            />
          </Link>
        </div>
        <ul className="flex items-center ml-8 list-none sm:hidden">
          <li className="mx-4">
            <Link
              href="/"
              className="text-slate-100 text-sm font-medium no-underline uppercase transition-colors duration-200 hover:text-accent-orange"
            >
              Portfolio
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="/#projects"
              className="text-slate-100 text-sm font-medium no-underline uppercase transition-colors duration-200 hover:text-accent-orange"
            >
              Projects
            </Link>
          </li>
          <li className="mx-4">
            <Link
              href="/#contact"
              className="text-slate-100 text-sm font-medium no-underline uppercase transition-colors duration-200 hover:text-accent-orange"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main className="my-16 mx-auto mt-20 max-w-3xl px-8 bg-white">
        <header className="flex flex-col items-center gap-6 justify-center py-8 text-center">
          <h1 className="text-gray-800 font-figtree text-5xl font-bold px-12 max-w-3xl block sm:text-3xl sm:px-4">
            {title}
          </h1>
          <div className="grid grid-cols-3 items-center gap-4 justify-center max-w-3xl px-2 sm:grid-cols-2 sm:grid-rows-2 sm:gap-1">
            <p className="text-gray-800 text-xs text-right ml-2 sm:row-span-1 sm:col-span-1 sm:text-left sm:self-end">
              Written by{" "}
              <a
                href={authorLink}
                className="text-accent-orange text-xs no-underline hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                {authorName}
              </a>
            </p>
            <img
              src="/images/blog/author__dan-labrador.jpg"
              alt="Author's profile picture"
              className="rounded-full h-12 w-12 object-cover sm:row-span-2 sm:col-span-1"
            />
            <p className="text-gray-800 text-xs text-left mr-2 sm:row-span-1 sm:col-span-1 sm:text-left sm:self-start">
              Last Updated: {lastUpdated}
            </p>
          </div>
          <img
            src={featuredImage}
            alt={featuredImageAlt}
            className="rounded-lg max-w-full w-full h-auto sm:w-full"
          />
        </header>

        <article className="text-gray-600 leading-6 mx-auto max-w-3xl py-8 pb-24 bg-white">
          {children}
        </article>
      </main>

      <footer className="flex items-center justify-center gap-6 py-12 px-8 pt-16 text-center w-full bg-gray-50">
        <p className="text-gray-600 text-xs leading-6 max-w-3xl lg:text-center lg:w-full">
          Made with ❤️ using Claude 4 Sonnet. Built with Next.js and Tailwind
          CSS, deployed with GitHub Pages. © 2025 Dan Labrador
        </p>
      </footer>
    </div>
  );
}
