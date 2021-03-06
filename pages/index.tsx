import Head from 'next/head';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Easy Bank</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="bg-black text-white">Hello Tailwind</div>
    </>
  );
};

export default Home;
