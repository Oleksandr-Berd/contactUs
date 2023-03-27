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
          General Inquary
          <input type="checkbox" name="selectSubject" value="generalInquary" />
        </label>
        <label onChange={handleChange} htmlFor="generalInquary2">
          General Inquary
          <input type="checkbox" name="selectSubject" value="generalInquary2" />
        </label>
        <label onChange={handleChange} htmlFor="generalInquary3">
          General Inquary{" "}
          <input type="checkbox" name="selectSubject" value="generalInquary3" />
        </label>
        <label onChange={handleChange} htmlFor="generalInquary4">
          General Inquary{" "}
          <input type="checkbox" name="selectSubject" value="generalInquary4" />
        </label>
      </div>

      <label htmlFor="userMessage">Email</label>
      <textarea
        name="userMessage"
        placeholder="Write your message.."
      ></textarea>
      <button type="submit">Send message</button>
    </form>
  );
};

export default ContactForm;
