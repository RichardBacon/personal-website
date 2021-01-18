import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styles from './post-preview.module.css';

const PostPreview = ({ post }) => (
  <article className={styles.post}>
    <Link to={post.slug}>
      <h3 className={styles.heading}>{post.title}</h3>
      <p className={styles.paragraph}>{post.excerpt}</p>
      <Link className={styles.link} to={post.slug}>
        read this post &rarr;
      </Link>
    </Link>
  </article>
);

export default PostPreview;
