import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "../components/Breadcrumb";
const Cover = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="pl-16 max-md:pl-5 w-[100%]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div
                className="text-6xl font-semibold tracking-tighter text-indigo-900 capitalize leading-[87px] max-md:max-w-full max-md:text-4xl"
                data-aos="zoom-out"
                data-aos-duration="500"
              >
                "BookVerse !"
              </div>
              <div
                className="mt-8 text-2xl font-medium tracking-wider leading-10 text-indigo-800 max-md:max-w-full"
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                "Welcome to BookVerse, where every page holds a new adventure.
                Dive into our collection and let the stories unfold."
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div data-aos="zoom-in" data-aos-once="true">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d1d02b59b8edd6bbedd27628e65ddcaa14255d5cf10a9b9b03e107e291fac9f?apiKey=8d6992485656477797592f8415f51272&"
                className="z-10 grow w-full aspect-[1.09] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
