/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import AddOne from "./AddOne";
import AddThree from "./AddThree";
import AddTwo from "./AddTwo";

// this array holds the components and is accessed using the a state hook that iterates the index
const arr = [<AddOne />, <AddTwo />, <AddThree />];

const iterateArr = (array, index) => {
  return array[index];
};

export default function AddContainer() {
  // state hook iterates by increasing the index till the end of lenght and resets back to 0 using the prev state incremented by 1 module the length of arr
  const [currIndex, setcurrIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // state to display css animation transition
  const [swipe, setSwipe] = useState("showAdd");

  // use effect used to prevent multiple re-renders and only runs on component mount
  useEffect(() => {
    if (!isMouseOver) {
      const interval = setInterval(() => {
        setSwipe("hideAdd");
        setTimeout(() => {
          setcurrIndex((prev) => (prev + 1) % arr.length);
          setSwipe("showAdd");
        }, 1000);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isMouseOver]);

  const handleClickLeft = () => {
    setcurrIndex((prev) => (prev - 1 + arr.length) % arr.length);
  };

  const handleClickRight = () => {
    setcurrIndex((prev) => (prev + 1) % arr.length);
  };

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className="relative bg-neutral-100 w-full  p-1 flex justify-center items-center"
    >
      <div
        onClick={handleClickLeft}
        className={`absolute left-[15rem] transition-opacity duration-150 rounded-full w-8 h-8  flex justify-center items-center z-20 ${
          isMouseOver ? "opacity-100 cursor-pointer" : "opacity-0"
        } hover:bg-slate-200`}
      >
        <ArrowLeft />
      </div>
      <div className={`w-full ${swipe} `}>{iterateArr(arr, currIndex)}</div>
      <div
        onClick={handleClickRight}
        className={`absolute right-[15rem] transition-opacity duration-150 z-20 rounded-full w-8 h-8  flex justify-center items-center ${
          isMouseOver ? "opacity-100 cursor-pointer" : "opacity-0"
        } hover:bg-slate-200`}
      >
        <ArrowRight />
      </div>
    </div>
  );
}
