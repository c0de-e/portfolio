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
          ProjectDescription={`
            Using Next.js and GCP, I developed a Quality Control (QC) Web App to automate manual spreadsheet QC. 
            The front end features an admin dashboard to create webhooks (for automatic QC), test queries 
            (including a number of preset queries to test with) and generate Google Looker Studio dashboards per project. 
            I used Firebase Firestore to store the data, and Firebase Cloud Functions to automate data filtering.`}
          Skills={["React.js", "Next.js", "Firebase", "GCP"]}
        />
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
          ProjectDescription={`
            Developed a tool to extract data from PDF store receipts and populate a Google Sheet. 
            The tool features advanced column sorting, auto populating purchase dates, and a custom 
            UI to apply formulas to multiple ranges. It also features syncing Gmail and Google Calendar 
            with automated events dependent on bill due dates, preventing missed payments.`}
          Skills={["Apps Script", "G-Suite", "Typescript"]}
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
          ProjectDescription={`
            Developed a tool to generate a weekly meal plan using the Google Tasks API and Google Sheets. 
            The tool creates a Google Task for every selected meal and a subtask for every meal ingredient,
            allowing the user to check off ingredients in the grocery store as the go.`}
          Skills={["Apps Script", "G-Suite", "Typescript"]}
        />
        <hr />
      </li>
      <li>
        <hr />
        <CenterChevronDown />
        <TimelineProject
          ProjectTitle={"Unity Digital Twin App"}
          startOrEnd="timeline-end"
          StartDate={new Date(2020, 7)}
          EndDate={new Date(2021, 2)}
          ProjectDescription={`
            Using Unity, I developed a game to view 2D Revit data in a 3D environment.             
            I utilized Unity Reflect to import Autodesk Revit Geometry. I then created 
            an importer/exporter to bring in custom data the user can interact with.
            The game fetaured 3 player controllers to enhance navigation of imported models, 
            including mobile, point-to-point, and first-person perspectives. I embedded Unity 
            WebGL into a .NET site, securing user access with Autodesk's OAuth 2.0`}
          Skills={["OAuth", "C#", ".NET", "Unity"]}
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
          ProjectDescription={`
            Developed and managed a Autodesk Construction Cloud dashboard
            to view big data at a glance. The dashboard features OAuth for
            permissions, a data text viewer that reads data from an Autodesk 3D model,
            Google Charts to visualize user and project data, and an admin dashboard
            to manage 1000+ users.`}
          Skills={["OAuth", "HTML5", "CSS", "Javascript"]}
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
          ProjectDescription={`
            Collaborated with an artist and level designer to develop a puzzle platformer in Unity. 
            I implemented core features such as the player controller, a time-warp mechanic, and all 
            puzzles. I supported others with technical issues regarding Unity and Perforce (version control) 
            to ensure team success.`}
          Skills={["Unity", "C#"]}
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
              Developed and designed an infinite runner game using C# and Unity.
              Worked with an artist to effeciently integrate reusable assets
              infinitely. The game features obstacles, powerups,and increasing
              speed, and took inspiration from{" "}
              <a
                className="link"
                href="https://en.wikipedia.org/wiki/Temple_Run"
                target="_blank"
              >
                Temple Run
              </a>
              .
            </p>
          }
          Skills={["Unity", "C#"]}
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
          ProjectDescription={`
            Collaborted in a class-wide project with animators, tech artists, and lighting artists
            to create a short animated film. I developed Autodesk Maya tools to streamline repetitive tasks
            and utilized the Autodesk Maya Python API to automate and export render layers for the render farm.
            I imporved rendering performance by Developing a shader clean-up tool to remove duplicate shaders.`}
          Skills={["Maya", "Python", "Rendering"]}
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
          ProjectDescription={`
            Collaborted in a class-wide project with artists, audio engineers, and other programmers 
            to create a AR Unity Game. As the lead engineer for the project, I
            implementing core gameplay mechanics, managed other engineers, and 
            delegated tasks to ensure success.`}
          Skills={["Unity", "C#", "Augmented Reality"]}
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
              Using Kotlin and Android Studio, I developed an app for the first
              time for a Mobile programming class. The app calculates the
              user&apos;s{" "}
              <a
                className="link"
                target="_blank"
                href="https://en.wikipedia.org/wiki/Wilks_coefficient"
              >
                Wilks Score
              </a>{" "}
              and features notetaking.
            </p>
          }
          Skills={["Android App", "Kotin", "Strength Training"]}
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
          ProjectDescription={`
            In a Game Design class, I engineered and designed a horror game 
            using Unity and C#. I worked on a team of 4 as the lead programmer, 
            implementing core game mechanics and systems such as
            the character controller, progression system, camera work (i.e. cutscenes).`}
          Skills={["Unity", "C#", "Lead", "Level Design"]}
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
          ProjectDescription={`
            Using Python and Autodesk Maya, I designed and created an Autorigging tool. 
            The tool was developed for a Tools programming class and used in a separate 
            Technical Rigging class. The tool features a UI with configurable options
            that allow the user to change the humanoid rig to their needs.`}
          Skills={["Maya", "Python", "Technical Rigging", "Tools Programming"]}
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
