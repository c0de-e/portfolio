import TimelineProject from "./TimelineProject";

export default function ProjectTimeline() {
  return (
    <div className="timeline-primary timeline timeline-vertical timeline-snap-icon max-w-full px-2 max-md:timeline-compact">
      <li>
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Quality Control Web App"}
          startOrEnd="timeline-start"
          StartDate={new Date(2023, 7)}
          EndDate={new Date(2024, 6)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Using Next.js and GCP, I developed a Quality Control (QC) Web App
              to automate a manual QC process. The front end features an admin
              dashboard to create webhooks (for automatic QC), test queries
              (including a number of preset queries to test with) and generates
              Google Looker Studio dashboards per project. I used Firebase
              Firestore to store the data, and Firebase Cloud Functions to
              automate data filtering.
            </p>
          }
          Skills={[
            "React",
            "Next.js",
            "Tailwind CSS",
            "Firebase",
            "GCP",
            "Typescript",
            "GraphQL",
            "OpenID",
          ]}
        >
          <div className="prose relative left-0 top-0 mb-5 ml-5 text-left">
            <h1>Projects</h1>
          </div>
        </TimelineProject>
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Google Sheets Finance Automation"}
          ProjectLinkProps={{
            type: "github",
            href: "https://github.com/c0de-e/Finance-Automation",
          }}
          startOrEnd="timeline-end"
          StartDate={new Date(2023, 5)}
          EndDate={new Date(2024, 6)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Developed a tool to extract data from PDF store receipts and
              populate a Google Sheet. The tool features advanced column
              sorting, auto populating purchase dates, and a custom UI to apply
              formulas to multiple ranges. It also features syncing Gmail and
              Google Calendar with automated events dependent on bill due dates,
              preventing missed payments.
            </p>
          }
          Skills={[ "Apps Script", "G-Suite", "Typescript" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Google Sheets Meal Plan Automation"}
          ProjectLinkProps={{
            type: "github",
            href: "https://github.com/c0de-e/Meal-Plan-Automation",
          }}
          startOrEnd="timeline-start"
          StartDate={new Date(2023, 2)}
          EndDate={new Date(2023, 3)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Developed a tool to generate a weekly meal plan using the Google
              Tasks API and Google Sheets. This tool creates a Google Task for
              every meal per day and a subtask for every meal ingredient. These
              features allow users to check off ingredients when shopping in the
              grocery store from the Google Task mobile app.
            </p>
          }
          Skills={[ "Apps Script", "G-Suite", "Typescript" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Unity Digital Twin App"}
          startOrEnd="timeline-end"
          StartDate={new Date(2022, 2)}
          EndDate={new Date(2023, 7)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Using Unity, I developed a game to view 2D Revit data in a 3D
              environment. I utilized{" "}
              <a
                href="https://unity.com/products/unity-reflect-develop"
                target="_blank"
                className="link"
              >
                Unity Reflect
              </a>{" "}
              to import Autodesk Revit Geometry. Following, I created an
              importer/exporter for a user to upload custom data. The game
              featured 3 player controllers to enhance navigation of imported
              models, including mobile, point-to-point, and first-person
              perspectives. I embedded Unity WebGL into a .NET site, securing
              user access with Autodesk&apos;s OAuth 2.0.
            </p>
          }
          Skills={[
            "OAuth",
            "C#",
            ".NET",
            "React",
            "Tailwind CSS",
            "Entity Framework",
            "Unity",
            "Javascript",
            "Tools Programming",
          ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Dashboard - Autodesk Construction Cloud"}
          startOrEnd="timeline-start"
          StartDate={new Date(2020, 0)}
          EndDate={new Date(2022, 2)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Contributed to and maintained an Autodesk Construction Cloud dashboard
              to view account-wide model data at a glance. The dashboard
              features OAuth for permissions, a data text viewer to read data
              from an Autodesk 3D model, Google Charts to visualize user and
              project data, and an admin dashboard to manage 1000+ users.
            </p>
          }
          Skills={[ ".NET", "jQuery", "MVC", "OAuth", "HTML", "CSS", "Javascript" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Project Kronos"}
          startOrEnd="timeline-end"
          StartDate={new Date(2019, 0)}
          EndDate={new Date(2019, 4)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Collaborated with an artist and level designer to develop a puzzle
              platformer game in Unity. I implemented core features such as the
              player controller, a time-warp mechanic, and all puzzles. I
              supported the project team with technical issues regarding Unity
              and Perforce.
            </p>
          }
          Skills={[ "Unity", "C#" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Lava Run 3D"}
          startOrEnd="timeline-start"
          StartDate={new Date(2019, 0)}
          EndDate={new Date(2019, 4)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Inspired by{" "}
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/Temple_Run"
                target="_blank"
              >
                Temple Run
              </a>
              , I developed and designed an infinite runner game using C# and
              Unity. Worked with an artist to streamline integration of reusable
              assets infinitely. The game features obstacles, powerups, and
              increasing speed.
            </p>
          }
          Skills={[ "Unity", "C#" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Project X - A Short Animated Film"}
          ProjectLinkProps={[
            {
              type: "youtube",
              href: "https://www.youtube.com/watch?v=wE4WfXVhAoU",
            },
            {
              type: "link",
              href: "https://usv.edu/about-us/real-world-project-studios/project-x/",
            },
          ]}
          startOrEnd="timeline-end"
          StartDate={new Date(2018, 8)}
          EndDate={new Date(2018, 11)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Collaborated in a class-wide project with animators, tech artists,
              and lighting artists to create a short animated film. I developed
              Autodesk Maya tools to streamline repetitive tasks and utilized
              the Autodesk Maya Python API to automate and export render layers
              for the render farm. I improved rendering performance by
              developing a shader clean-up tool to remove duplicate shaders.
            </p>
          }
          Skills={[ "Maya", "Python", "Rendering" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"TowAR Defense"}
          ProjectLinkProps={{
            type: "youtube",
            href: "https://www.youtube.com/watch?v=ghXBjnZXmQA",
          }}
          startOrEnd="timeline-start"
          StartDate={new Date(2018, 8)}
          EndDate={new Date(2018, 11)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Lead engineer for a class-wide project with artists, audio
              engineers, and other programmers to create an Augmented Reality
              (AR) Unity Game. I implemented the core gameplay mechanics,
              provided support to other engineers, and delegated tasks to ensure
              the project&apos;s success.
            </p>
          }
          Skills={[ "Unity", "C#", "Augmented Reality" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"The Strong Calculator"}
          startOrEnd="timeline-end"
          StartDate={new Date(2018, 8)}
          EndDate={new Date(2018, 11)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Using Kotlin and Android Studio, I developed a mobile Android
              application. The app can calculate a user&apos;s{" "}
              <a
                className="link"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Wilks_coefficient"
              >
                Wilks Score
              </a>
              , an estimated 1 rep-max based on number of reps for a given
              weight, and includes note taking features. The user&apos;s
              previous inputs are also automatically saved for future reuse.
            </p>
          }
          Skills={[ "Mobile Development", "Kotlin" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"The Ramswood Discovery"}
          ProjectLinkProps={{
            type: "youtube",
            href: "https://www.youtube.com/watch?v=WGvAGFW2CuE",
          }}
          startOrEnd="timeline-start"
          StartDate={new Date(2018, 0)}
          EndDate={new Date(2018, 3)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              In a Game Design class, I programmed and designed a horror game
              using Unity and C#. I worked on a team of 4 as the lead
              programmer, implementing core game mechanics and systems such as
              the character controller, progression system, camera work (i.e.
              cutscenes).
            </p>
          }
          Skills={[ "Unity", "C#", "Level Design" ]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Maya Autorig"}
          ProjectLinkProps={{
            type: "youtube",
            href: "https://www.youtube.com/watch?v=OlX4iucVmsc",
          }}
          startOrEnd="timeline-end"
          StartDate={new Date(2018, 0)}
          EndDate={new Date(2018, 3)}
          ProjectDescription={
            <p className="mb-2.5 mt-0">
              Using Python and Autodesk Maya, I designed and created an
              Autorigging tool. The tool features a UI with configurable options
              that allow a user to adapt the humanoid rig to their needs. The
              tool was developed for a Tools Programming class and later used in
              a Technical Rigging class.
            </p>
          }
          Skills={[ "Maya", "Python", "Technical Rigging", "Tools Programming" ]}
        />
        <hr />
      </li>
    </div>
  );
}

const CenterChevronDown = () => {
  return (
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M7 7l5 5l5 -5" />
        <path d="M7 13l5 5l5 -5" />
      </svg>
    </div>
  );
};
