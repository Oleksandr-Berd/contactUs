import ContactForm from "../../Components/Contact/ContactForm/ContactForm";
import ContactInformation from "../../Components/Contact/ContactInformation/ContactInformation";
import ContactTitle from "../../Components/Contact/ContactTitle/ContactTitle";
import Header from "../../Components/Header/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <ContactTitle />
      <ContactInformation />
      <ContactForm />
    </>
  );
};

export default ContactPage;
