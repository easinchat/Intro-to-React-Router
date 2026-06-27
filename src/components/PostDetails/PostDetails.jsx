import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  console.log(post);

  return (
    <div>
      <h3>{post.body}</h3>
      <h3>{post.title}</h3>
    </div>
  );
};

export default PostDetails;
