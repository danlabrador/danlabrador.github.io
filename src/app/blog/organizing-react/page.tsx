import BlogLayout from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dan Labrador | What I Learned After Deleting Tons of React Files",
  description:
    "Dan shares his experience in organizing his React app after doing multiple experiments while in the Uplift Code Camp classes.",
  keywords: [
    "React",
    "development",
    "workspace",
    "organization",
    "beginners",
    "guide",
  ],
};

export default function OrganizingReactPage() {
  return (
    <BlogLayout
      title="What I Learned After Deleting Tons of React Files"
      lastUpdated="May 12, 2024"
      featuredImage="/src/images/blog/react-rock.png"
      featuredImageAlt="Image of the react logo over a rock"
    >
      <p className="blog-article__intro">
        Greetings, React enthusiasts! In Uplift Code Camp, we were introduced to
        the world of React. Writing my first react project was an absolute
        chaos. I had files scattered everywhere, and my codebase was a mess. It
        took me a few tries until I find something that works for me.
        <br />
        <br />
        Today, I'm thrilled to share insights into how I revolutionized my React
        development workflow with a meticulously structured project layout and
        some clever tricks. Let's dive right in!
      </p>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          Designing Your React Realm
        </h2>
        <p className="blog-article__paragraph">
          Here's a peek at how I've structured my <code>src</code> directory:
        </p>
        <pre className="blog-article__code-block">
          <code>{`src/
    components/    # Reusable UI components
        ui/        # Basic components
    hooks/         # Custom hooks for shared logic
    pages/         # Individual pages grouped by layouts
    services/      # Data management and API interaction
        api/       # API calls and responses
        providers/ # Context providers
        state/     # Global state management
    utils/         # Utility functions and helper modules`}</code>
        </pre>
        <p className="blog-article__paragraph">
          Here are the key takeaways from this structure:
        </p>
        <ul className="blog-article__list">
          <li>
            <strong className="blog-article__paragraph--strong">
              components:
            </strong>{" "}
            This is where the magic happens. All reusable UI components reside
            here, neatly organized into subdirectories. The ui/ folder houses
            generic UI components, while other folders contain domain-specific
            components.
          </li>
          <li>
            <strong className="blog-article__paragraph--strong">hooks:</strong>{" "}
            Custom hooks are the unsung heroes of React development. They live
            here, ready to be reused across your application.
          </li>
          <li>
            <strong className="blog-article__paragraph--strong">pages:</strong>{" "}
            Each page of your application gets its own folder here, making
            navigation a breeze and code separation a cinch.
          </li>
          <li>
            <strong className="blog-article__paragraph--strong">
              services:
            </strong>{" "}
            Managing data and APIs? Look no further than the services/
            directory. From state management to API calls, everything has its
            place.
          </li>
          <li>
            <strong className="blog-article__paragraph--strong">utils:</strong>{" "}
            Need a utility function? You guessed it – the utils/ folder is where
            you'll find all your helper functions and utilities.
          </li>
        </ul>
        <br />
        <br />

        <h3 className="blog-article__subsection-title">
          Leveraging External Libraries
        </h3>
        <p className="blog-article__paragraph">
          When integrating external libraries like shadcn/ui, I prefer
          downloading components directly into the repository. This ensures
          complete control over customization and usage. For example, I utilize
          the command <code>npx shadcn-ui@latest add &lt;component&gt;</code> to
          seamlessly add UI components to my project.
        </p>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          Embracing Coding Consistency with Prettier
        </h2>
        <p className="blog-article__paragraph">
          One tool that's been a game-changer for me is Prettier, configured
          with settings inspired by the AirBnb style guide. This snippet from my{" "}
          <code>.prettierrc</code> file helps maintain consistent code
          formatting, allowing me to focus on writing code without worrying
          about tedious formatting conventions:
        </p>
        <pre className="blog-article__code-block">
          <code>{`{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}`}</code>
        </pre>
      </section>

      <section className="blog-article__section blog-article__section--conclusion">
        <h2 className="blog-article__section-title">
          Conclusion: Your React Toolkit
        </h2>
        <p className="blog-article__paragraph">
          As you embark on your React development journey, remember that
          organization and consistency are your best friends. Experiment with
          different structures and tools, find what works best for you, and
          don't be afraid to think outside the box. With a well-structured
          workspace and a commitment to learning, you'll be well on your way to
          React mastery!
        </p>
        <p className="blog-article__paragraph">Happy coding!</p>
      </section>
    </BlogLayout>
  );
}
