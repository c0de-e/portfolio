import { DetailedHTMLProps, HTMLAttributes } from "react";
import HeaderAnchor from "./HeaderAnchor";
import "@/app/styles/header.css";

export default async function Header(
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
  return (
    <div
      {...props}
      className="header sticky top-0 z-10 mx-0 flex h-14 w-auto drop-shadow"
    >
      <nav className="navigation join mr-6 flex-1 items-center justify-end gap-4 sm:mr-6 sm:gap-3 md:mr-8 md:gap-4 lg:mr-10 lg:gap-6 xl:gap-8">
        <HeaderAnchor anchor_id="home" className="join-item">
          Home
        </HeaderAnchor>
        <HeaderAnchor anchor_id="about" className="join-item">
          About Me
        </HeaderAnchor>
        <HeaderAnchor anchor_id="projects" className="join-item">
          Projects
        </HeaderAnchor>
        <HeaderAnchor anchor_id="contact" className="join-item">
          Contact
        </HeaderAnchor>
      </nav>
    </div>
  );
}
