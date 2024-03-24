import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Nav from "../../navigation/Nav";
import { useModal } from "../../../providers/contexts/modalContext";

export default function MainLayout() {
  const { state } = useModal();

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    const root = document.getElementById("root");

    root.classList.remove("animate-blur_screen");
    mainContent.classList.remove("animate-blur_screen");

    if (state.isOpen) {
      if (state.type === "fullScreen") {
        root.classList.add("animate-blur_screen");
      } else if (state.type === "main-content") {
        mainContent.classList.add("animate-blur_screen");
      }
    }
  }, [state.isOpen, state.type]);

  return (
    <>
      <Header />
      <Nav />
      <main id="main-content">
        <Outlet />
      </main>
    </>
  );
}
