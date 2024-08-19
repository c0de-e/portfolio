
import "@/app/styles/projectTimeline.css";
import { HTMLAttributes } from "react";

export default async function TimelineProject(props: TimelineProjectProps) {
    const skills = props.Skills.map(skill => (<div key={skill} className="skill text-sm">{skill}</div>));
    return (
        <div className={`${props.startOrEnd} project-hover md:text-end prose rounded py-4 px-4 ${props.className} flex flex-col gap-2`}>
            <div>
                <time className="font-mono italic">{props.StartDate.toLocaleString('default', { month: 'long', year: 'numeric' })}{props.EndDate ? ` - ${props.EndDate.toLocaleString('default', { month: 'long', year: 'numeric' })}` : ""}</time>
                <div className="text-lg font-black project-title">{props.ProjectTitle}</div>
                {props.ProjectDescription}
            </div>
            <div className={`flex flex-wrap gap-4 md:ml-auto`}>{skills}</div>
        </div>
    );
}

interface TimelineProjectProps {
    StartDate: Date;
    EndDate?: Date;
    ProjectTitle: string;
    ProjectDescription: string;
    Skills: Array<string>;
    className?: HTMLAttributes<HTMLDivElement> | string;
    startOrEnd: "timeline-start" | "timeline-end";
};