import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import css from "./BurgerMenu.module.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuopen] = useState(false);

  const toggleMenu = () => {
    setIsMenuopen(!isMenuOpen);
  };

  console.log(isMenuOpen);

  return (
    <div className={css.container}>
      <IconContext.Provider value={{ size: "24px" }}>
        {!isMenuOpen ? (
          <GiHamburgerMenu onClick={toggleMenu} />
        ) : (
          <>
            <figure className={css.overlay}> </figure>
            <div className={css.menu}>
              <IconContext.Provider value={{ size: "24px", color: "#fff" }}>
                <div className={css.logoContainer}>
                  <p className={css.logo}>Logo here</p>
                  <AiOutlineClose onClick={toggleMenu} />
                </div>
                <div onClick={toggleMenu}>
                  <NavBar />
                </div>
              </IconContext.Provider>
            </div>
          </>
        )}
      </IconContext.Provider>
    </div>
  );
};

export default BurgerMenu;
