module.exports = {
  siteMetadata: {
    title: 'Richard Bacon',
    description:
      'Richard Bacon is a creative front end developer with a background in both coding and design.',
    url: 'https://richardjonbacon.com',
    creator: '@RichardJonBacon',
    image:
      'https://res.cloudinary.com/richardjonbacon/image/upload/v1610722300/sample.jpg',
    type: 'website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/images`,
      },
    },
  ],
};
