import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testinomial } from "../assets/testinomial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mb-10 mt-36">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center" data-aos="slide-up">
          <h1 className="text-4xl lg:mr-1 font-bold text-indigo-800">
            Testimonials
          </h1>
          <h1 className="text-xl lg:mr-0">Our clients love us!</h1>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Slider {...settings} className="w-full max-w-5xl">
            {testinomial.map((item) => (
              <div key={item.id} className="my-0 flex justify-center">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-0 rounded-xl w-full sm:max-w-[350px] lg:max-w-[450px] bg-red-50 relative">
                  <div className="flex flex-col  gap-3">
                    <p className="text-2xl text-slate-500">
                      {item.testimonial}
                    </p>
                    <h1 className="text-xl font-bold text-indigo-900 ">
                      {item.name}
                    </h1>
                  </div>
                  <p className="text-red-500 font-bold text-2xl flex items-center">
                    {item.rating}{" "}
                    <FontAwesomeIcon
                      className="text-yellow-400 ml-1"
                      icon={faStar}
                    />
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
