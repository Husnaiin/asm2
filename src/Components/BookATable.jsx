import React, { useState } from 'react';
import '../styles/BookATable.css'; 


const BookATable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <section id="book-a-table" className="book-a-table section">
      <div className="container section-title" data-aos="fade-up">
        <h2>RESERVATION</h2>
        <p>Book a Table</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="date"
                name="date"
                className="form-control"
                placeholder="Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="time"
                name="time"
                className="form-control"
                placeholder="Time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <input
                type="number"
                name="people"
                className="form-control"
                placeholder="# of people"
                value={formData.people}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="text-center mt-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookATable;
