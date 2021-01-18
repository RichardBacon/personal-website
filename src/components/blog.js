import React from 'react';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styles from './blog.module.css';

const Blog = ({ id }) => {
  const posts = usePosts();

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.primaryHeading}>Blog</h2>
        <div className={styles.content}>
          {posts.map((post) => (
            <PostPreview key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
