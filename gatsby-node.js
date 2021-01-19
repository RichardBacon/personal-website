const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'content' });

    createNodeField({
      node,
      name: 'slug',
      value: `/posts${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      postQuery: allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('error loading posts', result.errors);
    return;
  }

  const posts = result.data.postQuery.edges;
  posts.forEach((post) => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.fields.slug,
      },
    });
  });
};
