import css from "./ContactForm.module.css";

// The component which renders the form where user will be able to leave his message previosly filled his contact information

const ContactForm = () => {
  const handleChange = (evt) => {
    // if (evt.target.value === "") {
    //   evt.currentTarget.className = "";
    //   evt.target.className = "";
    // }

    evt.currentTarget.className = css.active;
    evt.target.className = css.active;
  };

  return (
    <form method="post" className={css.form}>
      <label onChange={handleChange} htmlFor="firstName">
        First Name
        <input type="text" name="firstName" />
      </label>

      <label onChange={handleChange} htmlFor="lastName">
        Last Name
        <input type="text" name="lastName" />
      </label>

      <label onChange={handleChange} htmlFor="email">
        Email
        <input type="email" name="email" />
      </label>

      <label onChange={handleChange} htmlFor="phoneNumber">
        Phone Number
        <input type="tel" name="phoneNumber" />
      </label>

      <h4>Select subject?</h4>
      <div className={css.gridContainer}>
        <label onChange={handleChange} htmlFor="generalInquary">
          <input type="checkbox" name="selectSubject" value="generalInquary" />
          General Inquary
        </label>
        <label onChange={handleChange} htmlFor="generalInquary2">
          <input type="checkbox" name="selectSubject" value="generalInquary2" />
          General Inquary
        </label>
        <label onChange={handleChange} htmlFor="generalInquary3">
          <input type="checkbox" name="selectSubject" value="generalInquary3" />
          General Inquary
        </label>
        <label onChange={handleChange} htmlFor="generalInquary4">
          <input type="checkbox" name="selectSubject" value="generalInquary4" />
          General Inquary
        </label>
      </div>

      <label id={css.labelTextarea} htmlFor="userMessage">
        Email
      </label>
      <textarea
        className={css.textarea}
        name="userMessage"
        placeholder="Write your message.."
      ></textarea>
      <button className={css.button} type="submit">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;
