// import React from 'react'

import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import Ranking from "../components/Ranking/Ranking";
import { reviews } from "../components/testimonies/review";
import { AiFillStar } from "react-icons/ai";
import OurTeam from "./OurTeam";

export default function Home() {
  // Get the latest 3 reviews
  const latestReviews = reviews.slice(-3);

  return (
    <section>
      <HeroSection />
      <div className="w-full h-auto bg-black pb-5 px-2 md:px-9">
        <Ranking/>
      </div>
      <div className="w-full h-auto bg-white py-4 my-5 px-2 md:px-9 flex flex-col gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-5 pb-5">
          <b className="text-3xl text-red-500 text-center">Client Reviews and Testimonials</b>
          <Link to="reviews" className="border-2 border-red-500 px-4 py-2 text-red-500">See All Reviews </Link>
        </div>
        <ul className="grid gap-2 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center">
          {latestReviews.map((review, index) => (
            <li key={index} className="w-full p-3 flex flex-col h-[14rem] justify-between shadow-xl bg-black rounded-md">
              <div className="flex items-center gap-3">
                <div className="bg-red-500 w-8 h-8 flex items-center justify-center rounded-md">
                  <AiFillStar className="text-white text-2xl" />
                </div>
                <span className="text-white font-serif text-sm">{review.rating}/5</span>
              </div>
              <div className="flex flex-col gap-2 h-full mt-4 md:px-3">
                <h1 className="text-white text-xl font-semibold">{review.name}</h1>
                <p className="text-gray-400 text-md">{review.review}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <OurTeam/>
    </section>
  )
}
