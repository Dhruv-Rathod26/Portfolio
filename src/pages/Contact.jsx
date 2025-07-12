// Contact.jsx
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cl6k05g', 'template_ciahk33', form.current, 'W-0cdkM6oMkP3F5fb')
      .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          alert('Failed to send message. Please try again later.');
          console.error(error.text);
      });
  };

  return (
    <section data-aos="fade-up" className="bg-white p-4 rounded shadow-sm">
      <h2 className="fw-bold mb-4 text-center text-primary">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="user_name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="user_email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="phone" name="user_phone" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">Send Message</button>
        </div>
      </form>
    </section>
  );
}
