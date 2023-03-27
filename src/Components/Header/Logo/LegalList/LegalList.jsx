import { NavLink } from "react-router-dom";

const LegalList = () => {
  return (
    <ul>
      <li>
        <NavLink to="privacy">Privacy Policy</NavLink>
      </li>
      <li>
        <NavLink to="termsser">Terms & Services</NavLink>
      </li>
      <li>
        <NavLink to="termsuse">Terms of use</NavLink>
      </li>
      <li>
        <NavLink to="refundpolicy">Refund Policy</NavLink>
      </li>
    </ul>
  );
};

export default LegalList;
