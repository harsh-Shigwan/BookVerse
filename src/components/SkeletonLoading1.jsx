import React from "react";
import Breadcrumb from "./Breadcrumb";

const SkeletonLoading1 = () => {
  return (
    <div>
      {" "}
      <div className="container ">
        <Breadcrumb />
        <div className="text-center mb-10 max-w-[400px] mx-auto ">
          <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Best Books
          </p>
          <h1 className="text-3xl font-bold text-indigo-800">Top Books</h1>
          <p className="text-xs mt-4 text-indigo-800 opacity-75">
            Discover some of the most influential books that have shaped minds
            and inspired generations.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="animate-pulse p-7 rounded-2xl shadow-lg max-md:px-5 w-[200px] h-[350px] ml-1 bg-gray-200"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading1;
