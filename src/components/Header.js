import React from "react";
import header from "../assets/images/earthquake.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className="h-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex px-10 justify-between items-center">
      <img
        onClick={handleHomeClick}
        src={header}
        alt="header"
        className="w-16 cursor-pointer"
      />
    </div>
  );
}

export default Header;
