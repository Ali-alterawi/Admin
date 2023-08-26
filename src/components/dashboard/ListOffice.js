import Icon from "@mdi/react";
import {
  mdiFileEdit,
  mdiDelete,
  mdiCheckCircle,
  mdiClockOutline,
  mdiHumanEdit,
  mdiAccountAlert,
} from "@mdi/js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
// import Pagination from "@mui/material/Pagination";

const ListOffice = () => {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    // Fetch user data from the server
    axios
      .get("http://localhost:8000/AllOffices")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  }, []);

  const handleDeleteClick = async (userId, isDelete) => {
    try {
      const response = await axios.put(`http://localhost:8000/updateUserStatus/${userId}`, {
        is_delete: !isDelete,
      });
      if (response.status === 200) {
        // Update the user's data in the component's state
        setUsers((prevUsers) => {
          return prevUsers.map((user) =>
            user._id === userId ? { ...user, is_delete: !isDelete } : user
          );
        });
        
        // Show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "User status updated successfully!",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    } catch (error) {
      console.error(error);
      // Show error SweetAlert
      Swal.fire({
        icon: "error",
        title: "Error updating user status",
        text: "An error occurred while updating the user status.",
      });
    }
  };
  const handleActiveClick = async (userId, isActive) => {
    try {
      const response = await axios.put(`http://localhost:8000/updateUserActive/${userId}`, {
        isActive: !isActive,
      });
      if (response.status === 200) {
        // Update the user's data in the component's state
        setUsers((prevUsers) => {
          return prevUsers.map((user) =>
            user._id === userId ? { ...user, isActive: !isActive } : user
          );
        });
        
        // Show success SweetAlert
        Swal.fire({
          icon: "success",
          title: "User activate updated successfully!",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    } catch (error) {
      console.error(error);
      // Show error SweetAlert
      Swal.fire({
        icon: "error",
        title: "Error updating user activate",
        text: "An error occurred while updating the user activate.",
      });
    }
  };

  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)] ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Offices Lists
          </div>
        </div>

        <form>
          <div className="relative">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </form>

        <div className="mt-8 overflow-x-scroll xl:overflow-hidden">
          <table role="table" className="w-full">
            <thead>
              <tr role="row">
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">NAME</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">EMAIL</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">PHONE</p>
                </th>
                
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">service</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Is active
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Is deleted
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">Active</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">DELETE</p>
                </th>

                
              </tr>
            </thead>
            <tbody>
              {users
                .filter((user) =>
                  user.userName
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )
                .map((user) => (
                  <tr key={user._id} role="row">
                    <td>{user.userName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.service}</td>
                    <td
                      style={{
                        color: user.isActive ? "green" : "red",
                      }}
                      className="text-xl"
                    >
                      {user.isActive ? "true" : "false"}
                    </td>
                    <td
                      style={{
                        color: user.is_delete ? "green" : "red",
                      }}
                      className="text-xl"
                    >
                      {user.is_delete ? "true" : "false"}
                    </td>
                    <td>
                      
                      <Icon
                        style={{ cursor: "pointer" }}
                        className="hover:text-blue-500"
                        path={mdiAccountAlert}
                        size={1}
                        onClick={() => handleActiveClick(user._id, user.isActive)}
                      />
                    </td>
                    <td>
                      <Icon
                    style={{ cursor: "pointer" }}
                    className="hover:text-blue-500"
                    path={mdiDelete}
                    size={1}
                    onClick={() => handleDeleteClick(user._id, user.is_delete)}
                  />
                    </td>
                  </tr>
                  
                ))}
            </tbody>
          </table>

          <div className="flex w-full justify-center mt-5">
            {
              // <Pagination
              //   count={totalPagesRestaurants}
              //   page={currentPageRestaurants}
              //   onChange={handlePageChangeRestaurants}
              // />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ListOffice;
