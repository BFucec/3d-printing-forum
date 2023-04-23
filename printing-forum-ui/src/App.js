import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AddPost,
  Login,
  Navbar,
  EditPost,
  PostList,
  Register,
  UserList,
  UserInfo,
  UserPosts,
  About,
  Contact,
  Footer,
  Future,
  PostListActions,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector((state) => state.user);

  const registerElement = React.cloneElement(<Register />, { userInfo });

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList />}></Route>
          <Route index element={<PostList />}></Route>
          <Route path="/postList" element={<PostList />}></Route>
          <Route path="/addPost" element={<AddPost />}></Route>
          <Route path="/editPost/:id" element={<EditPost />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/allUsers" element={<UserList />}></Route>
          <Route path="/userInfo" element={<UserInfo />}></Route>
          <Route path="/userPosts" element={<UserPosts />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/future" element={<Future />}></Route>
          <Route path="/adminAllPosts" element={<PostListActions />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
