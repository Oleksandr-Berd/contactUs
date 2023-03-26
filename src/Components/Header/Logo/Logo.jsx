import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <NavLink to="logo" className={css.link}>
        <p className={css.logo}>Logo here</p>
      </NavLink>
    </div>
  );
};

export default Logo;
