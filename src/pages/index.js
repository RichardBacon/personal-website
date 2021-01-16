import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';

const HomePage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
      </Layout>
    </>
  );
};

export default HomePage;
