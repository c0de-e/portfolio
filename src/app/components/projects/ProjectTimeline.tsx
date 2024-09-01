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
                        Leveraged Autodesk APIs to handle required data for quality control and managed quality controlled data with Firebase Firestore
                        Dynamically generated Google Looker Studio dashboards and automated data filtering using Firebase Cloud Functions
                        Automated quality control processes with webhooks, cutting out 90% of manual work and enabling the team to focus on high priority tasks
                        `}
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
                        Developed a tool to extract data from PDF store receipts and populate a Google Sheet, eliminating any potential user error
                        Developed 3 utility tools: advanced column sorting, auto populated purchase dates, and a custom UI to apply formulas to multiple ranges, boosting productivity by 30%
                        Implemented a feature syncing Gmail and Google Calendar with automated events dependent on bill due dates, preventing missed payments`}
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
                        Automates creating a weekly meal plan using the Google Tasks API and Google Sheets 
                        Creates a Google Task for every selected meal and a subtask for every meal ingredient 
                        Assimilate user feedback and implement improvements`}
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
                        Utilized Unity Reflect to import Revit Geometry and created an importer/exporter to bring in custom data
                        Developed 3 player controllers to enhance navigation of imported models, including mobile, point-to-point, and first-person perspectives
                        Embedded Unity WebGL into a .NET site, securing user access with Autodesk's OAuth 2.0`}
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
                        Generated admin dashboard to manage 1000+ users
                        Created a basic data text viewer from an Autodesk API
                        Used Google Charts to visualize user and project data `}
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
                        Collaborated with artist and level designer to develop a puzzle platformer 
                        Implemented core mechanics, such as time-warp and puzzles using C#
                        Supported others with technical issues regarding Unity and Perforce to ensure implementation of scripts
                        Ensured team efforts were on track to meet deadlines by frequently checking in with the team 
 `}
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
                        Solely developed tools for animators and lighting artists, streamlining repetitive tasks
                        Utilized Autodesk Maya Python API to automate and export render layers for the render farm
                        Developed a shader clean-up tool to remove duplicate shaders, improving rendering performance`}
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
                        Implemented numerous core gameplay mechanics, such as charging stations and tower upgrades using C# Revised existing scripts to be optimized for mobile Augmented Reality 
                        Managed a team of 3 engineers by delegating tasks based on the relevancy of each sub-role Participated in problem-solving technical issues in Unity and Perforce to assure team success `}
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
            In a Game Design class, I Engineered and designed a horror game 
            using Unity and C#. I worked on a team of 4 as the lead programmer, 
            implementing core game mechanics and systems such as
            the character controller, progression system, camera work (i.e. cutscenes), etc.
                         `}
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
            that allow the user to change the humanoid rig to their needs.
                         `}
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
