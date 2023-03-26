import ContactAddress from "../ContactAddress/ContactAddress";
import css from "./ContactInformation.module.css";

const ContactInformation = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact Information</h2>
      <p className={css.text}>Say something to start a live chat!</p>
      <ContactAddress />
    </div>
  );
};

export default ContactInformation;
