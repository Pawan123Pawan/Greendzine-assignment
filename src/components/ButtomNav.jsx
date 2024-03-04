import React from "react";
import { HiHome } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";

function BottomNav() {
  const location = useLocation()

  return (
    <div className="flex w-full md:mx-auto fixed bottom-0 items-center overflow-hidden navbar rounded-full">
      <Link
        to="/home"
        className={`btn ${location.pathname === "/home" && "buttonhover"}`}
      >
        <HiHome />
      </Link>
      <Link to="/user" className={`btn ${location.pathname === "/user" && "buttonhover"}`}>
        <FaUser />
      </Link>
    </div>
  );
}

export default BottomNav;
