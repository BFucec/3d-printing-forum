import React, { useState, useEffect } from "react";
import PostService from "../../services/PostService";
import { CardDeleteOnly } from "..";

const PostListActions = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PostService.getPosts();
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deletePost = (e, id) => {
    e.preventDefault();
    alert("Are you sure you want to delete this post?");
    PostService.deletePost(id).then((res) => {
      if (posts) {
        setPosts((prevElement) => {
          return prevElement.filter((post) => post.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      {!loading && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {posts.map((post) => (
            <CardDeleteOnly
              post={post}
              deletePost={deletePost}
              key={post.id}
            ></CardDeleteOnly>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostListActions;
