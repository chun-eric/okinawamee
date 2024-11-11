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
          isMobile ? "p-5" : "p-10"
        } text-white`}
      >
        <h2 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold mb-2`}>
          New Season, New Styles
        </h2>
        <p className='mb-4'>
          The latest shoes to start winter on the right foot.
        </p>
        <div className='flex'>
          <button>SHOP MEN</button>
          <button>SHOP WOMEN</button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
