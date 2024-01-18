import { useEffect, useState } from "react";
import { iterateArr } from "../../../helpers/navigation_helpers/navigationHelper";
import AddOne from "./AddOne";
import AddThree from "./AddThree";
import AddTwo from "./AddTwo";

// this array holds the components and is accessed using the a state hook that iterates the index
const arr = [<AddOne />, <AddTwo />, <AddThree />];

export default function AddContainer() {
  // state hook iterates by increasing the index till the end of lenght and resets back to 0 using the prev state incremented by 1 module the length of arr
  const [currIndex, setcurrIndex] = useState(0);

  // state to display css animation transition
  const [swipe, setSwipe] = useState("showAdd");

  // use effect used to prevent multiple re-renders and only runs on component mount
  useEffect(() => {
    const interval = setInterval(() => {
      setSwipe("hideAdd");
      setTimeout(() => {
        setcurrIndex((prev) => (prev + 1) % arr.length);
        setSwipe("showAdd");
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-neutral-100 w-full h-full mt-2 flex justify-center items-center">
      <div className={`w-full ${swipe} `}>{iterateArr(arr, currIndex)}</div>
    </div>
  );
}
