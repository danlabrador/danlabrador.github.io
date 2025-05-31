export default function Contact() {
  return (
    <section className="section section--column" id="contact">
      <h2 className="section__heading">Contact</h2>
      <p className="section__description">
        Feel free to reach out to me on{" "}
        <a
          href="https://linkedin.com/in/danlabrador"
          className="section__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        , send me an email at{" "}
        <a href="mailto:dan@danlabrador.com" className="section__link">
          dan@danlabrador.com
        </a>
        , or{" "}
        <a
          href="https://danlabrador.notion.site/187d8f45073f8015b46ff2d6955bc0e0?pvs=105"
          className="section__link"
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
