import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = () => {
  const { title, description, url, image, type, creator } = useSiteMetadata();

  return (
    <Helmet>
      <html lang="en"></html>
      <title>{title}</title>
      <link rel="canonical" href={url} />

      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={creator} />
      <meta name="twitter:creator" content={creator} />
    </Helmet>
  );
};

export default SEO;
