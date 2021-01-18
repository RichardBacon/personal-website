import React from 'react';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import styles from './blog.module.css';

const Blog = ({ id }) => {
  const posts = usePosts();

  return (
    <div className={styles.content}>
      {posts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default Blog;
