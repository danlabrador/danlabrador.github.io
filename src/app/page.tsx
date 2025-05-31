import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex justify-center gap-12 mx-auto max-w-screen-2xl min-h-screen px-12 lg:flex-col lg:px-12 lg:py-20 lg:mx-0 md:px-6 md:py-12">
      <Header />
      <main className="max-w-2xl pb-24 lg:max-w-full lg:pb-16 sm:pb-4">
        {/* About */}
        <section className="scroll-mt-24" id="about">
          <h2 className="font-figtree text-2xl font-bold mb-4 lg:pt-16 lg:mb-4 sm:pt-12">
            Hey friends —
          </h2>

          <p className="text-slate-400 text-sm leading-6 mb-6">
            I&apos;m a{" "}
            <strong className="text-slate-100">Analytics Engineer</strong> who
            turns messy tables into decision-ready dashboards. During the last
            two years at{" "}
            <a
              href="https://myamazonguy.com"
              className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Amazon Guy
            </a>
            , I built Python / SQL pipelines that cut report latency from 6
            hours to <strong className="text-slate-100">15 minutes</strong> and
            trimmed labour-cost burn rate by{" "}
            <strong className="text-slate-100">3%</strong>. My remit spans
            analytics, data engineering and a dash of data science—all in
            service of clear, actionable insight for leadership.
          </p>

          <p className="text-slate-400 text-sm leading-6 mb-6">
            To level-up further I&apos;m pursuing the{" "}
            <a
              href="https://micromasters.mit.edu/ds/"
              className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MITx MicroMasters<sup>®</sup> in Statistics &amp; Data Science
            </a>
            , sharpening my toolkit for predictive modelling and optimisation.
          </p>

          <p className="text-slate-400 text-sm leading-6 mb-6">
            Fun fact: I kicked off my tech journey co-running the Discord
            infrastructure for{" "}
            <a
              href="https://vatic.gg"
              className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vatic
            </a>
            , a Clash of Clans community formerly known as Vista Ridge.
          </p>

          <p className="text-slate-400 text-sm leading-6">
            Reach me at{" "}
            <a
              href="mailto:dan@danlabrador.com"
              className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
            >
              dan@danlabrador.com
            </a>{" "}
            or simply{" "}
            <a
              href="https://danlabrador.notion.site/187d8f45073f8015b46ff2d6955bc0e0?pvs=105"
              className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              drop a note here
            </a>
            .
          </p>
        </section>

        {/* Skills */}
        <Skills />

        {/* Projects */}
        <Projects />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Articles */}
        <Articles />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <footer className="flex items-center justify-end gap-6 py-12 pr-0 pt-20 text-right w-full mt-20 lg:justify-center lg:text-center lg:w-full">
          <p className="text-slate-500 text-xs leading-6 mt-12 w-3/5 lg:text-center lg:w-full">
            Made with ❤️ using Claude 4 Sonnet. Built with Next.js and Tailwind
            CSS, deployed with GitHub Pages. © 2025 Dan Labrador
          </p>
        </footer>
      </main>
    </div>
  );
}
