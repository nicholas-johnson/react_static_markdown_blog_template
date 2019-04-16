import React from 'react'
import { useRouteData } from 'react-static'

const BlogPost = () => {
  const {post} = useRouteData()
  return (
    <div dangerouslySetInnerHTML={{__html: post.html}}></div>
  );
};

export default BlogPost;
