import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostService from "../../services/PostService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const AddPost = () => {
  const navigate = useNavigate();

  const [post, setPost] = useState({
    id: "",
    postTitle: "",
    postDescription: "",
    postImage: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPost({ ...post, [e.target.name]: value });
  };

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const savePost = (e) => {
    e.preventDefault();

    const authHeader = "Basic " + btoa(user.username + ":" + user.password);

    PostService.savePost(post, authHeader)
      .then((response) => {
        console.log(response);
        navigate("/postList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setPost({
      id: "",
      postTitle: "",
      postDescription: "",
      postImage: "",
    });
  };

  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create a new post
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="postTitle"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Post Title
                </label>
                <input
                  type="text"
                  name="postTitle"
                  value={post.postTitle}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="postDescription"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="postDescription"
                  value={post.postDescription}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="postImage"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image url
                </label>
                <input
                  type="text"
                  name="postImage"
                  value={post.postImage}
                  onChange={(e) => handleChange(e)}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>

              <div className="items-center justify-center h-14 w-full my-4 space-x-4">
                <button
                  onClick={savePost}
                  class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Create post
                </button>
                <button
                  onClick={reset}
                  class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Clear
                </button>
                <button
                  onClick={() => navigate("/postList")}
                  class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
