import React from "react";

const HeroItem = ({ isMobile }) => {
  return (
    <div className=' relative '>
      <div className=' group/hero aspect-4/5 md:aspect-square bg-[#2f2f2f]'>
        <img
          className='w-full h-full object-cover transition-transform duration-300 ease-in-out lg:group-hover/hero:scale-105'
          src='https://placehold.co/800x800'
          alt='Hero Shirt Item'
        />
      </div>
      <div
        className={`absolute inset-0 flex flex-col justify-end text-left ${
          isMobile ? "p-8" : "p-6"
        } text-white`}
      >
        <h2 className={`${isMobile ? "text-3xl" : "text-2xl"} font-bold mb-2`}>
          New Season, New Styles
        </h2>
        <p className='mb-6 md:mb-8 text-md md:text-lg'>
          The latest Shirts from Okinawa Mee.
        </p>
        <div className='flex gap-3'>
          <button
            className={`bg-white px-8 py-3 text-xs sm:text-sm lg:text-md text-black rounded transition-colors  hover:bg-primary hover:text-white inline-block font-bold ${
              isMobile ? "flex-1" : "px-7"
            }`}
          >
            SHOP MEN
          </button>
          <button
            className={`bg-white px-8 py-3 text-xs sm:text-sm lg:text-md text-black rounded transition-colors  hover:bg-primary hover:text-white inline-block font-bold ${
              isMobile ? "flex-1" : "px-7"
            }`}
          >
            SHOP WOMEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
