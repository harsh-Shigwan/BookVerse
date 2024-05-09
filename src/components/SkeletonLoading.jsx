import React from 'react'

const SkeletonLoading = () => {
  return (
    <div className="flex gap-5 animate-pulse items-center px-10 py-0 max-md:flex-wrap max-md:px-5 w-[1200px]">
    <div className="flex-auto self-strpxetch max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          {/* Image Placeholder */}
          <div className="w-full h-[600px] bg-gray-300 rounded-lg shadow-lg"></div>
        </div>
        <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full mr-10">
          {/* Title Placeholder */}
          <div className="w-full h-12 bg-gray-300 mb-4 rounded-md"></div>
          {/* Divider Placeholder */}
          <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
          {/* Author Placeholder */}
          <div className="w-[468px] h-6 bg-gray-300 mb-4 rounded-md"></div>
          {/* Description Placeholder */}
          <div className="w-full h-24 bg-gray-300 mb-4 rounded-md"></div>
          {/* Page Count Placeholder */}
          <div className="w-[200px] h-12 bg-gray-300 rounded-md"></div>
          {/* Button Placeholder */}
          <div className="flex items-center w-[150px] h-12 bg-gray-300 mt-20 rounded-md">
            <div className="w-20 h-8 bg-gray-400 rounded-lg ml-4"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-lg ml-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default SkeletonLoading