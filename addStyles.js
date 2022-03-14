"use strict";

// BODY
const bodyClass = "bg-sky-700 bg-gradient-to-br from-blue-600 bg-opacity-50";
const body = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => body.classList.add(cls));

// CALCULATOR BODY
const calcBodyClass =
  "max-w-lg rounded overflow-hidden shadow-2xl bg-fuchsia-600 bg-opacity-75 bg-gradient-to-tl from-neutral-700 flex";
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

//OUTPUT
const outputClass =
  "flex flex-col w-3/4 h-12 overflow-hidden justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const output = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => output.classList.add(cls));

// PREVIOUS NUMBER
const previousNumberClass =
  "flex overflow-hidden max-w-lg h-1/3 pb-2 pt-1 text-gray-600 text-xs";
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass
  .split(" ")
  .forEach((cls) => previousNumber.classList.add(cls));

// CURRENT NUMBER
const currentNumberClass = "flex overflow-hidden max-w-lg h-2/3 pb-2 text-xl";
const currentNumber = document.querySelector(".currentNumber");
currentNumberClass
  .split(" ")
  .forEach((cls) => currentNumber.classList.add(cls));

// BUTTONS
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => addClasses(btn));

function addClasses(button) {
  const btnNumberClass = "hover:bg-indigo-500 border-indigo-500";
  const btnClearClass = "hover:bg-red-500 border-red-500";
  const btnOptClass = "hover:bg-orange-500 border-orange-500";
  const btnEqClass = "hover:bg-green-500 border-green-500";
  const btnDecClass = "hover:bg-yellow-500 border-yellow-500";

  if (button.classList.value === "number") {
    btnNumberClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "clear") {
    btnClearClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "operator") {
    btnOptClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "equal") {
    btnEqClass.split(" ").forEach((cls) => button.classList.add(cls));
  } else if (button.classList.value === "decimal") {
    btnDecClass.split(" ").forEach((cls) => button.classList.add(cls));
  }

  const baseClass =
    "flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2xl";
  baseClass.split(" ").forEach((cls) => button.classList.add(cls));
}
