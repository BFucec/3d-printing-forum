import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ post, deletePost }) => {
  const navigate = useNavigate();

  const editPost = (e, id) => {
    e.preventDefault();
    navigate(`/editPost/${id}`);
  };

  return (
    <div
      key={post.id}
      class="block max-w-sm rounded-lg bg-white shadow-lg mx-4 my-4"
    >
      <a href="#!">
        <img class="rounded-t-lg" src={post.postImage} alt="" />
      </a>
      <div class="p-6">
        <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800">
          {post.postTitle}
        </h5>
        <p class="mb-4 text-base text-neutral-600">
          Uploaded by: {post.username}
        </p>
        <p class="mb-4 text-base text-neutral-600">{post.postDescription}</p>
        <div className="flex items-center text-sm">
          <button
            onClick={(e, id) => editPost(e, post.id)}
            className="rounded text-white font-thin bg-blue-400 py-1 px-2 hover:bg-blue-700 mr-4"
          >
            Edit
          </button>
          <button
            onClick={(e, id) => deletePost(e, post.id)}
            className="rounded text-white font-thin bg-red-400 py-1 px-2 hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
