import ContactIcons from "../ContactIcons/ContactIcons";
import { IconContext } from "react-icons";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import css from "./ContactAddress.module.css";
import eclipse from "../../../Utilities/Images/Ellipse 796.svg";

// This component is responsible for rendering links (anchors on the address inforamation)
// The actual address is opened in new tab in your browser on GoogleMap

const ContactAddress = () => {
  return (
    <IconContext.Provider value={{ size: "24px" }}>
      <address className={css.container}>
        <ul className={css.list}>
          <li>
            <FiPhoneCall />
            <a href="tel:+10123456789">+1012 3456 789</a>
          </li>
          <li>
            <IoMdMail />
            <a href="mailto:demo@gmail.com">demo@gmail.com</a>
          </li>
          <li className={css.adress}>
            <FaMapMarkerAlt />
            <a
              href="https://goo.gl/maps/Kp1bHbGayHp8AUEa9"
              rel={"noreferrer"}
              target={"_blank"}
            >
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </a>
          </li>
        </ul>
        <svg
          className={css.smallIcon}
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27" cy="27" r="27" fill="#484848" fill-opacity=".5" />
        </svg>
        <svg
          className={css.largeIcon}
          width="80"
          height="102"
          viewBox="0 0 80 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="96" cy="96" r="96" fill="#1A1A1A" />
        </svg>

        <ContactIcons />
      </address>
    </IconContext.Provider>
  );
};

export default ContactAddress;
