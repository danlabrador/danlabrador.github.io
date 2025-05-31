export default function Skills() {
  return (
    <section className="section section--column" id="skills">
      <h2 className="section__heading">Technical Skills</h2>

      <ul className="section__list">
        {/* Languages & Data Modelling */}
        <li className="section__item section__item--cursor-default">
          <div className="section__item-icon-container">
            <img
              className="section__item-icon"
              src="./src/images/index/skills-stack-dark.png"
              alt="data analytics icon"
            />
          </div>
          <div className="section__item-content">
            <h3 className="section__item-title section__item-title--small">
              Languages &amp; Data Modelling
            </h3>
            <p className="section__description">
              Daily driver in <span className="section__link">Python</span>{" "}
              (pandas) and <span className="section__link">SQL</span>
              &nbsp;(BigQuery Standard CTEs); comfortable with{" "}
              <span className="section__link">JavaScript &amp; TypeScript</span>{" "}
              for front-end tweaks and Google App Script automation. Build
              end-to-end ELT pipelines and test-driven data models that convert
              raw logs into trusted metrics.
            </p>
          </div>
        </li>

        {/* Data Platforms & BI */}
        <li className="section__item section__item--cursor-default">
          <div className="section__item-icon-container">
            <img
              className="section__item-icon"
              src="./src/images/index/skills-test-dark.png"
              alt="report automation icon"
            />
          </div>
          <div className="section__item-content">
            <h3 className="section__item-title section__item-title--small">
              Data Platforms &amp; BI
            </h3>
            <p className="section__description">
              Hands-on with <span className="section__link">BigQuery</span>,{" "}
              <span className="section__link">Fivetran</span>,{" "}
              <span className="section__link">Zapier</span>,{" "}
              <span className="section__link">Airtable</span>,{" "}
              <span className="section__link">Render&nbsp;Cron</span> and{" "}
              <span className="section__link">Airflow</span> for orchestration.
              Visualise KPIs in{" "}
              <span className="section__link">Looker Studio</span>; integrate{" "}
              <span className="section__link">HubSpot</span> datasets for
              full-funnel analytics.
            </p>
          </div>
        </li>

        {/* Cloud & DevOps */}
        <li className="section__item section__item--cursor-default">
          <div className="section__item-icon-container">
            <img
              className="section__item-icon"
              src="./src/images/index/skills-structures-dark.png"
              alt="cloud & DevOps icon"
            />
          </div>
          <div className="section__item-content">
            <h3 className="section__item-title section__item-title--small">
              Cloud &amp; DevOps
            </h3>
            <p className="section__description">
              Deploy on <span className="section__link">Google Cloud</span>{" "}
              (BigQuery, Cloud Storage, Cloud Run, IAM) and Render. I'm also
              learning how to containerise workloads with{" "}
              <span className="section__link">Docker</span> and experiment with{" "}
              <span className="section__link">PySpark</span> for distributed
              processing.
            </p>
          </div>
        </li>

        {/* Collaboration & Version Control */}
        <li className="section__item section__item--cursor-default">
          <div className="section__item-icon-container">
            <img
              className="section__item-icon"
              src="./src/images/index/skills-git-dark.png"
              alt="git icon"
            />
          </div>
          <div className="section__item-content">
            <h3 className="section__item-title section__item-title--small">
              Collaboration &amp; Version Control
            </h3>
            <p className="section__description">
              Git-first workflow using{" "}
              <span className="section__link">Git</span>,{" "}
              <span className="section__link">GitHub</span> and{" "}
              <span className="section__link">GitLab</span>; practised in
              pull-request reviews, agile boards (Jira / Asana) and rich
              documentation in Notion.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
