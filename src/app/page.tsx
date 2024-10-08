"use server";
import ContactForm from "@/app/components/contact/ContactForm";
import Header from "@/app/components/header/Header";
import {
  ABOUT_SECTION,
  CONTACT_SECTION,
  HOME_SECTION,
  PROJECTS_SECTION,
} from "@/app/components/header/Constants";
import AboutMe from "./components/AboutMe";
import ProjectTimeline from "./components/projects/ProjectTimeline";
import HomeHero from "./components/HomeHero";
import ExpandingContainer from "./components/projects/ExpandingContainer";

export default async function Home() {
  return (
    <div>
      <section
        id={HOME_SECTION}
        className="hero mx-0 mb-[-56px] flex min-h-screen w-auto flex-col justify-center"
      >
        <HomeHero />
      </section>
      <Header />
      <section
        id={ABOUT_SECTION}
        className="hero min-h-[75vh] scroll-mt-10 sm:scroll-mt-0"
      >
        <AboutMe />
      </section>
      <section id={PROJECTS_SECTION} className="scroll-mt-16">
        <ExpandingContainer div={<ProjectTimeline />} />
      </section>
      <section id={CONTACT_SECTION} className="hero min-h-screen">
        <ContactForm />
      </section>
    </div>
  );
}
