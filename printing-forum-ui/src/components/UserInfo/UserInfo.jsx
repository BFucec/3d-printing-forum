import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthService from "../../services/AuthService";

const UserInfo = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const userInfo = useSelector((state) => state.user);
  const authHeader =
    "Basic " + btoa(userInfo.username + ":" + userInfo.password);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await AuthService.getUserInfo(authHeader);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto my-8 h-screen">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              FIRST NAME
            </th>
            <th scope="col" class="px-6 py-3">
              LAST NAME
            </th>
            <th scope="col" class="px-6 py-3">
              USERNAME
            </th>
            <th scope="col" class="px-6 py-3">
              E-MAIL
            </th>
            <th scope="col" class="px-6 py-3">
              ROLE
            </th>
          </tr>

          {!loading && (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-white">
              <td scope="col" class="px-6 py-3">
                {user.firstName}
              </td>
              <td scope="col" class="px-6 py-3">
                {user.lastName}
              </td>
              <td scope="col" class="px-6 py-3">
                {user.username}
              </td>
              <td scope="col" class="px-6 py-3">
                {user.email}
              </td>
              <td scope="col" class="px-6 py-3">
                {user.roles[0].name}
              </td>
            </tr>
          )}
        </thead>
      </table>
    </div>
  );
};

export default UserInfo;
