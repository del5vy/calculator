import React from "react";

const Buttons = ({ children, color, span, onClick }) => {
  return (
    <div
      className={`w-full h-9 ${color} text-white  ${span}  rounded-lg flex justify-center items-center`}
    >
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Buttons;
