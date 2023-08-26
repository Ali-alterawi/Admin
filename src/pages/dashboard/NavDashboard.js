import React from "react";
import Icon from "@mdi/react";
import { mdiCash, mdiChairRolling, mdiChartBar, mdiToolboxOutline } from "@mdi/js";
import { mdiAccountMultipleOutline } from "@mdi/js";
import "./dashboard.css";
import axios from "axios";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const profileMenuItems = [
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ UserData }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = (label) => {
    setIsMenuOpen(false);

    if (label === "Sign Out") {
      localStorage.removeItem("token");
      window.location.href = "http://localhost:3000/";
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => {
                closeMenu(label);
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "@material-tailwind/html",
    description:
      "Learn how to use @material-tailwind/html, packed with rich components and widgets.",
  },
  {
    title: "@material-tailwind/react",
    description:
      "Learn how to use @material-tailwind/react, packed with rich components for React.",
  },
  {
    title: "Material Tailwind PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
];

function NavListMenuD() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="# " key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <></>
  );
}

// nav list component
const navListItems = [
  {
    label: "Statistics",
    icon: mdiChartBar,
    path: "/",
  },
  {
    label: "Clients list",
    icon: mdiAccountMultipleOutline,
    path: "/ListUser",
  },
  {
    label: "Offices List",
    icon: mdiChairRolling,
    path: "/ListOffice",
  },
  {
    label: "Orders",
    icon: mdiToolboxOutline,
    path: "/ListOrders",
  },
  {
    label: "Payments",
    icon: mdiCash,
    path: "/Payment",
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center bg-[#f4f7fe]">
      <NavListMenuD />
      {navListItems.map(({ label, icon, path }, key) => (
        <Link to={path}>
          <Typography
            key={label}
            as="a"
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              <Icon path={icon} size={1} />
              {label}
            </MenuItem>
          </Typography>
        </Link>
      ))}
    </ul>
  );
}

export default function ComplexNavbar({ userIdApp0 }) {
  console.log(userIdApp0);
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [UserData, setUserData] = React.useState(null);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  const fetchProtectedData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/User/${userIdApp0}`
      );

      setUserData(response.data[0]);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  useEffect(() => {
    fetchProtectedData();
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
  console.log(UserData);
  return (
    <Navbar className=" sticky top-0 z-10 mx-auto max-w-screen p-2 bg-white rounded-full lg:pl-6 h-14 DashboardNav">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Link to="/">
          <Typography
            as="a"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
          >
            ASAS
          </Typography>
        </Link>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <ProfileMenu UserData={UserData} />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
}
