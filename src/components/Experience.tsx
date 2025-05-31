export default function Experience() {
  const experiences = [
    {
      title: "Analytics Engineer ∙ My Amazon Guy",
      link: "https://myamazonguy.com",
      dateFrom: "Apr 2024",
      dateTo: "Present",
      accomplishments: [
        {
          category: "Data Pipeline Optimization:",
          description:
            "Extracted 1.2M rows/day from HubSpot, Slack & Asana APIs into BigQuery via Python + Zapier, cutting latency from 24h to 30min and boosting refresh cadence 48×.",
        },
        {
          category: "CRM Development:",
          description:
            "Spearheaded an in-house CRM MVP; designed ERD, provisioned BigQuery schema, built a pure-Python ingest pipeline, and migrated 350k records with zero downtime.",
        },
        {
          category: "Performance Optimization:",
          description:
            "Cut report runtime about 95% (6h → 15–20min) across 10+ pipelines by redesigning SQL models and leveraging BigQuery slots, saving about 20 analyst hours/week.",
        },
        {
          category: "Data Visualization:",
          description:
            "Built Looker Studio dashboards (300GB warehouse, nightly refresh) for churn, burn rate and profit margin, enabling budget pivots two days faster.",
        },
        {
          category: "Finance Integration:",
          description:
            "Integrated Google Sheets & Invoice Ninja data (about 150k rows/night) via serverless Render jobs, saving Finance 10h/week.",
        },
        {
          category: "Security Implementation:",
          description:
            "Implemented row-level security and authorized views across five departments, eliminating unauthorized access and achieving GDPR readiness.",
        },
        {
          category: "Data Pipeline Management:",
          description:
            "Oversaw HubSpot → BigQuery Fivetran connector; monitored sync health, liaised with Fivetran engineers, and kept error rate < 0.5%.",
        },
      ],
      tags: [
        "Python",
        "BigQuery",
        "SQL",
        "Zapier",
        "Looker Studio",
        "Data Engineering",
        "ETL",
      ],
    },
    {
      title: "QA & Data Reliability Specialist ∙ My Amazon Guy",
      link: "https://myamazonguy.com",
      dateFrom: "Jun 2023",
      dateTo: "Apr 2024",
      accomplishments: [
        {
          category: "Automation Reliability:",
          description:
            "Reduced major automation outages 94% (every 3.5 days → 68 days) by designing and executing manual test suites for 25+ Python & Zapier pipelines and instituting BigQuery job-health monitoring.",
        },
        {
          category: "Test Documentation:",
          description:
            "Documented 600+ Gherkin-style test cases covering API integrations, ETL edge cases and rate-limit logic, raising defect-detection rate to 98%.",
        },
        {
          category: "Incident Management:",
          description:
            "Led post-mortems and root-cause analyses, cutting mean time-to-recovery from 4h to 40min.",
        },
      ],
      tags: [
        "Manual Testing",
        "Python",
        "Zapier",
        "BigQuery",
        "Quality Assurance",
        "Data Reliability",
      ],
    },
  ];

  return (
    <section
      className="flex flex-col mt-32 lg:mt-16 scroll-mt-24"
      id="experience"
    >
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Experience
      </h2>
      <ul className="flex flex-col gap-2 relative list-none ml-0 hover:[&>*]:opacity-40 hover:[&>*:hover]:opacity-100">
        {experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-opacity duration-300 group"
          >
            <li className="cursor-pointer flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6 hover:before:bg-slate-800/10 before:content-[''] before:absolute before:-left-6 before:-right-6 before:top-0 before:bottom-0 before:rounded before:transition-colors before:duration-300">
              <div className="w-32 sm:w-full">
                <p className="text-slate-500 text-xs leading-6">
                  <span className="text-slate-500">{experience.dateFrom}</span>
                  <br className="sm:hidden" />
                  <span className="sm:hidden"> — </span>
                  <span className="text-slate-500">{experience.dateTo}</span>
                </p>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300 group-hover:text-accent-orange flex items-center">
                  {experience.title}
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
                <ul className="flex flex-col gap-2 relative list-none ml-0 mb-4">
                  {experience.accomplishments.map(
                    (accomplishment, accIndex) => (
                      <li
                        key={accIndex}
                        className="text-slate-400 text-sm leading-6"
                      >
                        <span className="text-slate-100 font-semibold">
                          {accomplishment.category}
                        </span>
                        {" " + accomplishment.description}
                      </li>
                    )
                  )}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.tags.map((tag, tagIndex) => (
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
        href="https://drive.google.com/file/d/1-AZKlMc06AQ_3Tle9Avlr8UwLQzi5zfs/view"
        className="inline-flex items-center mt-8 text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline group"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download resume
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
