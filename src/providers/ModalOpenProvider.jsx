import { useMemo, useState } from "react";
import { ModalContext } from "./contexts/ModalOpenContext";

export function ModalOpenProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={useMemo(() => ({ isModalOpen, setIsModalOpen }), [isModalOpen])}
    >
      {children}
    </ModalContext.Provider>
  );
}
