import { SocialIcon } from "react-social-icons";

// Creating the components which renders Soc links. Using the library react-social-icons.
// The third soc network from the left is not popular in Ukraine and I don't recognize it. I replaced it with LinkedIn

const ContactIcons = () => {
  return (
    <ul>
      <li>
        <SocialIcon
          url="https://twitter.com/UaBerd"
          style={{ width: 36, height: 36 }}
          fgColor="#fff"
        />
      </li>
      <li>
        <SocialIcon
          url="https://www.instagram.com/berd__man/"
          style={{ width: 36, height: 36 }}
          fgColor="#fff"
        />
      </li>
      <li>
        <SocialIcon
          url="https://www.linkedin.com/in/oleksandr-berdychevskyi-83336761/"
          style={{ width: 36, height: 36 }}
          fgColor="#fff"
        />
      </li>
    </ul>
  );
};

export default ContactIcons;
