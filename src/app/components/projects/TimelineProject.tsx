import "@/app/styles/projectTimeline.css";
import { HTMLAttributes } from "react";

export default async function TimelineProject(props: TimelineProjectProps) {
  const skills = props.Skills.sort().map((skill) => (
    <div key={skill} className="skill text-sm">
      {skill}
    </div>
  ));
  let projectLinks: JSX.Element | JSX.Element[] | null = null;
  if (Array.isArray(props.ProjectLinkProps))
    projectLinks = props.ProjectLinkProps.map((p) => (
      <ProjectLink key={p.href} props={p} />
    ));
  else if (props.ProjectLinkProps)
    projectLinks = <ProjectLink props={props.ProjectLinkProps} />;

  return (
    <div
      className={`${props.startOrEnd} project-hover prose rounded px-4 py-4 md:text-end ${props.className} flex flex-col gap-2`}
    >
      <div>
        <time className="font-mono italic">
          {props.StartDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
          {props.EndDate
            ? ` - ${props.EndDate.toLocaleString("default", { month: "long", year: "numeric" })}`
            : " - Present"}
        </time>
        <div className="project-title flex flex-col flex-wrap items-center text-lg font-black md:flex-row md:gap-2">
          <div className="mr-auto shrink md:mr-0">{props.ProjectTitle}</div>
          <div className="mr-auto flex gap-2 md:mr-0">
            {props.ProjectLinkProps ? projectLinks : null}
          </div>
        </div>
        {props.ProjectDescription}
      </div>
      <div className={`flex flex-wrap gap-4 md:ml-auto`}>{skills}</div>
    </div>
  );
}

const ProjectLink = (props: { props: ProjectLinkProps }) => {
  const getIcon = () => {
    switch (props.props.type) {
      case "link":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="project-link icon icon-tabler icons-tabler-outline icon-tabler-link"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 15l6 -6" />
            <path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
            <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
          </svg>
        );
      case "github":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="project-link icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        );
      case "youtube":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="project-link-youtube icon icon-tabler icons-tabler-outline icon-tabler-brand-youtube"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
            <path d="M10 9l5 3l-5 3z" />
          </svg>
        );
      default:
        return null;
    }
  };
  return (
    <a href={props.props.href} target="_blank" rel="noopener noreferrer">
      {getIcon()}
    </a>
  );
};

interface ProjectLinkProps {
  href: string;
  type: "youtube" | "github" | "link";
}

interface TimelineProjectProps {
  StartDate: Date;
  EndDate?: Date;
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectLinkProps?: ProjectLinkProps | Array<ProjectLinkProps>;
  Skills: Array<string>;
  className?: HTMLAttributes<HTMLDivElement> | string;
  startOrEnd: "timeline-start" | "timeline-end";
}
