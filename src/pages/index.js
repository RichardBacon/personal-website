import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';

const HomePage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <About id="about" />
      </Layout>
    </>
  );
};

export default HomePage;
