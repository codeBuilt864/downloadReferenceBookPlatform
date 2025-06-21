import React from 'react';
import '../css/Contact.css';
// import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    
    // Simple client-side validation
    const name = formData.get("name");
    const stream = formData.get("Stream");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !stream || !email || !message) {
      alert("Please fill all the details.");
      return;
    }

    formData.append("access_key", "26218dfe-18db-4abf-b6fd-53b929188378");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={theme_pattern} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>Send your details to be added as a student to download all the reference books</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>codecrushes@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>0757332727</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Rajarata University of Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder='Enter Your Name' />

          <label htmlFor="Stream">Your Stream</label>
          <input type="text" name="Stream" placeholder='Enter Your Stream' />

          <label htmlFor="year">Study Year</label>
          <select name="year" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder='Enter Your Email' />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>

          <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
