import HeaderAnchor from "./HeaderAnchor";
import "@/app/styles/header.css";

export default async function Header() {
    return (
        <div className="header flex w-auto mx-0 sticky top-0 drop-shadow h-14 z-10">
            <nav className="navigation flex-1 items-center justify-end join mr-6 sm:mr-6 md:mr-8 lg:mr-10 gap-4 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                <HeaderAnchor anchor_id="home" className="join-item">Home</HeaderAnchor>
                <HeaderAnchor anchor_id="about" className="join-item">About Me</HeaderAnchor>
                <HeaderAnchor anchor_id="projects" className="join-item">Projects</HeaderAnchor>
                <HeaderAnchor anchor_id="contact" className="join-item">Contact</HeaderAnchor>
            </nav>
        </div>
    );
}