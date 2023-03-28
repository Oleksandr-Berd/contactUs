import { Outlet } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "./Home/Logo";
import NavBar from "./NavBar/NavBar";
import css from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={css.header}>
        <Logo />
        <NavBar />
        <BurgerMenu />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
