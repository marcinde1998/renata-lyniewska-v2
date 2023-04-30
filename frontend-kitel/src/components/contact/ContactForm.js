function ContactForm() {
  return (
    <div>
      <form action="https://formspree.io/f/xoqzprwb" method="POST">

        <input type="text" name="username" placeholder="Imię"></input>
        <input type="email" name="mail" placeholder="e-mail"></input>

        <textarea maxlength="1000" name="message" placeholder="tekst"></textarea>
        <input type="submit" value={"Wyślij"}></input>
      </form>
    </div>
  );
}

export default ContactForm;