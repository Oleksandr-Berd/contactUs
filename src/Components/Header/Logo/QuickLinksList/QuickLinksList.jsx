import { NavLink } from "react-router-dom";

const QuickLinksList = () => {
  return (
    <ul>
      <li>
        <NavLink to="techlabz">Techlabz Keybox</NavLink>
      </li>
      <li>
        <NavLink to="downloads">Downloads</NavLink>
      </li>
      <li>
        <NavLink to="forum">Forum</NavLink>
      </li>
    </ul>
  );
};

export default QuickLinksList;
