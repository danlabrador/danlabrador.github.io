import BlogLayout from "@/components/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dan Labrador | How to Manually Test Low-Code / No-Code Systems",
  description:
    "Explore the comprehensive guide to manual testing at My Amazon Guy. Ideal for QA specialists and IT professionals, it highlights best practices, strategies, and tips for effective manual testing in a structured, step-by-step approach.",
  keywords: [
    "manual testing",
    "low-code",
    "no-code",
    "automations",
    "qa",
    "quality assurance",
    "testing",
    "software testing",
  ],
};

export default function ManualTestingPage() {
  return (
    <BlogLayout
      title="How to Manually Test Low-Code / No-Code Systems"
      lastUpdated="February 23, 2024"
      featuredImage="/src/images/blog/manual-testing.jpg"
      featuredImageAlt="two software engineers concentrating on a problem"
    >
      <p className="blog-article__intro">
        Despite resorting to low-code/no-code automations, our IT infrastructure
        in My Amazon Guy is diverse and integrated, revolving around platforms
        such as Zapier, HubSpot, Slack, and Asana. This complexity necessitates
        a well-defined process to navigate our Quality Assurance (QA) tasks
        efficiently. So, our team developed system testing procedure that is
        specifically tailored for thorough testing of integrations and
        automations in our low-code/no-code environments. Here are some key
        insights and tips from our process that can be beneficial for anyone
        looking to conduct manual testing.
      </p>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          Phase 1: Business Requirement Analysis
        </h2>
        <p className="blog-article__paragraph">
          The initial phase in My Amazon Guy's manual testing strategy involves
          a detailed Business Requirement Analysis. This phase is crucial for
          understanding the needs and expectations of the project, laying a
          foundation for all subsequent testing activities.
        </p>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Understanding Requirements
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Gather Comprehensive Information:
              </strong>{" "}
              Collect data, documents, and inputs from various stakeholders,
              focusing on functional requirements, business logic, user
              interactions, and integration points.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Clarify Ambiguities:
              </strong>{" "}
              Engage actively with stakeholders to resolve uncertainties.
              Utilize platforms like Asana or Slack for effective communication.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Assess Feasibility and Scope:
              </strong>{" "}
              Evaluate the practicality of the requirements within the
              constraints of our IT systems, particularly considering
              low-code/no-code platform limitations.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Setting Expectations:
              </strong>{" "}
              Align understanding among IT and QA specialists, team leads, and
              end-users about the system's objectives.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Documentation and Communication
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Documenting Requirements:
              </strong>{" "}
              Maintain a comprehensive record of all requirements and
              discussions for reference during testing.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Effective Team Communication:
              </strong>{" "}
              Ensure that all members of the testing team have a consistent
              understanding of the documented requirements.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Bridging to Test Planning
          </h3>
          <p className="blog-article__paragraph">
            Utilize the insights gained from requirement analysis to formulate
            an effective test plan, smoothly transitioning to the Test Planning
            and Case Development phase.
          </p>
        </article>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          Phase 2: Developing a Test Plan and Test Cases
        </h2>
        <p className="blog-article__paragraph">
          After a thorough business requirement analysis, the next critical
          phase in My Amazon Guy's manual testing approach is the development of
          a test plan and test cases. This phase is essential for organizing the
          testing process and ensuring that all aspects of the system are
          adequately tested.
        </p>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Developing a Test Plan
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Identify Test Objectives:
              </strong>{" "}
              Clearly define what you want to achieve with the testing. This
              should align with the business requirements analyzed in the
              previous phase.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Determine Test Scope:
              </strong>{" "}
              Specify the boundaries of testing – which features of the system
              will be tested and which will not.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Resource Planning:
              </strong>{" "}
              Allocate the necessary resources, including personnel, tools, and
              time, for the testing process.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Define Test Environment:
              </strong>{" "}
              Establish the environment in which the testing will take place,
              ensuring it replicates the production environment as closely as
              possible.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Risk Assessment:
              </strong>{" "}
              Identify any potential risks or challenges that may arise during
              testing and plan for mitigation strategies.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Schedule and Milestones:
              </strong>{" "}
              Develop a timeline for the testing activities, outlining key
              milestones and deadlines.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Creating Test Cases
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Utilize Gherkin Syntax:
              </strong>{" "}
              At My Amazon Guy, we use Gherkin syntax for developing test cases.
              This language is structured yet readable, consisting of Given,
              When, Then statements.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Detailing Test Steps:
              </strong>{" "}
              Each test case should clearly state the steps to be performed,
              expected results, and test data to be used.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Prioritizing Test Cases:
              </strong>{" "}
              Rank the test cases based on factors like business impact,
              criticality, and likelihood of failure.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Peer Review:
              </strong>{" "}
              Have test cases reviewed by peers to ensure thoroughness and
              accuracy.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">Documentation</h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Maintain Clear Documentation:
              </strong>{" "}
              Keep a detailed record of all test plans and test cases for future
              reference and for use by other team members.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Version Control:
              </strong>{" "}
              Use version control systems to manage changes and revisions to
              test documents.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Tips for Effective Test Case Development
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Be Specific:
              </strong>{" "}
              Each test case should be clear and concise, leaving no room for
              ambiguity.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Focus on User Experience:
              </strong>{" "}
              Include test cases that cover user interaction and usability
              aspects of the system.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Incorporate Different Scenarios:
              </strong>{" "}
              Consider various user behaviors and scenarios, including edge
              cases.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Continual Update:
              </strong>{" "}
              Regularly revise and update test cases to reflect changes in the
              system or business requirements.
            </li>
          </ul>
        </article>
      </section>

      <section className="blog-article__section">
        <h2 className="blog-article__section-title">
          Phase 3: Setting Up the Test Environment
        </h2>
        <p className="blog-article__paragraph">
          The third phase in My Amazon Guy's manual testing methodology involves
          setting up an appropriate test environment. This phase is crucial as
          it ensures that the tests are conducted under conditions that closely
          mimic the actual operational environment.
        </p>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Establishing the Test Environment
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Replicating the Production Environment:
              </strong>{" "}
              Aim to create a test environment that closely resembles the live
              production environment to ensure realistic testing conditions.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Utilizing Tools and Platforms:
              </strong>{" "}
              Leverage the capabilities of platforms such as Zapier, HubSpot,
              Slack, and Asana to set up and manage the test environment.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Data Preparation:
              </strong>{" "}
              Ensure that test data is prepared and loaded into the system. This
              data should be representative of actual operational data while
              maintaining confidentiality and security.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Strategies for Test Environment Setup
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Duplication of Components:
              </strong>{" "}
              Where possible, duplicate existing components to create an
              isolated testing environment. This includes replicating settings,
              workflows, and data.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Live Environment Testing:
              </strong>{" "}
              In cases where duplication is not feasible, establish protocols
              for testing within the live environment to prevent interference
              with ongoing operations.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Addressing Limitations:
              </strong>{" "}
              Recognize and document any limitations of the test environment,
              especially concerning low-code/no-code platforms.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Handling Data in Live Tests
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Implement Procedures:
              </strong>{" "}
              Establish strict procedures for handling data during live testing
              to prevent impact on actual operations.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Test Data Usage:
              </strong>{" "}
              Wherever possible, use test data instead of actual operational
              data.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Post-Test Cleanup:
              </strong>{" "}
              After testing, ensure that test data and changes made to the live
              environment are cleaned up and reverted.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">
            Special Protocols for Sensitive Environments
          </h3>
          <ul className="blog-article__list">
            <li>
              <strong className="blog-article__paragraph--strong">
                Pre-Test Communication:
              </strong>{" "}
              Announce planned tests in relevant channels to inform all
              stakeholders.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Collaboration:
              </strong>{" "}
              Work with oversight personnel to supervise test execution in
              sensitive environments.
            </li>
            <li>
              <strong className="blog-article__paragraph--strong">
                Documentation:
              </strong>{" "}
              Document all steps taken during live tests, including screenshots
              and confirmations of test success.
            </li>
          </ul>
        </article>

        <article className="blog-article__subsection">
          <h3 className="blog-article__subsection-title">Final Verification</h3>
          <p className="blog-article__paragraph">
            Junior Staff and Interns: Require a formal sign-off from senior IT
            QA specialists or responsible personnel to confirm that the test
            environment is set up correctly and ready for testing.
          </p>
        </article>
      </section>
    </BlogLayout>
  );
}
