import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testinomial } from '../assets/testinomial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Display two testimonials at a time
    slidesToScroll: 2, // Scroll two testimonials at a time
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className='mb-10 mt-20'>
      <div className='container mx-auto px-4'>
        <div className='mb-6'>
          <h1 className='text-4xl font-bold text-center'>Testimonials</h1>
        </div>
        <Slider {...settings}>
          {testinomial.map(item => (
            <div key={item.id} className='my-0'>
              <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-0 rounded-xl sm:w-[350px] lg:w-[450px] lg:h-[350px] bg-red-50 relative'>
                <div className='flex flex-col items-center gap-3'>
                  <div className='space-y-1'>
                    <p className='text-2xl text-slate-500'>{item.testimonial}</p>
                    <h1 className='text-xl font-bold text-slate-600'>{item.name}</h1>
                  </div>
                </div>
                <p className='text-red-500 font-bold text-2xl flex items-center'>
                  {item.rating} <FontAwesomeIcon className='text-yellow-400 ml-1' icon={faStar} />
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
