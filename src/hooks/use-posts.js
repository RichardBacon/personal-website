import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  `);

  return data.allMarkdownRemark.nodes.map((post) => ({
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    slug: post.fields.slug,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
