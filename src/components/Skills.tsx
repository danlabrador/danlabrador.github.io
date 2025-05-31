export default function Skills() {
  return (
    <section className="flex flex-col mt-32 lg:mt-16 scroll-mt-24" id="skills">
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Technical Skills
      </h2>

      <ul className="flex flex-col gap-2 relative list-none ml-0">
        {/* Languages & Data Modelling */}
        <li className="cursor-default flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6">
          <div className="w-10">
            <img
              className="grayscale brightness-150 saturate-75 transition-all duration-200 hover:grayscale-0 hover:brightness-100 hover:saturate-100"
              src="/images/index/skills-stack-dark.png"
              alt="data analytics icon"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300">
              Languages &amp; Data Modelling
            </h3>
            <p className="text-slate-400 text-sm leading-6">
              Daily driver in{" "}
              <span className="text-slate-100 font-semibold">Python</span>{" "}
              (pandas) and{" "}
              <span className="text-slate-100 font-semibold">SQL</span>
              &nbsp;(BigQuery Standard CTEs); comfortable with{" "}
              <span className="text-slate-100 font-semibold">
                JavaScript &amp; TypeScript
              </span>{" "}
              for front-end tweaks and Google App Script automation. Build
              end-to-end ELT pipelines and test-driven data models that convert
              raw logs into trusted metrics.
            </p>
          </div>
        </li>

        {/* Data Platforms & BI */}
        <li className="cursor-default flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6">
          <div className="w-10">
            <img
              className="grayscale brightness-150 saturate-75 transition-all duration-200 hover:grayscale-0 hover:brightness-100 hover:saturate-100"
              src="/images/index/skills-test-dark.png"
              alt="report automation icon"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300">
              Data Platforms &amp; BI
            </h3>
            <p className="text-slate-400 text-sm leading-6">
              Hands-on with{" "}
              <span className="text-slate-100 font-semibold">BigQuery</span>,{" "}
              <span className="text-slate-100 font-semibold">Fivetran</span>,{" "}
              <span className="text-slate-100 font-semibold">Zapier</span>,{" "}
              <span className="text-slate-100 font-semibold">Airtable</span>,{" "}
              <span className="text-slate-100 font-semibold">
                Render&nbsp;Cron
              </span>{" "}
              and <span className="text-slate-100 font-semibold">Airflow</span>{" "}
              for orchestration. Visualise KPIs in{" "}
              <span className="text-slate-100 font-semibold">
                Looker Studio
              </span>
              ; integrate{" "}
              <span className="text-slate-100 font-semibold">HubSpot</span>{" "}
              datasets for full-funnel analytics.
            </p>
          </div>
        </li>

        {/* Cloud & DevOps */}
        <li className="cursor-default flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6">
          <div className="w-10">
            <img
              className="grayscale brightness-150 saturate-75 transition-all duration-200 hover:grayscale-0 hover:brightness-100 hover:saturate-100"
              src="/images/index/skills-structures-dark.png"
              alt="cloud & DevOps icon"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300">
              Cloud &amp; DevOps
            </h3>
            <p className="text-slate-400 text-sm leading-6">
              Deploy on{" "}
              <span className="text-slate-100 font-semibold">Google Cloud</span>{" "}
              (BigQuery, Cloud Storage, Cloud Run, IAM) and Render. I&apos;m
              also learning how to containerise workloads with{" "}
              <span className="text-slate-100 font-semibold">Docker</span> and
              experiment with{" "}
              <span className="text-slate-100 font-semibold">PySpark</span> for
              distributed processing.
            </p>
          </div>
        </li>

        {/* Collaboration & Version Control */}
        <li className="cursor-default flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6">
          <div className="w-10">
            <img
              className="grayscale brightness-150 saturate-75 transition-all duration-200 hover:grayscale-0 hover:brightness-100 hover:saturate-100"
              src="/images/index/skills-git-dark.png"
              alt="git icon"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300">
              Collaboration &amp; Version Control
            </h3>
            <p className="text-slate-400 text-sm leading-6">
              Git-first workflow using{" "}
              <span className="text-slate-100 font-semibold">Git</span>,{" "}
              <span className="text-slate-100 font-semibold">GitHub</span> and{" "}
              <span className="text-slate-100 font-semibold">GitLab</span>;
              practised in pull-request reviews, agile boards (Jira / Asana) and
              rich documentation in Notion.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
