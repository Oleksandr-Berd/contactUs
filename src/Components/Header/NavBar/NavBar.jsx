import { HiOutlineUserCircle } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";

const navElements = [
  {
    href: "http://localhost:3000/home",
    text: "Home",
  },
  {
    href: "http://localhost:3000/features",
    text: "Features",
  },
  {
    href: "http://localhost:3000/blog",
    text: "Blog",
  },
  {
    href: "http://localhost:3000/shop",
    text: "Shop",
  },
  {
    href: "http://localhost:3000/about",
    text: "About",
  },
  {
    href: "http://localhost:3000/contact",
    text: "Contact",
  },
];

const NavBar = () => {
  return (
    <nav className={css.navbar}>
      {navElements.map(({ href, text }) => (
        <li key={href} className={css.item}>
          <NavLink to={href}>
            <p className={css.text}>{text}</p>
          </NavLink>
        </li>
      ))}
      <div className={css.icons}>
        <HiOutlineUserCircle />
        <SlBasket />
      </div>
    </nav>
  );
};

export default NavBar;
