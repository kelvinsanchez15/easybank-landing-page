import Head from 'next/head';
import type { NextPage } from 'next';
import Hero from '../components/home/Hero';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="fixed z-20 m-auto w-full">
        <nav className="p-5 bg-white flex z-20">
          <div className="flex-grow">
            <img src="/images/logo.svg" alt="easybank logo" />
          </div>

          <button>
            <img src="/icons/icon-hamburger.svg" alt="" />
          </button>
        </nav>
      </div>

      <Hero />
      <section className="h-96">{/* dummy section */}</section>
    </>
  );
};

export default Home;
