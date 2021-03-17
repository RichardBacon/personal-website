module.exports = {
  siteMetadata: {
    title: 'Richard Bacon',
    description:
      'Richard Bacon is a creative front end developer with a background in both coding and design.',
    url: 'https://richardjohnbacon.com',
    creator: '@richardbcodes',
    image:
      'https://res.cloudinary.com/richardjohnbacon/image/upload/v1611161873/personal-website.png',
    type: 'website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Project',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Richard Bacon',
        short_name: 'Richard Bacon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'standalone',
        icon: 'content/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
