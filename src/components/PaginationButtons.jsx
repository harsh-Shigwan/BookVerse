import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
//import { duration } from 'framer-motion';
const PaginationButtons = ( {setCurrentBook ,currentBook , totalBooks}) => {
    const paginationVariants = {
        hidden :{
            opacity:0,
            y:100,
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                type:"spring",
                stiffness :260,
                damping:20,
                duration:0.5
            },
        },
    }
    const handlePageClick = ({selected}) => {
     setCurrentBook(selected)
    };
    const showNext = currentBook!==totalBooks-1;
    const showPrev = currentBook!==0;
  return (
    <motion.div  variants={paginationVariants} initial="hidden" animate="visible" > <ReactPaginate
    breakLabel="..."
    nextLabel={ showNext ? (
        <span className=' w-10 h-10 flex items-center justify-center bg-gray-200  rounded-md'>
        <BsChevronRight/>
        </span>
    ):null
    }
   onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={totalBooks}
    previousLabel={ <span className=' w-10 h-10 flex items-center justify-center bg-gray-200  rounded-md'>
    <BsChevronLeft/>
    </span>}
    containerClassName=' flex items-center justify-center gap-2  mt-8 mb-4'
    pageClassName=' block border- border-solid border-gray-200 hover:bg-orange-500 hover:text-white w-10 h-10 flex items-center justify-center rounded-md'
    activeClassName=' bg-orange-500 text-white'
  /></motion.div>
  )
}

export default PaginationButtons