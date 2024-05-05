import axios from 'axios';
import { useEffect, useState } from 'react';
import usePosts from './hooks/usePosts';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const { data: posts, error, isLoading } = usePosts();
  
  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading..</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
