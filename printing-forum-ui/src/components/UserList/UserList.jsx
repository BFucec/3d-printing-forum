import React, { useEffect, useState } from "react";
import AuthService from "../../services/AuthService";
import { UserCard } from "../";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.user);
  const authHeader =
    "Basic " + btoa(userInfo.username + ":" + userInfo.password);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AuthService.getAllUsers(authHeader);

        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.log(error);
        alert("Cannot access that page!");
        navigate("/");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteUser = (e, id) => {
    e.preventDefault();
    alert("Are you sure you want to delete this user?");
    AuthService.deleteUser(id, authHeader).then((res) => {
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8 h-screen">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              First Name
            </th>
            <th scope="col" class="px-6 py-3">
              Last Name
            </th>
            <th scope="col" class="px-6 py-3">
              Username
            </th>
            <th scope="col" class="px-6 py-3">
              E-mail
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        {!loading && (
          <tbody className="bg-white">
            {users.map((user) => (
              <UserCard
                user={user}
                deleteUser={deleteUser}
                key={user.id}
              ></UserCard>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default UserList;
