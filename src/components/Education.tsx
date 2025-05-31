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
    <section
      className="flex flex-col mt-32 lg:mt-16 scroll-mt-24"
      id="education"
    >
      <h2 className="font-figtree text-2xl font-bold pt-24 mb-4 lg:pt-16">
        Education
      </h2>
      <ul className="flex flex-col gap-2 relative list-none ml-0 hover:[&>*]:opacity-40 hover:[&>*:hover]:opacity-100">
        {educationItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-opacity duration-300 group"
          >
            <li className="cursor-pointer flex gap-8 py-6 relative transition-opacity duration-300 sm:flex-col sm:gap-4 sm:py-6 hover:before:bg-slate-800/10 before:content-[''] before:absolute before:-left-6 before:-right-6 before:top-0 before:bottom-0 before:rounded before:transition-colors before:duration-300">
              <div className="w-32 sm:w-full">
                <p className="text-slate-500 text-xs leading-6">
                  <span className="text-slate-500">{item.dateFrom}</span>
                  <br />
                  <span className="sm:hidden"> — </span>
                  <span className="text-slate-500">{item.dateTo}</span>
                </p>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium leading-6 mb-2 transition-colors duration-300 group-hover:text-accent-orange flex items-center">
                  {item.title}
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
                  {item.description}
                </p>
                {item.details && (
                  <ul className="list-disc ml-6 mb-4 block">
                    {item.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="text-slate-400 text-sm leading-6 mb-2"
                      >
                        <strong className="text-slate-100">
                          {detail.category}
                        </strong>
                        {" " + detail.description}
                      </li>
                    ))}
                  </ul>
                )}
                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-accent-orange-transparent text-accent-orange text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          </a>
        ))}
      </ul>
    </section>
  );
}
