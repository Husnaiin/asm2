import React from 'react';
import '../styles/Hero.css';
import heroBg from '../assets/img/hero-bg.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const MainComponent = () => {
  return (
    <main className="main">
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        <img src={heroBg} alt="Hero Background" data-aos="fade-in" />

        <div className="container">
          <div className="row">
            <div className="col-lg-8 d-flex flex-column align-items-center align-items-lg-start">
              <h2 data-aos="fade-up" data-aos-delay="100">Welcome to <span>Restaurantly</span></h2>
              <p data-aos="fade-up" data-aos-delay="200">Delivering great food for more than 18 years!</p>
              <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                <a href="#menu" className="cta-btn">Our Menu</a>
                <a href="#book-a-table" className="cta-btn">Book a Table</a>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center mt-5 mt-lg-0">
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}

    </main>
  );
};

export default MainComponent;