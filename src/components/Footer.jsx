import React from "react";

const Footer = () => {
  const FooterLinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Books",
      link: "/books",
    },
    {
      title: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-orange-500 mt-20 max-md:px-5">
      <div className="flex flex-col mt-5 w-full max-w-[1153px] max-md:max-w-full">
        <div className="max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[51%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3ce892485dd8fa8ee30bc799b4a63e8eca8ebb58a624fe95bbae831fd9f58bbd?apiKey=8d6992485656477797592f8415f51272&"
                  className="aspect-[0.95] w-[83px]"
                />
                <div className="mt-5 text-lg tracking-wide leading-9 text-white max-md:mr-2.5">
                  I am "Harsh Shigwan" , a Frontend Developer from Thakur
                  College Of Engineering And Technology.
                </div>
                <div className="flex gap-5 justify-between mt-12 max-md:mt-10">
                  <a href="https://www.facebook.com/harsh.shigwan.54?mibextid=rS40aB7S9Ucbxw6v">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e754f660cd7a39bc915374e14b387e135d048c6c9e6d35e06d39cc06df800ecd?apiKey=8d6992485656477797592f8415f51272&"
                      className="shrink-0 w-11 aspect-[0.98]"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/harsh-shigwan-7bb012228/">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4cd0888a4db97e4e8a5994e8b713870b0a48e50132f3e26923e9a92f09b725ac?apiKey=8d6992485656477797592f8415f51272&"
                      className="shrink-0 w-11 aspect-[0.98]"
                    />
                  </a>
                  <a href="https://twitter.com/Harsh_shigwan" className="">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bcdf95970f0c9c84d2b3a4e5ce566f307181ba9355a607f110198b869faecf9e?apiKey=8d6992485656477797592f8415f51272&"
                      className="shrink-0 w-11 aspect-[0.98]"
                    />
                  </a>
                  <a href="https://twitter.com/Harsh_shigwan">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1ce405ee9628104508d9ed8ccac62f65478b9d7307637b7ae1ed0fddd7f07431?apiKey=8d6992485656477797592f8415f51272&"
                      className="shrink-0 w-11 aspect-[0.98]"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[21%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow mt-1.5 font-semibold text-white max-md:mt-10">
                <div className="text-2xl tracking-wide uppercase">Company</div>
                <div className="mt-12 text-lg  tracking-wide max-md:mt-10">
                  {FooterLinks.map((link, index) => (
                    <div className="" key={index}>
                      <a href={link.link} className=" text-white ">
                        {link.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 font-semibold text-white max-md:mt-10">
                <div className="text-2xl tracking-wide uppercase">
                  Importent Links
                </div>
                <div className="mt-12 text-lg tracking-wide max-md:mt-10">
                  Privacy Policy
                  <br />
                  FAQs
                  <br />
                  Terms of Service
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 text-lg tracking-wide text-white max-md:mt-10 max-md:max-w-full text-center">
          All Rights Reserved © 2024-BookVerse.
        </div>
      </div>
    </div>
  );
};

export default Footer;
