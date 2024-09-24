import React from "react";

const Display = ({ value1, value2 }) => {
  return (
    <>
      <div className="bg-gray-900 p-3 border-none rounded-lg dark:bg-blue-500">
        <div className=" text-[1.5rem] flex justify-end text-white">
          {value1}
        </div>
        <div className=" text-[3rem] flex justify-end text-white">{value2}</div>
      </div>
    </>
  );
};

export default Display;
