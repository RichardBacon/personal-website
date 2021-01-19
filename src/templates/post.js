import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import styles from './post.module.css';

const Post = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <article className={styles.article}>
      {post.frontmatter.featimg && (
        <Img
          className={styles.image}
          fluid={post.frontmatter.featimg.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
      )}

      <h1 className={styles.heading}>{post.frontmatter.title}</h1>

      <p className={styles.details}>
        Posted:{' '}
        {new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        date
        subject
        author
        featimg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default Post;
