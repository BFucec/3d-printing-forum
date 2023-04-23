import React from "react";
import { useNavigate } from "react-router-dom";

const CardNoAction = ({ post }) => {
  const navigate = useNavigate();

  return (
    <div
      key={post.id}
      class="block max-w-sm rounded-lg bg-white shadow-lg mx-4 my-4"
    >
      <a>
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
      </div>
    </div>
  );
};

export default CardNoAction;
