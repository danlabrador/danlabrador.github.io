export default function Projects() {
  const projects = [
    {
      title: "API Request Throttlers",
      link: "https://github.com/danlabrador/myamazonguy-api-request-throttlers",
      image: "./src/images/index/projects-api-request-throttlers.jpg",
      description:
        "Dynamic concurrency & rate-limit library; adopted in 30+ SaaS pipelines and handles > 5M requests/month without SLA breaches.",
      tags: ["Python", "Inheritance", "Rate Limits"],
    },
    {
      title: "Finance-Cron Invoice Ninja Pipeline",
      link: "https://github.com/danlabrador/finance-cron-invoice_ninja_pipeline",
      image: "./src/images/index/projects-python-invoice-ninja-pipeline.jpg",
      description:
        "Render job syncing Invoice Ninja billing data to BigQuery nightly, powering profit-margin and cash-flow dashboards and eliminating manual exports.",
      tags: ["Data Pipelines", "Python", "BigQuery", "Render"],
    },
    {
      title: "Asana Data Modeling",
      link: "https://github.com/danlabrador/reports-cron-asana_data_modelling",
      image: "./src/images/index/projects-sql-asana-data-modelling.jpg",
      description:
        "SQL models on a Synchub.io-managed Asana dataset powering sprint burndown & workload dashboards for 80+ stakeholders, cutting status-prep 6h/week.",
      tags: ["Data Pipelines", "Data Modeling", "SQL", "Python", "BigQuery"],
    },
    {
      title: "Credence",
      link: "https://credence-uplift-project.netlify.app/",
      image: "./src/images/index/projects-credence.jpg",
      description:
        "Credence is a full-stack application built for organizations to issue, store, and verify digital certificates. It is a project that I made with a team of 4 developers. I was responsible for the project management, code review and quality assurance.",
      tags: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Material UI",
        "Team Collaboration",
        "Git and GitLab",
      ],
    },
    {
      title: "School of Leaders Portal",
      link: "https://schoolofleaders.netlify.app",
      image: "./src/images/index/projects-lighthouse.jpg",
      description:
        "A front-end project that I made for our local church. It is a Student Information System that allows the church to manage the students' information and grades. This project is still in progress and will be hooked to a backend system.",
      tags: ["React", "shadcn/ui", "Tailwind CSS", "Google Identity API"],
    },
    {
      title: "AuroraBeats Playlist Manager",
      link: "https://danlabrador.com/js-api-app.html",
      image: "./src/images/index/projects-aurorabeats.jpg",
      description:
        "A culmination of a weekend's worth of learning and coding, the AuroraBeats Playlist Manager is my solo project that interfaces with Spotify to manage playlists. It showcases my journey through OAuth, design in Figma, and development with vanilla JavaScript and Tailwind CSS.",
      tags: [
        "OpenAI API",
        "Spotify API",
        "Vanilla JavaScript",
        "Tailwind CSS",
        "OAuth",
      ],
    },
    {
      title: "daniellabrador.com (v1)",
      link: "https://v1.daniellabrador.com",
      image: "./src/images/index/projects-daniellabrador.com-v1.jpg",
      description:
        "This was my first attempt at creating a personal website that was made last 2021.",
      tags: ["HTML", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section className="section section--column" id="projects">
      <h2 className="section__heading">Projects</h2>
      <p className="section__description">
        Most of these projects come from my time in the{" "}
        <a
          className="section__link"
          href="https://www.linkedin.com/in/danlabrador/details/education/1724743039637/single-media-viewer/?profileId=ACoAAC0DxAgBnRc4pjb4QdHAY2dARSJffjWzKW8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uplift Code Camp's Full-Stack Web Development boot camp
        </a>
        . I will have this replaced with more data science projects soon.
      </p>

      <ul className="section__list">
        {projects.map((project, index) => (
          <a
            key={index}
            className="section__item-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="section__item section__item--reverse">
              <div className="section__item-thumbnail-container">
                <img
                  className="section__item-thumbnail"
                  src={project.image}
                  alt={`screenshot of the ${project.title} project`}
                />
              </div>
              <div className="section__item-content">
                <h3 className="section__item-title section__item-title--small">
                  {project.title}
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
                <p className="section__description">{project.description}</p>
                <p className="section__tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="section__tag">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          </a>
        ))}
      </ul>

      <a
        href="https://github.com/danlabrador?tab=repositories"
        className="section__item-more-items-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on GitHub
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
      </a>
    </section>
  );
}
