import { SocialIcon } from "react-social-icons";
import css from "./ContactIcons.module.css";

// Creating the components which renders Soc links. Using the library react-social-icons.
// The third soc network from the left is not popular in Ukraine and I don't recognize it. I replaced it with LinkedIn

const ContactIcons = () => {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <SocialIcon
          className={css.icon}
          url="https://twitter.com/UaBerd"
          style={{ width: 36, height: 36 }}
          fgColor="#fff"
          bgColor="#262626"
        />
      </li>
      <li className={css.item}>
        <SocialIcon
          className={css.icon}
          url="https://www.instagram.com/berd__man/"
          style={{ width: 36, height: 36 }}
          fgColor="#fff"
          bgColor="#262626"
        />
      </li>
      <li className={css.item}>
        <SocialIcon
          className={css.icon}
          url="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/"
          style={{
            width: 36,
            height: 36,
          }}
          fgColor="#fff"
          bgColor="#262626"
        />
      </li>
    </ul>
  );
};

export default ContactIcons;
