import { mdiDelete, mdiHumanEdit } from "@mdi/js";
import Icon from "@mdi/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Payment = () => {
  const [Payment, setPayment] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    // Fetch user data from the server
    axios
      .get("http://localhost:8000/PaymentAdmin")
      .then((response) => {
        setPayment(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  }, []);
  return (
    <div>
      <>
        <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
          <div className="relative flex items-center justify-between pt-4">
            <div className="text-xl font-bold text-navy-700 dark:text-white">
              Payment List
            </div>
          </div>
          <form>
          <div className="relative mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by orderID"
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
                    <p className="text-xs tracking-wide text-gray-600">
                      cardholderName
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
                      cardNumber
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
                    className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                    style={{ cursor: "pointer" }}
                  >
                    <p className="text-xs tracking-wide text-gray-600">
                      orderID
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {Payment.filter((user) =>
                user.orderID.toLowerCase().includes(searchValue.toLowerCase())
              ).map((user) => (
                  <tr key={user._id} role="row">
                    <td>{user.cardholderName}</td>
                    <td>{user.cardNumber}</td>
                    <td>{user.price}</td>
                    <td>{user.orderID}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex w-full justify-center mt-5">
              {/* {
              <Pagination
                count={totalPagesUsers}
                page={currentPageUsers}
                onChange={handlePageChangeUsers}
              />
            } */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Payment;
