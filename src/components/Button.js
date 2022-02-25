import React from "react";

function Button({ title, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className="transition ease-in-out  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-24 h-10 rounded-md text-white"
    >
      {title}
    </button>
  );
}

export default Button;
