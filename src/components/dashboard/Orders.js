import Icon from "@mdi/react";
import { mdiDelete, mdiDotsHorizontalCircle, mdiHumanEdit } from "@mdi/js";
import { mdiFileEdit } from "@mdi/js";
import Pagination from "@mui/material/Pagination";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal } from "@mui/material";
import { ModelCustom } from "./ModelCustom";

const Orders = () => {
  const [Orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    // Fetch user data from the server
    axios
      .get("http://localhost:8000/AllordersAdmin")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(50vh)]   ">
        <div className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Orders
          </div>
        </div>

        <form>
          <div className="relative mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by id"
              required=""
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </form>

        <div className="mt-8 overflow-x-scroll xl:overflow-hidden ">
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
                  <p className="text-xs tracking-wide text-gray-600">id</p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Applicant's Name
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
                    Office Name
                  </p>
                </th>
                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">price</p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-10 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    Payment status
                  </p>
                </th>

                <th
                  colSpan={1}
                  role="columnheader"
                  title="Toggle SortBy"
                  className="border-b border-gray-200 pr-5 pb-[10px] text-start dark:!border-navy-700"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xs tracking-wide text-gray-600">
                    view more
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {Orders.filter((Order) =>
                Order._id.toLowerCase().includes(searchValue.toLowerCase())
              ).map((Order) => (
                <tr key={Order._id} role="row">
                  <td>{Order._id}</td>
                  <td>{Order.applicantName}</td>
                  <td>{Order.serviceProvider}</td>
                  <td>{Order.number}</td>
                  <td>{Order.payment}</td>
                  <td
                    style={{ cursor: "pointer" }}
                    className="hover:text-blue-500"
                  >
                    <ModelCustom order={Order}/>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex w-full justify-center mt-5">{}</div>
        </div>
      </div>
    </>
  );
};

export default Orders;
