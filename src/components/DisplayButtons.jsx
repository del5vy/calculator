import React from "react";
import Buttons from "./Buttons";

// const btnValues = [
//   [7, 8, 9, "/"],
//   [4, 5, 6, "x"],
//   [1, 2, 3, "-"],
//   [0, ".", "C", "+"],
//   ["="],
// ];

const DisplayButtons = ({
  btnValues,
  numClickHandler,
  commaClickHandler,
  equalsClickHandler,
  signClickHandler,
  resetClickHandler,
}) => {
  return (
    <>
      <div className="py-4 grid grid-cols-4 gap-4">
        {btnValues.flat().map((btn, i) => {
          return (
            <Buttons
              key={i}
              color={
                ["/", "x", "+", "-"].includes(btn)
                  ? "bg-transparent dark:text-blue-500 dark:font-bold"
                  : "bg-blue-500"
              }
              span={btn === "=" ? "col-span-4" : ""}
              //   className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            >
              {btn}
            </Buttons>
          );
        })}

        {/* <Buttons color="bg-blue-500">7</Buttons>
        <Buttons color="bg-blue-500">8</Buttons>
        <Buttons color="bg-blue-500">9</Buttons>
        <Buttons color="bg-transparent">/</Buttons>
        <Buttons color="bg-blue-500">4</Buttons>
        <Buttons color="bg-blue-500">5</Buttons>
        <Buttons color="bg-blue-500">6</Buttons>
        <Buttons color="bg-transparent">*</Buttons>
        <Buttons color="bg-blue-500">1</Buttons>
        <Buttons color="bg-blue-500">2</Buttons>
        <Buttons color="bg-blue-500">3</Buttons>
        <Buttons color="bg-transparent">-</Buttons>
        <Buttons color="bg-blue-500">0</Buttons>
        <Buttons color="bg-blue-500">.</Buttons>
        <Buttons color="bg-blue-500">C</Buttons>
        <Buttons color="bg-transparent">+</Buttons>
        <div className="col-span-4">
          <Buttons color="bg-blue-500">=</Buttons>
        </div> */}

        {/* <Buttons color="bg-blue-500" />
        <Buttons color="bg-blue-500" />
        <Buttons color="bg-blue-500" /> */}
      </div>
    </>
  );
};

export default DisplayButtons;
