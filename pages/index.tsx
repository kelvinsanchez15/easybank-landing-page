import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
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

      <Navbar />
      <Hero />
      <Motivation />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
