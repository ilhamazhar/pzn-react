import { useImmer } from "use-immer";

const initialContact = {
  name: "",
  message: "",
};

const ContactForm = () => {
  const [contact, setContact] = useImmer(initialContact);

  function handleNameChange(e) {
    setContact((contact) => {
      contact.name = e.target.value;
    });
  }

  function handleMessageChange(e) {
    setContact((contact) => {
      contact.message = e.target.value;
    });
  }

  return (
    <>
      <h2>Contact Form</h2>
      <form action="">
        <input
          type="text"
          placeholder="Name"
          value={contact.name}
          onChange={handleNameChange}
        />
        <br />
        <textarea
          placeholder="Message"
          value={contact.message}
          onChange={handleMessageChange}
        ></textarea>
      </form>
      <h3>Contact Detail</h3>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </>
  );
};

export default ContactForm;
