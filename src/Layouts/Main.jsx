import { Outlet } from "react-router-dom";
import Nav from "../Pages/Shared/Navbar/Nav";

function Main() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Main;
