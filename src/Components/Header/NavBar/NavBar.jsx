import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const navElements = [
  {
    href: "home",
    text: "Home",
  },
  {
    href: "features",
    text: "Features",
  },
  {
    href: "blog",
    text: "Blog",
  },
  {
    href: "shop",
    text: "Shop",
  },
  {
    href: "about",
    text: "About",
  },
  {
    href: "contact",
    text: "Contact",
  },
];

const NavBar = () => {
  return (
    <nav className={css.navbar}>
      {navElements.map(({ href, text }) => (
        <Link to={href} key={href} className={css.item}>
          <p className={css.text}>{text}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
