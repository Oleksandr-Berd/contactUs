import { Outlet } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Logo from "./Home/Logo";
import NavBar from "./NavBar/NavBar";
import css from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={css.header}>
        <Logo />
        {windowWidth >= "1280" && <NavBar />}
        <BurgerMenu />
      </header>
      <Outlet />
    </>
  );
};

export default Header;
