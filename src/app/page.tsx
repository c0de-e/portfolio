'use server';
import Header from './components/header/Header';
import Placeholder from './components/Placeholder';
import ThemeController from './components/ThemeController';

export default async function Home() {
  return (
    <div>
      <section id='home' className='hero h-screen flex flex-col justify-center w-auto mx-0'>
        <Placeholder className='flex-initial' />
        <ThemeController className="flex-initial w-auto ml-auto mx-auto" />
      </section>
      <Header />
      <section id='about' className='scroll-mt-8' style={{ marginBottom: "50rem" }}>
        <Placeholder />
      </section>
      <section id='projects' className='scroll-mt-8' style={{ marginBottom: "50rem" }}>
        <Placeholder />
      </section>
      <section id='contact' className='scroll-mt-8' style={{ marginBottom: "50rem" }}>
        <Placeholder />
      </section>
    </div>
  );
}
