import React from 'react';
import { Link } from 'gatsby';
import styles from './post-preview.module.css';

const PostPreview = ({ post }) => (
  <article className={styles.post}>
    <Link to={post.slug}>
      <h3 className={styles.heading}>{post.title}</h3>
      <p className={styles.paragraph}>{post.excerpt}</p>
      <p className={styles.link} to={post.slug}>
        read this post &rarr;
      </p>
    </Link>
  </article>
);

export default PostPreview;
