import ThemeController from "./ThemeController";
import "@/app/styles/header.css";

export default async function Header() {
    return (
        <div className="header flex w-auto mx-0 sticky top-0 drop-shadow">
            <div className="navigation flex-1 items-center justify-end join mr-4 gap-4 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8">
                <a href="#home" className="join-item">Home</a>
                <a href="#about" className="join-item">About Me</a>
                <a href="#projects" className="join-item">Projects</a>
                <a href="#contact" className="join-item">Contact</a>
            </div>
            <ThemeController className="flex-initial w-auto ml-auto" />
        </div>
    );
}