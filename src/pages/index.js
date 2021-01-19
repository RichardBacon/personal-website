import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Section from '../components/section';
import Hero from '../components/hero';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Blog from '../components/blog';

const HomePage = ({ data }) => {
  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <Section id="about" heading="About">
          <About />
        </Section>
        <Section id="projects" heading="Projects">
          <Projects projects={data.projects.nodes} />
        </Section>
        <Section id="contact" heading="Contact">
          <Contact />
        </Section>
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
