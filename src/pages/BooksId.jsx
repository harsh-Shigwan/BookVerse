import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import SkeletonLoading from "../components/SkeletonLoading";
import Footer from "../components/Footer";
const BooksId = () => {
  let { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `https://softwium.com/api/books/${id}`
        );
        setBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const navtigate = useNavigate();
  const handle = () => {
    navtigate("/books");
  };

  if (loading) {
    return (
      <div className="bg-custom">
        <Breadcrumb />
        <div className="flex gap-5 items-center px-14 py-20 max-md:flex-wrap max-md:px-5">
          <SkeletonLoading />
        </div>
      </div>
    );
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className=" bg-custom">
      <Breadcrumb></Breadcrumb>

      <div className="flex gap-5 items-center px-14 py-5 max-md:flex-wrap max-md:px-5  ">
        <div className="flex-auto self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f0e110c3b75d677aeeaabbd63585bdfc40cb55fee58f68723b20655765a21694?apiKey=8d6992485656477797592f8415f51272&"
                className="w-full border-white border-solid shadow-lg aspect-[0.68] ml-0 sm:ml-2 lg:ml-0 xl:ml-20  border-[15px] max-md:mt-8 "
              />
            </div>
            <div
              className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full mr-10 sm:mr-0
        lg:mr-8 xl:mr-20 "
            >
              <div className="flex flex-col grow mt-20 sm:mt-8 lg:mt-10 max-md:mt-10 max-md:max-w-full max-md:ml-0 ">
                <div className="flex flex-col items-start self-end max-w-full text-indigo-900 w-[468px]">
                  <div className="self-stretch mt-0.5 text-sm font-medium uppercase text-zinc-500 tracking-[2.08px] max-md:max-w-full ml-[16px] sm:ml-[260px] lg:ml-[360px]">
                    ISBN:{book.isbn}
                  </div>
                  <div className="ml-0 text-5xl font-semibold capitalize max-md:ml-2.5 max-md:text-4xl mt-5">
                    {book.title}
                  </div>
                  <div className="shrink-0 mt-14 h-0.5 bg-red-500 w-[101px] max-md:mt-10" />
                  <div className="self-stretch mt-3.5 text-sm font-medium uppercase text-zinc-500 tracking-[2.08px] max-md:max-w-full">
                    By {book.authors.join(", ")}
                  </div>

                  <div className="self-stretch mt-7 text-base tracking-wide leading-8 text-neutral-500 max-md:max-w-full">
                    The book {book.title} , explores the resilience of the human
                    spirit, leaving an indelible mark of inspiration on its
                    readers.
                  </div>
                  <div className="self-stretch mt-6 text-2xl font-bold tracking-wide text-red-500 capitalize max-md:mt-10 max-md:max-w-full">
                    Price : ### /-
                  </div>
                  <div className="self-stretch mt-8 text-xl font-bold tracking-wide text-indigo-800 capitalize max-md:mt-0 max-md:max-w-full">
                    Page Count : {book.pageCount}
                  </div>

                  <button
                    className="flex gap-3 px-6 py-2 mt-16 text-base font-medium tracking-widest leading-9 uppercase rounded-lg border border-indigo-900 border-solid max-md:px-5 max-md:mt-10  "
                    onClick={handle}
                  >
                    <div className="grow mb-2">Back</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/46223510b19cf63935c8ca05bd9fb834c713d2e1e77cecfc4690f92abdffe36b?apiKey=8d6992485656477797592f8415f51272&"
                      className="shrink-0 self-start mt-3 aspect-[1.3] fill-indigo-900 w-[13px] rotate-180"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BooksId;
