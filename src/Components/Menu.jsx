import React from 'react';
import '../styles/Menu.css'; // Import your CSS file for styling
import lobsterBisque from '../assets/img/menu/lobster-bisque.jpg'; // Import menu images
import breadBarrel from '../assets/img/menu/bread-barrel.jpg';
import crabCake from '../assets/img/menu/cake.jpg';
import caesar from '../assets/img/menu/caesar.jpg';
import tuscanGrilled from '../assets/img/menu/tuscan-grilled.jpg';
import mozzarella from '../assets/img/menu/mozzarella.jpg';
import greekSalad from '../assets/img/menu/greek-salad.jpg';
import spinachSalad from '../assets/img/menu/spinach-salad.jpg';
import lobsterRoll from '../assets/img/menu/lobster-roll.jpg';

const Menu = () => {
  return (
    <section id="menu" className="menu section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Menu</h2>
        <p>Check Our Tasty Menu</p>
      </div>
      {/* End Section Title */}

      <div className="container isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul className="menu-filters isotope-filters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-starters">Starters</li>
              <li data-filter=".filter-salads">Salads</li>
              <li data-filter=".filter-specialty">Specialty</li>
            </ul>
          </div>
        </div>
        {/* Menu Filters */}

        <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
          <MenuItem 
            image={lobsterBisque} 
            title="Lobster Bisque" 
            price="$5.95" 
            ingredients="Lorem, deren, trataro, filede, nerada"
            filterClass="filter-starters" 
          />
          <MenuItem 
            image={breadBarrel} 
            title="Bread Barrel" 
            price="$6.95" 
            ingredients="Lorem, deren, trataro, filede, nerada"
            filterClass="filter-specialty" 
          />
          <MenuItem 
            image={crabCake} 
            title="Crab Cake" 
            price="$7.95" 
            ingredients="A delicate crab cake served on a toasted roll with lettuce and tartar sauce"
            filterClass="filter-starters" 
          />
          <MenuItem 
            image={caesar} 
            title="Caesar Selections" 
            price="$8.95" 
            ingredients="Lorem, deren, trataro, filede, nerada"
            filterClass="filter-salads" 
          />
          <MenuItem 
            image={tuscanGrilled} 
            title="Tuscan Grilled" 
            price="$9.95" 
            ingredients="Grilled chicken with provolone, artichoke hearts, and roasted red pesto"
            filterClass="filter-specialty" 
          />
          <MenuItem 
            image={mozzarella} 
            title="Mozzarella Stick" 
            price="$4.95" 
            ingredients="Lorem, deren, trataro, filede, nerada"
            filterClass="filter-starters" 
          />
          <MenuItem 
            image={greekSalad} 
            title="Greek Salad" 
            price="$9.95" 
            ingredients="Fresh spinach, crisp romaine, tomatoes, and Greek olives"
            filterClass="filter-salads" 
          />
          <MenuItem 
            image={spinachSalad} 
            title="Spinach Salad" 
            price="$9.95" 
            ingredients="Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette"
            filterClass="filter-salads" 
          />
          <MenuItem 
            image={lobsterRoll} 
            title="Lobster Roll" 
            price="$12.95" 
            ingredients="Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll"
            filterClass="filter-specialty" 
          />
        </div>
        {/* Menu Container */}
      </div>
    </section>
  );
};

// MenuItem component to handle individual menu items
const MenuItem = ({ image, title, price, ingredients, filterClass }) => {
  return (
    <div className={`col-lg-6 menu-item isotope-item ${filterClass}`}>
      <img src={image} className="menu-img" alt={title} />
      <div className="menu-content">
        <a href="#">{title}</a><span>{price}</span>
      </div>
      <div className="menu-ingredients">
        {ingredients}
      </div>
    </div>
  );
};

export default Menu;
