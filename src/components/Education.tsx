export default function Education() {
  const educationItems = [
    {
      title:
        "MicroMasters in Statistics & Data Science ∙ Massachusetts Institute of Technology",
      link: "https://micromasters.mit.edu/ds/",
      dateFrom: "May 2025",
      dateTo: "Sep 2026",
      description:
        "This graduate-level program prepared by MIT provides an in-depth knowledge of data science and time series analysis and teaches how to conduct rigorous analysis that inform decision-making processes and contribute to evidence-based practices across industries.",
    },
    {
      title: "BSc (Honours) Computer Science ∙ University of London",
      link: "https://www.london.ac.uk/study/courses/undergraduate/bsc-computer-science",
      dateFrom: "Oct 2024",
      dateTo: "Aug 2027",
      description:
        "This undergraduate program prepared by the faculty of Goldsmiths, University of London teaches the fundamentals of computer science and helps master in-demand programming, mathematical and computing skills through project-based modules.",
    },
    {
      title: "Full-Stack Web Development ∙ Uplift Code Camp",
      link: "https://www.linkedin.com/in/danlabrador/details/education/1724743039637/single-media-viewer/?profileId=ACoAAC0DxAgBnRc4pjb4QdHAY2dARSJffjWzKW8",
      dateFrom: "Jan",
      dateTo: "Jun 2024",
      description:
        "Completed an intensive full-stack web development bootcamp, mastering both frontend and backend technologies. Built and deployed full-stack applications using MongoDB, Express.js, React.js, and Node.js (MERN stack), while gaining expertise in RESTful APIs and database management.",
      details: [
        {
          category: "Scalable Software Design:",
          description:
            "Applied Object-Oriented Programming (OOP) and Model-View-Controller (MVC) design patterns to create maintainable and modular applications.",
        },
        {
          category: "Data Engineering Foundations:",
          description:
            "Developed a strong understanding of data structuring and querying in MongoDB, which translates well to relational databases like SQL and BigQuery.",
        },
        {
          category: "Backend API Development:",
          description:
            "Designed and implemented secure, high-performance APIs using Node.js and Express.js, emphasizing scalability and data integrity.",
        },
      ],
      tags: [
        "Object-Oriented Programming",
        "Modern-View-Controller (MVC)",
        "Data Structures",
        "NoSQL",
        "Back-End Web Development",
      ],
    },
  ];

  return (
    <section className="section section--column" id="education">
      <h2 className="section__heading">Education</h2>
      <ul className="section__list">
        {educationItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="section__item-link"
          >
            <li className="section__item">
              <div className="section__item-date-container">
                <p className="section__item-date">
                  <span className="section__item-date-from">
                    {item.dateFrom}
                  </span>
                  —<br />
                  <span className="section__item-date-to">{item.dateTo}</span>
                </p>
              </div>
              <div className="section__item-content">
                <h3 className="section__item-title section__item-title--small">
                  {item.title}
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
                <p className="section__description">{item.description}</p>
                {item.details && (
                  <>
                    <br />
                    <ul className="section__list">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="section__list-item">
                          <strong>{detail.category}</strong>
                          {" " + detail.description}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {item.tags && (
                  <p className="section__tags">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="section__tag">
                        {tag}
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}
