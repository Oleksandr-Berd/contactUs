import css from "./ContactTitle.module.css";

const ContactTitle = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Contact Us!</h1>
      <p className={css.text}>Any questions or remarks?</p>
      <p className={css.text}>Just write us a message!</p>
    </div>
  );
};

export default ContactTitle;
