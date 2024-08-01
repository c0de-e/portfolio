'use server';
import Header from './components/header/Header';
import Placeholder from './components/Placeholder';

export default async function Home() {
  return (
    <div className=''>
      <div className='hero h-screen'>
        <Placeholder />
      </div>
      <Header />
      <section id='home' className='scroll-mt-8' style={{ marginBottom: "50rem" }}>
        <Placeholder />
      </section>
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
