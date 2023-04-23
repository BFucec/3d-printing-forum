import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/PostService";
import { Card } from "..";
import { useSelector } from "react-redux";

const UserPosts = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);

  const user = useSelector((state) => state.user);
  const authHeader = "Basic " + btoa(user.username + ":" + user.password);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await PostService.getUserPosts(authHeader);
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
    <div className="container mx-auto my-8 h-screen">
      <div className="h-12">
        <button
          onClick={() => navigate("/addPost")}
          className="rounded bg-slate-600 text-white px-6 py-2 mx-4 font-semibold"
        >
          Add Post
        </button>
      </div>
      {!loading && (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
          {posts.map((post) => (
            <Card post={post} deletePost={deletePost} key={post.id}></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPosts;
