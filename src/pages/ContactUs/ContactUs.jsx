import React, { useState } from 'react';
import './ContactUs.css';
import { toast } from 'react-toastify';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      access_key: "867f55ef-1fc1-4392-bcef-f9393fe940dd",  // 🔴 paste your Web3Forms key here
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully");
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } else {
      toast.error("Message failed");
    }
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form p-5 shadow-sm bg-white">
              <h2 className="text-center mb-4">Get in Touch</h2>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="firstName"
                      className="form-control custom-input"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="lastName"
                      className="form-control custom-input"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control custom-input"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control custom-input"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;