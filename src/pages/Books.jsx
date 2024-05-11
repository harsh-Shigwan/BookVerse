import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import SkeletonLoading1 from "../components/SkeletonLoading1";
const Books = () => {
  const totalPages = 10;
  const [books, setBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://softwium.com/api/books")
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <SkeletonLoading1 />
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumb></Breadcrumb>
      <div className="text-center mb-10 max-w-[400px] mx-auto">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Best Books
        </p>
        <h1 className="text-3xl font-bold text-indigo-800 ">Top Books</h1>
        <p className="text-xs mt-4 text-indigo-800 opacity-75">
          Discover some of the most influential books that have shaped minds and
          inspired generations.
        </p>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-5  ">
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/books/${book.id}`}>
                <div className=" p-7 rounded-2xl shadow-lg max-md:px-5 w-[200px] h-[350px]  ml-1">
                  <div className=" ">
                    <img
                      src={book.cover_image}
                      className="h-[180px] bg-slate-300 w-[200px] ml-0 "
                    ></img>
                  </div>
                  <div className=" mt-3">
                    <div className=" text-center text-indigo-800 font-medium h-24">
                      {book.title}
                    </div>
                  </div>
                  <div>
                    {" "}
                    <p className="text-center text-red-500 font-bold">
                      pageCount :{book.pageCount}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
