import React, { useEffect } from "react";
import Display from "./Display";
import { useState } from "react";
import DisplayButtons from "./DisplayButtons";
import ModeSwitch from "./ModeSwitch";

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const btnValues = [
  [7, 8, 9, "/"],
  [4, 5, 6, "x"],
  [1, 2, 3, "-"],
  [0, ".", "C", "+"],
  ["="],
];

const Calculator = () => {
  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });

  const [isSoundOn, setSoundOn] = useState(false);

  // useEffect(() => {
  //   const isDarkMode = localStorage.getItem("isDarkMode");
  //   if (isDarkMode === true) {
  //     window.document.documentElement.classList.add("light");
  //   }
  // }, []);

  const handleSoundToggle = () => {
    setSoundOn(!isSoundOn);
    if (isSoundOn) {
      window.document.documentElement.classList.toggle("dark");
    }

    // if (window.document.documentElement.classList.contains("dark")) {
    //   localStorage.setItem("isDarkMode", "true");
    // }

    // toggleMode();
  };

  // const toggleMode = () => {
  //   window.document.documentElement.classList.toggle("dark");
  //   if (window.document.documentElement.classList.contains("dark")) {
  //     localStorage.setItem("isDarkMode", "true");
  //   }
  // };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  };

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  return (
    <>
      <div className="h-[72vh] w-[30%] shadow-lg bg-black p-2      dark:bg-light dark:border dark:border-blue-500 ">
        <div className="">
          <Display
            // calc={calc}
            value1={calc.num ? calc.num : calc.res}
            value2={calc.res}
          />
          <div className="pt-3">
            <ModeSwitch
              handleSoundToggle={handleSoundToggle}
              isSoundOn={isSoundOn}
              // onClick={toggleMode}
            />
          </div>

          <DisplayButtons
            btnValues={btnValues}
            numClickHandler={numClickHandler}
            commaClickHandler={commaClickHandler}
            equalsClickHandler={equalsClickHandler}
            signClickHandler={signClickHandler}
            resetClickHandler={resetClickHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Calculator;
