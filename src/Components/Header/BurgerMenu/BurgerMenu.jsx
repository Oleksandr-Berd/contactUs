import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  return (
    <div className={css.container}>
      <IconContext.Provider value={{ size: "24px" }}>
        <GiHamburgerMenu />
      </IconContext.Provider>
    </div>
  );
};

export default BurgerMenu;
