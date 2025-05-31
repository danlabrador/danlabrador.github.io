export default function Contact() {
  return (
    <section className="flex flex-col mt-32 lg:mt-16 scroll-mt-24" id="contact">
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Contact
      </h2>
      <p className="text-slate-400 text-sm leading-6">
        Feel free to reach out to me on{" "}
        <a
          href="https://linkedin.com/in/danlabrador"
          className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        , send me an email at{" "}
        <a
          href="mailto:dan@danlabrador.com"
          className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
        >
          dan@danlabrador.com
        </a>
        , or{" "}
        <a
          href="https://danlabrador.notion.site/187d8f45073f8015b46ff2d6955bc0e0?pvs=105"
          className="text-slate-100 font-semibold hover:text-accent-orange transition-colors duration-200 no-underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          fill out this form
        </a>
        . I would love to talk about technology, data science, and how we can
        work together.
      </p>
    </section>
  );
}
