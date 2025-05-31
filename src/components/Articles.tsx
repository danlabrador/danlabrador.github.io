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
    <section className="section section--column" id="articles">
      <h2 className="section__heading">Articles</h2>

      <ul className="section__list">
        {articles.map((article, index) => (
          <Link key={index} href={article.link} className="section__item-link">
            <li className="section__item section__item--reverse">
              <div className="section__item-thumbnail-container">
                <img
                  className="section__item-thumbnail"
                  src={article.image}
                  alt={article.alt}
                />
              </div>
              <div className="section__item-content">
                <h3 className="section__item-title section__item-title--small">
                  {article.title}
                  <svg
                    className="section__link-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      className="section__link-arrow-path"
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </h3>
                <p className="section__description">{article.description}</p>
                <p className="section__tags">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="section__tag">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
}
