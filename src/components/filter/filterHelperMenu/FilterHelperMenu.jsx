/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { useState } from "react";

export default function FilterHelperMenu({ label, Component }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const toogle = () => {
    setIsMouseOver((prev) => !prev);
  };

  return (
    <>
      <div
        onMouseOver={toogle}
        onMouseOut={toogle}
        className="inline-flex py-1 px-4  font-thin cursor-pointer border-b border-transparent hover:border-black"
      >
        {label}
      </div>
      {isMouseOver && Component}
    </>
  );
}
