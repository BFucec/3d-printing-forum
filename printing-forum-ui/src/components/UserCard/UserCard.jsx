import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const UserCard = ({ user, deleteUser }) => {
  const userInfo = useSelector((state) => state.user);
  const authHeader =
    "Basic " + btoa(userInfo.username + ":" + userInfo.password);
  console.log(userInfo);
  const navigate = useNavigate();

  return (
    <tr
      key={user.id}
      class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td class="px-6 py-4">{user.firstName}</td>
      <td class="px-6 py-4">{user.lastName}</td>
      <td class="px-6 py-4">{user.username}</td>
      <td class="px-6 py-4">{user.email}</td>
      <td class="px-6 py-4">{user.roles[0].name}</td>
      <td class="px-6 py-4">
        <a
          onClick={(e, id) => deleteUser(e, user.id)}
          className="text-red-600 hover:text-red-800 hover:cursor-pointer"
        >
          DELETE
        </a>
      </td>
    </tr>
  );
};

export default UserCard;
