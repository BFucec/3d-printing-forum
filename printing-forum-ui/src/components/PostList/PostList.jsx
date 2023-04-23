import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/PostService";
import { CardNoAction } from "..";

const PostList = () => {
  const navigate = useNavigate();

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

  return (
    <div className="container mx-auto my-8">
      {!loading && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {posts.map((post) => (
            <CardNoAction post={post} key={post.id}></CardNoAction>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;
