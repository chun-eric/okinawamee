import React from "react";

const HeroItem = ({ isMobile }) => {
  return (
    <div className=' w-full  border border-slate-900'>
      {/* Container with max-width and centering */}
      <div className='mx-auto max-w-screen-2xl '>
        {/* Aspect ratio container */}
        <div className=' relative w-full aspect-[4/5] md:aspect-square overflow-hidden bg-stone-100 p-3 '>
          {/* Image container */}
          <div className='w-full h-full'>
            <img
              className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out lg:hover:scale-105'
              src='https://placehold.co/800x800'
              alt='Hero Shirt Item'
            />
          </div>

          {/* Content Overlay */}
          <div className='absolute inset-0 flex flex-col justify-end text-left'>
            <div className='w-full p-3 xs:p-6 md:p-8'>
              <div className='w-full max-w-md'>
                <h2 className=' text-[1.1rem] leading-tight break-words xs:text-2xl md:text-3xl font-bold mb-2'>
                  New Season, New Styles
                </h2>
                <p className='mb-3 xs:mb-8 text-sm md:text-base'>
                  The latest Shirts from Okinawa Mee.
                </p>
                <div className='flex flex-col gap-2 xs:gap-3 xs:flex-row'>
                  <button
                    className={`bg-white px-8 py-3 text-xs xs:text-sm lg:text-md text-black rounded transition-colors  hover:bg-primary hover:text-white inline-block font-bold ${
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
