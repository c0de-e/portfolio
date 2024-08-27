import TimelineProject from "./TimelineProject";

export default function ProjectTimeline() {
    return (
        <div className="timeline timeline-primary timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-full px-2">
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
                    Skills={[ "React.js", "Next.js", "Firebase", "GCP" ]}
                />
                <hr />
            </li>
            <li>
                <hr />
                <CenterChevronDown />
                <TimelineProject
                    ProjectTitle={"Google Sheets Finance Automation"}
                    ProjectLinkProps={{ type: "github", href: "https://github.com/c0de-e/Finance-Automation" }}
                    startOrEnd="timeline-end"
                    StartDate={new Date(2023, 5)}
                    EndDate={new Date(2024, 6)}
                    ProjectDescription={`
                        Developed a tool to extract data from PDF store receipts and populate a Google Sheet, eliminating any potential user error
                        Developed 3 utility tools: advanced column sorting, auto populated purchase dates, and a custom UI to apply formulas to multiple ranges, boosting productivity by 30%
                        Implemented a feature syncing Gmail and Google Calendar with automated events dependent on bill due dates, preventing missed payments`}
                    Skills={[ "Apps Script", "G-Suite", "Typescript" ]} />
                <hr />
            </li>
            <li>
                <hr />
                <CenterChevronDown />
                <TimelineProject
                    ProjectTitle={"Google Sheets Meal Plan Automation"}
                    ProjectLinkProps={{ type: "github", href: "https://github.com/c0de-e/Meal-Plan-Automation" }}
                    startOrEnd="timeline-start"
                    StartDate={new Date(2023, 2)}
                    EndDate={new Date(2023, 3)}
                    ProjectDescription={`
                        Automates creating a weekly meal plan using the Google Tasks API and Google Sheets 
                        Creates a Google Task for every selected meal and a subtask for every meal ingredient 
                        Assimilate user feedback and implement improvements`}
                    Skills={[ "Apps Script", "G-Suite", "Typescript" ]} />
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
                    Skills={[ "OAuth", "C#", ".NET", "Unity" ]} />
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
                    Skills={[ "OAuth", "HTML5", "CSS", "Javascript" ]} />
                <hr />
            </li>
            <li>
                <hr />
                <CenterChevronDown />
                <TimelineProject
                    ProjectTitle={"Project X - A Short Animated Film"}
                    ProjectLinkProps={[ { type: "youtube", href: "https://www.youtube.com/watch?v=wE4WfXVhAoU" }, { type: "link", href: "https://usv.edu/about-us/real-world-project-studios/project-x/" } ]}
                    startOrEnd="timeline-end"
                    StartDate={new Date(2018, 8)}
                    EndDate={new Date(2018, 11)}
                    ProjectDescription={`
                        Solely developed tools for animators and lighting artists, streamlining repetitive tasks
                        Utilized Autodesk Maya Python API to automate and export render layers for the render farm
                        Developed a shader clean-up tool to remove duplicate shaders, improving rendering performance`}
                    Skills={[ "Maya", "Python", "Rendering" ]} />
                <hr />
            </li>
            <li>
                <hr />
                <CenterChevronDown />
                <TimelineProject
                    ProjectTitle={"TowAR Defense"}
                    ProjectLinkProps={{ type: "youtube", href: "https://www.youtube.com/watch?v=ghXBjnZXmQA" }}
                    startOrEnd="timeline-start"
                    StartDate={new Date(2018, 8)}
                    EndDate={new Date(2018, 11)}
                    ProjectDescription={`
                        Implemented numerous core gameplay mechanics, such as charging stations and tower upgrades using C# Revised existing scripts to be optimized for mobile Augmented Reality 
                        Managed a team of 3 engineers by delegating tasks based on the relevancy of each sub-role Participated in problem-solving technical issues in Unity and Perforce to assure team success `}
                    Skills={[ "Unity", "C#", "Augmented Reality" ]} />
                <hr />
            </li>
        </div>);
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevrons-down">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 7l5 5l5 -5" />
                <path d="M7 13l5 5l5 -5" />
            </svg>
        </div>
    );
};