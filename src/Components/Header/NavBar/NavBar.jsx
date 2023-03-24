import { Link } from "react-router-dom";

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
    <nav>
      {navElements.map(({ href, text }) => (
        <Link to={href} key={href}>
          <p>{text}</p>
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
