// The component which renders the form where user will be able to leave his message previosly filled his contact information

const ContactForm = () => {
  return (
    <form method="post">
      <label htmlFor="firstName">First Name</label>
      <input type="text" name="firstName" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" name="lastName" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" />

      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="tel" name="phoneNumber" />

      <label htmlFor="selectSubject">Select Subject?</label>

      <input type="checkbox" name="selectSubject" value="generalInquary" />
      <label htmlFor="generalInquary">General Inquary</label>

      <input type="checkbox" name="selectSubject" value="generalInquary2" />
      <label htmlFor="generalInquary2">General Inquary</label>

      <input type="checkbox" name="selectSubject" value="generalInquary3" />
      <label htmlFor="generalInquary3">General Inquary</label>

      <input type="checkbox" name="selectSubject" value="generalInquary4" />
      <label htmlFor="generalInquary4">General Inquary</label>

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
