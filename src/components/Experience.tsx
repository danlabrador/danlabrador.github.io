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
    <section className="section section--column" id="experience">
      <h2 className="section__heading">Experience</h2>
      <ul className="section__list">
        {experiences.map((experience, index) => (
          <a
            key={index}
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="section__item-link"
          >
            <li className="section__item">
              <div className="section__item-date-container">
                <p className="section__item-date">
                  <span className="section__item-date-from">
                    {experience.dateFrom}
                  </span>
                  —
                  <span className="section__item-date-to">
                    {experience.dateTo}
                  </span>
                </p>
              </div>

              <div className="section__item-content">
                <h3 className="section__item-title section__item-title--small">
                  {experience.title}
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
                <ul className="section__list">
                  {experience.accomplishments.map(
                    (accomplishment, accIndex) => (
                      <li key={accIndex} className="section__list-item">
                        <span className="section__link">
                          {accomplishment.category}
                        </span>
                        {" " + accomplishment.description}
                      </li>
                    )
                  )}
                </ul>
                <p className="section__tags">
                  {experience.tags.map((tag, tagIndex) => (
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
        href="https://drive.google.com/file/d/1-AZKlMc06AQ_3Tle9Avlr8UwLQzi5zfs/view"
        className="section__item-more-items-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download resume
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
