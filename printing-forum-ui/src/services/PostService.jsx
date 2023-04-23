import axios from "axios";

const POST_API_BASE_URL = "http://localhost:8080/api/v1/posts";
const POST_API_BASE_URL2 = "http://localhost:8080/api/v1";

class PostService {
  savePost(post, authHeader) {
    return axios.post(POST_API_BASE_URL2 + "/createPost", post, {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  getPosts() {
    return axios.get(POST_API_BASE_URL);
  }

  deletePost(id) {
    return axios.delete(POST_API_BASE_URL + "/" + id);
  }

  getPostById(id) {
    return axios.get(POST_API_BASE_URL + "/" + id);
  }

  editPost(post, id) {
    return axios.put(POST_API_BASE_URL + "/" + id, post);
  }

  getUserPosts(authHeader) {
    return axios.get(POST_API_BASE_URL2 + "/posts/userPosts", {
      headers: {
        Authorization: authHeader,
      },
    });
  }
}

export default new PostService();
