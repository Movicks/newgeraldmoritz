import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { AiFillStar } from "react-icons/ai";
import { reviews } from "../components/testimonies/review";
import HeroSection from "../components/HeroSection/HeroSection";

export function Testimonies() {
  const [page, setPage] = React.useState(1);
  const pageSize = 6; // Set the number of reviews per page

  // Calculate the total number of pages
  const pageCount = Math.ceil(reviews.length / pageSize);

  // Get the reviews for the current page
  const paginatedReviews = reviews.slice((page - 1) * pageSize, page * pageSize);

  // Handle page change (removed 'event' parameter as it's not needed)
  const handlePageChange = (_: unknown, value: number) => {
    setPage(value);
  };

  return (
    <section className="pb-9 flex flex-col gap-4 items-center justify-center bg-gray-50">
      <HeroSection />
      <ul className="grid gap-2 lg:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center px-2 md:px-4">
        {paginatedReviews.map((review, index) => (
          <li key={index} className="w-full p-3 flex flex-col h-[14rem] justify-between shadow-xl bg-black rounded-md">
            <div className="flex items-center gap-3">
              <div className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-md">
                <AiFillStar className="text-white text-2xl" />
              </div>
              <span className="text-white font-serif text-sm">{review.rating}/5</span>
            </div>
            <div className="flex flex-col gap-4 h-full mt-4 md:px-3">
              <h1 className="text-white text-xl font-semibold">{review.name}</h1>
              <p className="text-gray-400 text-md">{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
      <Stack spacing={2} className="mt-4">
        <Pagination
          count={pageCount}
          page={page}
          onChange={handlePageChange}
          className='text-xl'
          classes={{ ul: "custom-pagination" }} 
        />
      </Stack>
    </section>
  );
}
