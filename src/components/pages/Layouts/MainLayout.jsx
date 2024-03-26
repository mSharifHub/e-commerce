import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Nav from "../../navigation/Nav";
import { useModal } from "../../../providers/contexts/modalContext";
import AddContainer from "../../navigation/addComponent/AddContainer";

export default function MainLayout() {
  const [isOverHeadNav, setIsOverHeadNav] = useState(false);
  const { state } = useModal();

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const navTopPosition = document.getElementById("nav-helper").offsetTop;
    setIsOverHeadNav(scrollTop >= navTopPosition && scrollTop !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mainContent = document.getElementById("main-content");
    const overlay = document.getElementById("overlay");

    overlay.classList.remove("animate-blur_screen");
    mainContent.classList.remove("animate-blur_screen");

    if (state.isOpen) {
      if (state.type === "fullScreen") {
        overlay.classList.add("animate-blur_screen");
      } else if (state.type === "main-content") {
        mainContent.classList.add("animate-blur_screen");
      }
    }
  }, [state.isOpen, state.type]);

  return (
    <div id="overlay">
      <div
        id="nav-helper"
        className={`transition-all duration-300 ease-out  ${
          isOverHeadNav
            ? "transform -translate-y-full"
            : "transform translate-y-0"
        }`}
      >
        <Header />
        <Nav />
      </div>
      <div>
        <AddContainer />
      </div>

      <main id="main-content">
        <Outlet />
      </main>
    </div>
  );
}
