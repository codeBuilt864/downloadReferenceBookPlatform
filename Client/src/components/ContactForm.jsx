import { useState } from "react";


const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key","");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());


    if (res.success) {
      setResult("Form Submitted Successfully");
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  
    return (
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Your Name" required />
          <input name="email" type="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <span>{result}</span>
      </div>
    );
  };

  export default ContactForm;
  