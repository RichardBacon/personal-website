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
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/projects/" }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      nodes {
        id
        html
        frontmatter {
          featured
          title
          projectUrl
          tech
          githubUrl
          date
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
