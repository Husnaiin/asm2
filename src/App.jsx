import React from "react";
import Header from "./Components/Header";
import MainComponent from "./Components/Hero"
import About from "./Components/About";
import Whyus from "./Components/Why_us";
import Menu from "./Components/Menu";
import Specials from "./Components/Specials";
import Events from "./Components/Events";
import BookATable from "./Components/BookATable";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import Chefs from "./Components/Chefs";
import Contact from "./Components/Contacts";
import Footer from "./Components/footer";


function App() {

  return (
    <div>
    
      <Header/>
      <MainComponent/>
      <About/>
      <Whyus/>
      <Menu/>
      <Specials/>
      <Events/>
      <BookATable/>
      <Testimonials/>
      <Gallery/>
      <Chefs/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App
