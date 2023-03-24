import { Outlet } from "react-router-dom";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <header>
      <Logo />
      <NavBar />
      <Outlet />
    </header>
  );
};

export default Header;
