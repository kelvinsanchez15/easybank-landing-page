import Head from 'next/head';
import type { NextPage } from 'next';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import Blog from '../components/home/Blog';
import Footer from '../components/layout/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easybank</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container py-5 flex z-20">
          <div className="flex-grow">
            <img src="/images/logo.svg" alt="easybank logo" />
          </div>

          <button>
            <img src="/icons/icon-hamburger.svg" alt="" />
          </button>
        </nav>
      </div>

      <Hero />
      <Motivation />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
