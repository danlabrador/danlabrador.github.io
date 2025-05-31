import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        {/* About */}
        <section className="section" id="about">
          <h2 className="section__heading">Hey friends —</h2>

          <p className="section__description">
            I'm a <strong>Analytics Engineer</strong> who turns messy tables
            into decision-ready dashboards. During the last two years at{" "}
            <a
              href="https://myamazonguy.com"
              className="section__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Amazon Guy
            </a>
            , I built Python / SQL pipelines that cut report latency from 6
            hours to <strong>15 minutes</strong> and trimmed labour-cost burn
            rate by <strong>3%</strong>. My remit spans analytics, data
            engineering and a dash of data science—all in service of clear,
            actionable insight for leadership.
          </p>

          <p className="section__description">
            To level-up further I'm pursuing the{" "}
            <a
              href="https://micromasters.mit.edu/ds/"
              className="section__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              MITx MicroMasters<sup>®</sup> in Statistics & Data Science
            </a>
            , sharpening my toolkit for predictive modelling and optimisation.
          </p>

          <p className="section__description">
            Fun fact: I kicked off my tech journey co-running the Discord
            infrastructure for{" "}
            <a
              href="https://vatic.gg"
              className="section__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vatic
            </a>
            , a Clash of Clans community formerly known as Vista Ridge.
          </p>

          <p className="section__description">
            Reach me at{" "}
            <a href="mailto:dan@danlabrador.com" className="section__link">
              dan@danlabrador.com
            </a>{" "}
            or simply{" "}
            <a
              href="https://danlabrador.notion.site/187d8f45073f8015b46ff2d6955bc0e0?pvs=105"
              className="section__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              drop a note here
            </a>
            .
          </p>
        </section>

        {/* Footer */}
        <footer className="footer footer--extra-mt">
          <p className="footer__text">
            Made with ❤️ during Uplift Code Camp. Built with Next.js and
            Tailwind CSS, deployed with GitHub Pages. © 2025 Dan Labrador
          </p>
        </footer>
      </main>
    </div>
  );
}
