import { NavLink } from "react-router-dom";

const CompanyList = () => {
  return (
    <ul>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
      <NavLink to="blog">Blogs</NavLink>
    </ul>
  );
};

export default CompanyList;
