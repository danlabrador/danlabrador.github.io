import Link from "next/link";

export default function Articles() {
  const articles = [
    {
      title: "How to Manually Test Low-Code / No-Code Systems",
      link: "/blog/manual-testing",
      image: "/images/blog/manual-testing.jpg",
      alt: "a guy interacting floating objects and a text that writes 'Software Testing'",
      description:
        "In My Amazon Guy, our IT infrastructure is diverse and integrated in nature. They primarily revolves around platforms such as Zapier, HubSpot, Slack, and Asana. I wanna share how our team efficiently navigating the complexities of our QA processes inherent in our systems.",
      tags: ["Manual Testing", "Low-Code", "No-Code"],
    },
    {
      title:
        "Building a Playlist Manager with Vanilla JavaScript & Tailwind CSS",
      link: "/blog/js-api-app",
      image: "/images/blog/js-api-app.jpg",
      alt: "A Developer's Journey Through Code, Design, and OAuth Challenges",
      description:
        "Over one weekend, amidst university and work, I embarked on building a Playlist Manager app with Spotify. Facing the unexpected OAuth challenge without prior instruction, my journey through extensive documentation and design foresight became a testament to self-reliance and the importance of pre-planning.",
      tags: ["Vanilla JavaScript", "Tailwind CSS", "OAuth"],
    },
    {
      title: "What I Learned After Deleting Tons of React Files",
      link: "/blog/organizing-react",
      image: "/images/blog/react-rock.png",
      alt: "Image of the react logo over a rock",
      description:
        "Explore how I streamlined my React development workflow with essential tips for beginners. From organizing folder structures to leveraging external libraries, discover practical strategies to boost productivity and enhance React skills.",
      tags: ["React", "Design Patterns", "Prettier"],
    },
  ];

  return (
    <section
      className="flex flex-col mt-32 lg:mt-16 scroll-mt-24"
      id="articles"
    >
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Articles
      </h2>

      <ul className="flex flex-col gap-2 relative list-none ml-0 hover:[&>*]:opacity-40 hover:[&>*:hover]:opacity-100">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="no-underline transition-opacity duration-300 group"
          >
            <li className="cursor-pointer flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col-reverse sm:gap-4 sm:py-6 hover:before:bg-slate-800/10 before:content-[''] before:absolute before:-left-6 before:-right-6 before:top-0 before:bottom-0 before:rounded before:transition-colors before:duration-300">
              <div className="flex items-center justify-center overflow-hidden relative w-40 h-21 rounded sm:w-full sm:h-32">
                <img
                  className="w-full h-full object-cover"
                  src={article.image}
                  alt={article.alt}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300 group-hover:text-accent-orange flex items-center">
                  {article.title}
                  <svg
                    className="w-4 h-4 ml-1 inline-block shrink-0 transition-transform duration-100 group-hover:-translate-y-1 group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </h3>
                <p className="text-slate-400 text-sm leading-6 mb-4">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent-orange-transparent text-accent-orange text-xs font-medium px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
