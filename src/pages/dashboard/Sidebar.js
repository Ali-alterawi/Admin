import React from "react";
import Icon from "@mdi/react";
import { mdiCash,mdiChairRolling,mdiAccountMultipleOutline, mdiToolboxOutline, mdiBug, mdiMessageProcessingOutline } from "@mdi/js";
import axios from "axios";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Sidebar() {
  function handleLogOut() {
    Swal.fire({
      title: ` logout?  `,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`  done `, "", "success");

        localStorage.setItem("SignStatus", "signUp");
        localStorage.removeItem("token");
        localStorage.removeItem("roles");
        window.location.href = "http://localhost:3000/";
      } else Swal.fire(" Cancelled", "", "error");
    });
  }

  return (
    <Card className=" min-h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-white-900  Sidebar bg-white sideBarDash">
      <div className="mb-2 p-4">
        <Typography className="text-black">
          <p className="text-2xl">ASAS</p>
        </Typography>
      </div>
      <List>
        <Link to="/">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link className="hover:text-white" > Statistics </Link>
          </ListItem>
        </Link>

        <Link to="/ListUser">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <Icon path={mdiAccountMultipleOutline} size={1} />
            </ListItemPrefix>
            <Link className="hover:text-white" > Users list </Link>
          </ListItem>
        </Link>

        <Link to="/ListOffice">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <Icon path={mdiChairRolling} size={1} />
            </ListItemPrefix>
            <Link className="hover:text-white"> Offices List </Link>
          </ListItem>
        </Link>


        <Link to="/ListOrders">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <Icon path={mdiToolboxOutline} size={1} />
            </ListItemPrefix>
            <div className="flex justify-between w-full">
              <p className="hover:text-white">Orders</p>
            </div>
          </ListItem>
        </Link>

        <Link to="/Payment">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <Icon path={mdiCash} size={1} />
            </ListItemPrefix>
            <Link className="hover:text-white" > Payments </Link>
          </ListItem>
        </Link>
        <Link to="/ContactUs">
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
            <Icon path={mdiMessageProcessingOutline} size={1} />
            </ListItemPrefix>
            <Link className="hover:text-white" > ContactUs </Link>
          </ListItem>
        </Link>

        <button onClick={handleLogOut}>
          <ListItem className="hover:bg-[#064080] hover:text-white">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link className="hover:text-white"> Log Out </Link>
          </ListItem>
        </button>
      </List>
    </Card>
  );
}
