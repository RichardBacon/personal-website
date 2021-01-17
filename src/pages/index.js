import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';

const HomePage = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <About id="about" />
        <Projects id="projects" projects={data.projects.nodes} />
      </Layout>
    </>
  );
};

export default HomePage;

export const query = graphql`
  {
    projects: allProject(sort: { fields: date, order: DESC }) {
      nodes {
        id
        description
        githubUrl
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        name
        projectUrl
        tech
      }
    }
  }
`;
