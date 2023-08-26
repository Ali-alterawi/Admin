import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccountMultipleOutline,
  mdiCashRegister,
  mdiChairRolling,
  mdiAccountGroup,
  mdiNotebookEditOutline,
  mdiToolboxOutline,
} from "@mdi/js";
import axios  from "axios";

const Statistics = () => {

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalOffice, setTotalOffice] = useState(0);
  const [totalOrder, setTotalOrder] = useState(0);
  const [Visa, setVisa] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/TotalUserNumber')
      .then((response) => {
        setTotalUsers(response.data.totalUsers);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:8000/TotalOfficeNumber')
      .then((response) => {
        setTotalOffice(response.data.totalOffice);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get('http://localhost:8000/TotalOrderNumber')
      .then((response) => {
        setTotalOrder(response.data.totalOrder);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/TotalIncome")
      .then((response) => {
        setVisa(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const totalPrice = Visa.reduce((sum, item) => {
    const priceString = item.price;
    const priceMatch = priceString.match(/\d+/); // Extract numeric characters
    const priceValue = priceMatch ? parseInt(priceMatch[0]) : 0; // Convert to integer (or fallback to 0)
    return sum + priceValue;
  }, 0);

  return (
    <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6 p-10">
      <div className="!z-5 relative flex  rounded-[20px] bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700 ">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiCashRegister}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Total Income{" "}
          </p>
          <h4 className="text-xl font-bold text-[#ffffff] dark:text-white">
          {totalPrice}
          {console.log(totalPrice)}
          <span className="text-[#ffffff]">  JOD</span>
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiAccountMultipleOutline}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Total Users</p>
          <h4 className="text-xl font-bold text-[#ffffff] dark:text-white">
          {totalUsers}
          
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiAccountGroup}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Total Clients
          </p>
          <h4 className="text-xl font-bold text-[#ffffff] dark:text-white">
            {totalOffice+totalUsers}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiChairRolling}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Engineering Offices
          </p>
          <h4 className="text-xl font-bold text-[#feffff] dark:text-white">
          {totalOffice}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiNotebookEditOutline}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">Total orders</p>
          <h4 className="text-xl font-bold text-[#ffffff] dark:text-white">
           {totalOrder}
          </h4>
        </div>
      </div>
      <div className="!z-5 relative flex  bg-[#064080] bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none !flex-row flex-grow items-center rounded-[20px] ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-[#f4f7fe] p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <Icon
                className="text-[#064080]"
                path={mdiToolboxOutline}
                size={1}
              />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <p className="font-dm text-sm font-medium text-white">
            Total Services
          </p>
          <h4 className="text-xl font-bold text-[#ffffff] dark:text-white">
            3
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
