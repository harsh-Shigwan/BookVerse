import React from "react";
import Footer from "../components/Footer";
import Quote from "./Quote";
import OurBooks from "./OurBooks";
import TestimonialsSlider from "../components/TestimonialsSlider";
import Cover from "./Cover";

const Home = () => {
  return (
    <div className=" ml-0 ">
      <Cover />
      <Quote />
      <OurBooks />
      <TestimonialsSlider />
      <Footer />
    </div>
  );
};

export default Home;
