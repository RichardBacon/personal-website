import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
          url
          image
          type
          creator
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
