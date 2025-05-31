import BlogLayout from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Dan Labrador | Building a Playlist Manager with Vanilla JavaScript & Tailwind CSS",
  description:
    "Dan Labrador explains his approach to building a Playlist Manager application using vanilla JavaScript, HTML, CSS, and Tailwind CSS.",
  keywords: [
    "vanilla JavaScript",
    "Tailwind CSS",
    "Spotify API",
    "OAuth",
    "playlist manager",
    "web development",
  ],
};

export default function JSAPIAppPage() {
  return (
    <BlogLayout
      title="Building a Playlist Manager with Vanilla JavaScript & Tailwind CSS"
      lastUpdated="April 7, 2024"
      featuredImage="/src/images/blog/js-api-app.jpg"
      featuredImageAlt="Playlist Manager Interface"
    >
      <p className="blog-article__intro">
        I recently developed a Playlist Manager application that integrates with
        Spotify using vanilla JavaScript, HTML, CSS, and Tailwind CSS. This
        project, completed as part of my Full Stack Web Development course at
        Uplift Code Camp, focuses on streamlining the process of discovering
        tracks, previewing audio, and managing playlists.
      </p>

      {/* Prominent Project Link */}
      <div
        className="project-link"
        style={{ textAlign: "center", margin: "1rem 0", fontSize: "1.25rem" }}
      >
        <a
          href="https://aurorabeats.netlify.app"
          target="_blank"
          style={{ fontWeight: "bold" }}
          rel="noopener noreferrer"
        >
          View the Project: Aurora Beats
        </a>
      </div>

      {/* Demo Credentials */}
      <div
        className="demo-credentials"
        style={{
          background: "#f9f9f9",
          padding: "1rem",
          borderRadius: "4px",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#333",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold" }}>
          Demo Credentials for Immediate Access:
        </p>
        <p style={{ margin: "0.5rem 0 0" }}>
          <strong>Email:</strong> <code>aurorabeats@danlabrador.com</code>
          <br />
          <strong>Password:</strong> <code>@aurora borealis</code>
        </p>
      </div>

      {/* Video Embed */}
      <div
        style={{
          marginTop: "3rem",
          position: "relative",
          paddingBottom: "56.19146722164412%",
          height: 0,
        }}
      >
        <iframe
          src="https://www.loom.com/embed/88a4088209234d159980c162f879af8f?sid=ed3c324f-8dfb-449e-8eb7-a61836aefaf8"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allowFullScreen
        ></iframe>
      </div>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Using the Application</h2>
        <p className="blog-article__paragraph">
          When you first access the app, you'll be prompted to log in with your
          Spotify account. The application is deployed via Netlify and operates
          on approved redirect URIs as specified in the Spotify Developer
          platform.
        </p>
        <p className="blog-article__paragraph">
          The interface is optimized for vertical layouts to ensure that all
          functionalities remain accessible. You can search for tracks, preview
          available audio snippets (limited to 30 seconds), and manage your
          playlists seamlessly. Tracks lacking preview audio won't display a
          play button.
        </p>
        <p className="blog-article__paragraph">
          In addition, the app features track recommendations powered by both
          Spotify's recommendation engine and an AI-based approach for
          personalized suggestions.
        </p>
        <p
          className="blog-article__paragraph"
          style={{ fontStyle: "italic", color: "#555" }}
        >
          Update: Depending on when you access this project, some features may
          break if Spotify changes their API.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Project Goals</h2>
        <ul className="blog-article__list">
          <li>Develop a functional web app for managing Spotify playlists.</li>
          <li>
            Utilize vanilla JavaScript, HTML, and CSS for core functionality.
          </li>
          <li>
            Incorporate Tailwind CSS to streamline design and responsiveness.
          </li>
        </ul>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Planning and Design</h2>
        <p className="blog-article__paragraph">
          Before diving into code, I mapped out the design in Figma. This
          initial planning phase provided a clear blueprint and facilitated
          asset preparation, ultimately accelerating the development process.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Development Process</h2>
        <p className="blog-article__paragraph">
          I started by creating the <code>SpotifyAPI</code> class to manage all
          interactions with Spotify. Next, the <code>PlaylistManager</code>{" "}
          class was developed to handle track recommendations and playlist
          operations. The user interface was built using standard HTML enhanced
          with Tailwind CSS.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Technical Challenges</h2>
        <ul className="blog-article__list">
          <li>
            Managing application state and dynamic UI updates with vanilla
            JavaScript.
          </li>
          <li>
            Handling API rate limits and errors to maintain a smooth user
            experience.
          </li>
          <li>
            Leveraging Tailwind CSS to rapidly implement responsive design
            elements.
          </li>
        </ul>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Handling Authentication</h2>
        <p className="blog-article__paragraph">
          Implementing OAuth was essential for securely accessing Spotify's API.
          I followed Spotify's documentation closely to manage token
          acquisition, refresh cycles, and user session security.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Future Enhancements</h2>
        <ul className="blog-article__list">
          <li>Refactor code for improved readability and maintainability.</li>
          <li>Enhance state management for smoother user interactions.</li>
          <li>
            Add additional interactive elements to further improve the user
            experience.
          </li>
          <li>
            Optimize performance to ensure consistent functionality across
            devices.
          </li>
        </ul>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          The Advantage of Tailwind CSS
        </h2>
        <p className="blog-article__paragraph">
          Tailwind CSS enabled rapid styling and responsive design adjustments,
          significantly accelerating the overall development process.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">Final Thoughts</h2>
        <p className="blog-article__paragraph">
          This project underscores the importance of careful planning and clear
          design in achieving development efficiency. By combining vanilla
          JavaScript with Tailwind CSS and integrating robust APIs for both
          Spotify and AI-driven recommendations, I was able to create a
          practical and user-friendly Playlist Manager.
        </p>
        <p className="blog-article__paragraph">
          For a hands-on experience, visit the project here:{" "}
          <a
            href="https://aurorabeats.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aurora Beats
          </a>
          .
        </p>
        <p
          className="blog-article__paragraph"
          style={{ fontStyle: "italic", color: "#555" }}
        >
          Note: As Spotify updates its API over time, some features of this
          project may no longer function as expected.
        </p>
      </section>
    </BlogLayout>
  );
}
