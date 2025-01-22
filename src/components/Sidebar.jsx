// src/components/Sidebar.js
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [showMarker, setShowMarker] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="left-part w-[20%] border-r-2">
      <div className="h-[20%] py-1 border flex">
        <div>
          <img
            className="object-none"
            src="/LeftColumn/Logo.png"
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-3 py-2 pl-3">
          <h1 className="font-semibold text-2xl">Welcome, Aryans</h1>
          <h1 className="text-gray-600">Mon, 20 Jan 2025</h1>
        </div>
      </div>

      <div className="flex flex-col gap-10 text-xl pl-7 my-32">
        <Link
          to="/dashboard"
          className="flex gap-4 hover:cursor-pointer hover:text-black text-gray-500"
        >
          <img src="/LeftColumn/ic_round-dashboard.png" alt="" />
          <h1>Dashboard</h1>
        </Link>

        <Link
          to="/User"
          className="flex gap-4 hover:cursor-pointer hover:text-black text-gray-500"
        >
          <img src="/LeftColumn/User (2).png" alt="" />
          <h1>User</h1>
        </Link>

        <Link
          to="/property"
          className="flex gap-4 hover:cursor-pointer hover:text-black text-gray-500"
        >
          <img src="/LeftColumn/House (1).png" alt="" />
          <h1>Property</h1>
        </Link>

        <Link
          to="/User"
          className="flex gap-4 hover:cursor-pointer hover:text-black text-gray-500"
        >
          <img src="/LeftColumn/accountant 1 (1).png" alt="" />
          <h1>User</h1>
        </Link>

        <div
          className="hover:cursor-pointer hover:text-black text-gray-500 relative"
          onClick={handleClick}
          
        >
          <div className="flex gap-4">
            <img
              className="object-none"
              src={
                isOpened
                  ? "/LeftColumn/icon (1).png"
                  : "/LeftColumn/Settings.png"
              }
              alt=""
            />
            <h1>Settings</h1>
            <img
              className="object-none absolute right-5 top-3"
              src={
                isOpened
                  ? "/LeftColumn/Opened.png"
                  : "/LeftColumn/Closed.png"
              }
              alt=""
            />
          </div>
          {(isOpened) && (
            <>
              <Link to="/settings/access"><div className="pl-10 my-3 hover:text-blue-700">Access</div></Link>
              <Link to="/settings/addfield"><div className="pl-10 hover:text-blue-700">Input Field</div></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
