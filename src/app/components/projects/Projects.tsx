import TimelineProject from "./TimelineProject";

export default function Projects() {
    return (
        <div className="timeline timeline-primary timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-full px-2">
            <li>
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <TimelineProject
                    startOrEnd="timeline-start"
                    StartDate={new Date(2023, 7)}
                    EndDate={new Date(2024, 6)}
                    ProjectTitle={"Quality Control Web App"}
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
                <div className="timeline-middle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                    </svg>
                </div>
                <TimelineProject
                    startOrEnd="timeline-end"
                    StartDate={new Date(2023, 5)}
                    EndDate={new Date(2024, 6)}
                    ProjectTitle={"Google Sheets Finance Automation"}
                    ProjectDescription={`
                        Developed a tool to extract data from PDF store receipts and populate a Google Sheet, eliminating any potential user error
                        Developed 3 utility tools: advanced column sorting, auto populated purchase dates, and a custom UI to apply formulas to multiple ranges, boosting productivity by 30%
                        Implemented a feature syncing Gmail and Google Calendar with automated events dependent on bill due dates, preventing missed payments`}
                    Skills={[ "Apps Script", "G-Suite", "Typescript" ]} />
                <hr />
            </li>
        </div>);
}