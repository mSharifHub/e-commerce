import { createPortal } from "react-dom";

export const reusePort = (children) => {
  const portalEl = document.getElementById("modal");

  return createPortal(children, portalEl);
};
