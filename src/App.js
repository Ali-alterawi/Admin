import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./pages/Login";

// -----------------------Dashboard routes----------------//
import Sidebar from "./pages/dashboard/Sidebar";
import NavListMenuD from "./pages/dashboard/NavDashboard";
import MainDashboard from "./pages/dashboard/MainDashboard";
import UserInfo from "./components/dashboard/UserInfo";
import axios from "axios";
import ListOffice from "./components/dashboard/ListOffice";
import Orders from "./components/dashboard/Orders";
import Payment from "./components/dashboard/Payment";
import ContactUs from "./components/dashboard/ContactUs";

export default function App() {
  const [hideRouter1, setHideRouterUser] = useState(false);
  const [hideRouter2, setHideRouterAdmin] = useState(true);
  const [hideRouter3, setHideRouterProvider] = useState(true);
  const [userIdApp, setUserIdApp] = useState("");

  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await axios.get("http://localhost:8000/Verify_token", {
          headers: {
            Authorization: token,
          },
        });
        let x = [];
        setUserIdApp(response.data.user.id);
        // console.log(response.data.user);
        // console.log(response.data.user.id);
        if (response.data.user.role === 0) {
          x = [true, false, true];
        } else if (response.data.user.role === 2) {
          x = [true, true, false];
          console.log(x);
        } else {
          x = [false, true, true];
        }
        console.log(x);
        setHideRouterUser(x[1]);
        setHideRouterAdmin(x[3]);
        // updateRouts(x);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(false);
    }
  };

  useEffect(() => {
    if (localStorage.token != null) {
      fetchProtectedData();
    }
  }, []);

  // ----------------------user routes----------------- //

  const AppRouter1 = () => {
    return (
      <Router>
        <Routes>
          <Route index element={<LogIn />} />
          <Route path="LogIn" element={<LogIn />} />
        </Routes>
      </Router>
    );
  };

  // ----------------------dashboard routes----------------- //
  const AppRouter2 = () => {
    return (
      <Router>
        <Sidebar />
        <div style={{ width: "100%" }}>
          <NavListMenuD userIdApp0={userIdApp}/>
          <Routes>
            <Route index element={<MainDashboard />} />
             <Route path="ListUser" element={<UserInfo />} />
            <Route path="ListOffice" element={<ListOffice />} />
            <Route path="ListOrders" element={<Orders />} />
            <Route path="Payment" element={<Payment />} />
            <Route path="ContactUs" element={<ContactUs />} />

          </Routes>
        </div>
      </Router>
    );
  };

  return (
    <>
      {hideRouter1 ? null : (
        <>
          <AppRouter1 />
        </>
      )}

      {hideRouter2 ? null : (
        <>
          <div className="flex">
            <AppRouter2 />
          </div>
        </>
      )}
    </>
  );
}
