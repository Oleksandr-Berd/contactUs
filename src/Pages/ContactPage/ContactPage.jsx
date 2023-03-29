import css from "./ContactPage.module.css";

import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import ContactInformation from "../../Components/Contact/ContactInformation/ContactInformation";
import ContactTitle from "../../Components/Contact/ContactTitle/ContactTitle";
import Header from "../../Components/Header/Header";

const ContactPage = () => {
  return (
    <div className={css.containerContactPage}>
      <Header />
      <ContactTitle />
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
