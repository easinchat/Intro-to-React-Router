import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div
      style={{ border: "2px solid blue", borderRadius: "10px", margin: "15px" }}
    >
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show Post</button>
      </Link>
      <button>details of: {id}</button>
    </div>
  );
};

export default Post;
