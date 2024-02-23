import { useState } from "react";

export default function ToolTip({ message, children }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute mt-2 p-2 bg-black text-white text-xs rounded">
          {message}
        </div>
      )}
    </div>
  );
}
