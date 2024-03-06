import { Outlet } from "react-router-dom";
import Header from "../../header/Header";
import Nav from "../../navigation/Nav";

export default function MainLayout() {
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
