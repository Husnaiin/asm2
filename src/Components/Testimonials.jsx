import React from 'react';
import '../styles/Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

// Importing testimonial images
import testimonial1 from '../assets/img/testimonials/testimonials-1.jpg';
import testimonial2 from '../assets/img/testimonials/testimonials-2.jpg';
import testimonial3 from '../assets/img/testimonials/testimonials-3.jpg';
import testimonial4 from '../assets/img/testimonials/testimonials-4.jpg';
import testimonial5 from '../assets/img/testimonials/testimonials-5.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: 'Saul Goodman',
      position: 'Ceo & Founder',
      text: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      image: testimonial2,
      name: 'Sara Wilsson',
      position: 'Designer',
      text: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
      image: testimonial3,
      name: 'Jena Karlis',
      position: 'Store Owner',
      text: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
      image: testimonial4,
      name: 'Matt Brandon',
      position: 'Freelancer',
      text: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
      image: testimonial5,
      name: 'John Larson',
      position: 'Entrepreneur',
      text: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>What they're saying about us</p>
      </div>
      {/* End Section Title */}

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={'auto'}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialItem 
                image={testimonial.image} 
                name={testimonial.name} 
                position={testimonial.position} 
                text={testimonial.text} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// TestimonialItem component to handle individual testimonials
const TestimonialItem = ({ image, name, position, text }) => {
  return (
    <div className="testimonial-item">
      <p>
        <i className="bi bi-quote quote-icon-left"></i>
        <span>{text}</span>
        <i className="bi bi-quote quote-icon-right"></i>
      </p>
      <img src={image} className="testimonial-img" alt={name} />
      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
  );
};

export default Testimonials;
