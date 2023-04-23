import axios from "axios";

const POST_API_BASE_URL = "http://localhost:8080/api/v1/auth";

class AuthService {
  createUser(user) {
    return axios.post(POST_API_BASE_URL + "/addUser", user);
  }

  getAllUsers(authHeader) {
    return axios.get(POST_API_BASE_URL + "/allUsers", {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  deleteUser(id, authHeader) {
    return axios.delete(POST_API_BASE_URL + "/deleteUser/" + id, {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  loginUser(authHeader) {
    return axios.post(POST_API_BASE_URL + "/login", null, {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  logout(authHeader) {
    return axios.post(POST_API_BASE_URL + "/logout", null, {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  getUserInfo(authHeader) {
    return axios.get(POST_API_BASE_URL + "/me", {
      headers: {
        Authorization: authHeader,
      },
    });
  }

  isAdmin(authHeader) {
    return axios.get(POST_API_BASE_URL + "/isAdmin", {
      headers: {
        Authorization: authHeader,
      },
    });
  }
}

export default new AuthService();
