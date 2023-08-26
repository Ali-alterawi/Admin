import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";

const ContactUs = () => {

    const [Messages, setMessages] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
      // Fetch user data from the server
      axios
        .get("http://localhost:8000/allMessages")
        .then((response) => {
          setMessages(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
    return (
      <div>
        <>
          <div className="bg-[#ffffff] mr-5 ml-5 p-10 rounded-2xl min-h-[calc(100vh)]   ">
            <div className="relative flex items-center justify-between pt-4">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
              Messages List
              </div>
            </div>
            <form>
            <div className="relative mt-5">
              <input
                type="text"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search by name"
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
                        Name
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
                        E-mail
                      </p>
                    </th>
                    <th
                      colSpan={1}
                      role="columnheader"
                      title="Toggle SortBy"
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="text-xs tracking-wide text-gray-600">Message</p>
                    </th>
                    <th
                      colSpan={1}
                      role="columnheader"
                      title="Toggle SortBy"
                      className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
                      style={{ cursor: "pointer" }}
                    >
                      <p className="text-xs tracking-wide text-gray-600">
                        Date
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Messages.filter((message) =>
                  message.name.toLowerCase().includes(searchValue.toLowerCase())
                ).map((message) => (
                    <tr key={message.name} role="row">
                      <td>{message.name}</td>
                      <td>{message.email}</td>
                      <td>{message.message}</td>
                      <td>{message.createdAt}</td>
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
}

export default ContactUs