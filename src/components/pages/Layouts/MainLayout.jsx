import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Nav from "../../navigation/Nav";
import { UseModal } from "../../../providers/contexts/ModalOpenContext";

export default function MainLayout() {
  const { isModalOpen } = UseModal();

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isModalOpen) {
      rootElement.classList.add("screen-blur");
    } else {
      rootElement.classList.remove("screen-blur");
    }
  }, [isModalOpen]);

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}
