export default function Projects() {
  const projects = [
    {
      title: "API Request Throttlers",
      link: "https://github.com/danlabrador/myamazonguy-api-request-throttlers",
      image: "/images/index/projects-api-request-throttlers.jpg",
      description:
        "Dynamic concurrency & rate-limit library; adopted in 30+ SaaS pipelines and handles > 5M requests/month without SLA breaches.",
      tags: ["Python", "Inheritance", "Rate Limits"],
    },
    {
      title: "Finance-Cron Invoice Ninja Pipeline",
      link: "https://github.com/danlabrador/finance-cron-invoice_ninja_pipeline",
      image: "/images/index/projects-python-invoice-ninja-pipeline.jpg",
      description:
        "Render job syncing Invoice Ninja billing data to BigQuery nightly, powering profit-margin and cash-flow dashboards and eliminating manual exports.",
      tags: ["Data Pipelines", "Python", "BigQuery", "Render"],
    },
    {
      title: "Asana Data Modeling",
      link: "https://github.com/danlabrador/reports-cron-asana_data_modelling",
      image: "/images/index/projects-sql-asana-data-modelling.jpg",
      description:
        "SQL models on a Synchub.io-managed Asana dataset powering sprint burndown & workload dashboards for 80+ stakeholders, cutting status-prep 6h/week.",
      tags: ["Data Pipelines", "Data Modeling", "SQL", "Python", "BigQuery"],
    },
    {
      title: "Credence",
      link: "https://credence-uplift-project.netlify.app/",
      image: "/images/index/projects-credence.jpg",
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
      image: "/images/index/projects-lighthouse.jpg",
      description:
        "A front-end project that I made for our local church. It is a Student Information System that allows the church to manage the students' information and grades. This project is still in progress and will be hooked to a backend system.",
      tags: ["React", "shadcn/ui", "Tailwind CSS", "Google Identity API"],
    },
    {
      title: "AuroraBeats Playlist Manager",
      link: "https://danlabrador.com/js-api-app.html",
      image: "/images/index/projects-aurorabeats.jpg",
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
      image: "/images/index/projects-daniellabrador.com-v1.jpg",
      description:
        "This was my first attempt at creating a personal website that was made last 2021.",
      tags: ["HTML", "SCSS", "JavaScript"],
    },
  ];

  return (
    <section
      className="flex flex-col mt-32 lg:mt-16 scroll-mt-24"
      id="projects"
    >
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Projects
      </h2>
      <p className="text-slate-400 text-sm leading-6 mb-6">
        Most of these projects come from my time in the{" "}
        <a
          className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
          href="https://www.linkedin.com/in/danlabrador/details/education/1724743039637/single-media-viewer/?profileId=ACoAAC0DxAgBnRc4pjb4QdHAY2dARSJffjWzKW8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uplift Code Camp&apos;s Full-Stack Web Development boot camp
        </a>
        . I will have this replaced with more data science projects soon.
      </p>

      <ul className="flex flex-col gap-2 relative list-none ml-0 hover:[&>*]:opacity-40 hover:[&>*:hover]:opacity-100">
        {projects.map((project, index) => (
          <a
            key={index}
            className="no-underline transition-opacity duration-300 group"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="cursor-pointer flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col-reverse sm:gap-4 sm:py-6 hover:before:bg-slate-800/10 before:content-[''] before:absolute before:-left-6 before:-right-6 before:top-0 before:bottom-0 before:rounded before:transition-colors before:duration-300">
              <div className="flex items-center justify-center overflow-hidden relative w-40 h-21 rounded sm:w-full sm:h-32">
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={`screenshot of the ${project.title} project`}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300 group-hover:text-accent-orange flex items-center">
                  {project.title}
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
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
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
          </a>
        ))}
      </ul>

      <a
        href="https://github.com/danlabrador?tab=repositories"
        className="inline-flex items-center mt-8 text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline group"
        target="_blank"
        rel="noopener noreferrer"
      >
        See more on GitHub
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
      </a>
    </section>
  );
}
