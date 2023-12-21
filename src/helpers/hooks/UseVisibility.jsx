import { useState } from "react";

export default function UseVisibility(initialState = true) {
  const [isVisible, setIsVisible] = useState(initialState);

  return [isVisible, setIsVisible];
}
