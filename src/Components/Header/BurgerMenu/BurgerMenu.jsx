import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import css from "./BurgerMenu.module.css";
import { useState } from "react";
import Logo from "../Home/Logo";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);

  return (
    <div className={css.container}>
      <IconContext.Provider value={{ size: "24px" }}>
        <Logo />
        {isMenuOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
      </IconContext.Provider>
    </div>
  );
};

export default BurgerMenu;
