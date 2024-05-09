import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const OurBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://softwium.com/api/books')
      .then((response) => {
        setBooks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (!loading && books.length > 0) {
      // Navigate to '/books' when loading is complete and books are fetched
      navigate('/');
    }
  }, [loading, books, navigate]);

  // Render skeleton loading while data is being fetched
  if (loading) {
    return (
      <div className="container bg-custom">
        <Breadcrumb />
        {/* Skeleton loading for each book */}
        <div className="text-center mb-10 max-w-[400px] mx-auto ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Best Books
          </p>
          <h1 className="text-3xl font-bold text-indigo-800">Top Books</h1>
          <p className="text-xs mt-4 text-indigo-800 opacity-75">
            Discover some of the most influential books that have shaped minds and inspired generations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="animate-pulse p-7 rounded-2xl shadow-lg max-md:px-5 w-[200px] h-[350px] ml-1 bg-gray-200">
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render only the first 4 books
  const displayedBooks = books.slice(0, 4);

  return (
    <div className="container ml-0">
      <Breadcrumb />
      <div className="text-center mb-10 max-w-[400px] mx-auto">
        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Best Books
        </p>
        <h1 className="text-3xl font-bold text-indigo-800 ">Our Books</h1>
        <p className="text-xs mt-4 text-indigo-800 opacity-75">
          Discover some of the most influential books that have shaped minds and inspired generations.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-5'>
        {displayedBooks.map((book) => (
          <div key={book.id}>
            <div>
              <div className='p-7 rounded-2xl shadow-lg max-md:px-5 w-[200px] h-[350px] ml-1'>
                <div><img src={book.cover_image} className='h-[180px] bg-slate-300 w-[200px] ml-0'></img></div>
                <div className='mt-3'><div className='text-center text-indigo-800 font-medium h-24'>{book.title}</div></div>
                <div><p className='text-center text-red-500 font-bold'>pageCount: {book.pageCount}</p></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center  mt-10">
        <button className="px-9 py-4 text-base tracking-widest leading-9 text-cyan-900 uppercase rounded-lg border  w-[250px] max-w-xs border-cyan-900 border-solid  hover:font-medium hover:test-white" onClick={() => navigate('/books')}>
          <div className="flex items-center w-[200px] justify-center gap-3">
            <div className="flex-grow w-20 ">View more Books</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32849447340ac0c48e61bf41dcdae7f8c996b3de5ffe15b88dc64ae924d4a66b?apiKey=8d6992485656477797592f8415f51272&"
              className="self-start  mt-3 w-[13px]"
              alt="Arrow"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default OurBooks;