'use server';
import ContactForm from './components/contact/ContactForm';
import Header from './components/header/Header';
import Placeholder from './components/Placeholder';
import ThemeController from './components/ThemeController';
import { ABOUT_SECTION, CONTACT_SECTION, HOME_SECTION, PROJECTS_SECTION } from "./components/header/Constants";
import Signature from './components/Signature';

export default async function Home() {
  return (
    <div>
      <section id={HOME_SECTION} className='hero h-screen flex flex-col justify-center w-auto mx-0 mb-[-57px]'>
        <Signature />
        <ThemeController className="flex-initial w-auto ml-auto mx-auto" />
      </section>
      <Header />
      <section id={ABOUT_SECTION} className='scroll-mt-8 hero min-h-screen' >
        <Placeholder />
      </section>
      <section id={PROJECTS_SECTION} className='scroll-mt-8 hero min-h-screen' >
        <Placeholder />
      </section>
      <section id={CONTACT_SECTION} className='hero min-h-screen'>
        <ContactForm />
      </section>
    </div>
  );
}
