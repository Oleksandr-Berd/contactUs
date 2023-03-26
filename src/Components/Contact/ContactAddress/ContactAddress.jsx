import ContactIcons from "../ContactIcons/ContactIcons";
import { IconContext } from "react-icons";
import { IoMdMail } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import css from "./ContactAddress.module.css";

// This component is responsible for rendering links (anchors on the address inforamation)
// The actual address is opened in new tab in your browser on GoogleMap

const ContactAddress = () => {
  return (
    <IconContext.Provider value={{ size: "24px" }}>
      <address>
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
        <ContactIcons />
      </address>
    </IconContext.Provider>
  );
};

export default ContactAddress;
