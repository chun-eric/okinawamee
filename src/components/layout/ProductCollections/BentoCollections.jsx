import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, PrinterCheck } from "lucide-react";

import HeroItem from "../../common/HeroItem";
import MobileSlider from "../../common/MobileSlider";

const BentoCollections = () => {
  // dummy data
  const products = [
    {
      image: "https://placehold.co/400x400",
      title: "HAWAIIAN ORANGE MODE",
      color: "Natural White",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 120,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Runner Go - Cozy",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 120,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Lounger Lift - Cozy",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 125,
    },
    {
      image: "https://placehold.co/400x400",
      title: "Wool Runner Mizzles",
      color: "Stony Cream",
      description: "NEW NEUTRAL SHADES SO SUBTLE THEY CAN'T HELP BUT STAND OUT",
      price: 110,
    },
  ];
  return (
    <div className='w-full p-10'>
      {/* Desktop Layout */}
      <div className='hidden md:grid grid-cols-2 gap-4'>
        <HeroItem isMobile={false} />
        <div className='grid grid-cols-2 gap-4'></div>
      </div>

      {/* Mobile Layout */}
      <div className='md:hidden'>
        <HeroItem isMobile={true} />
        <div className='mt-4'>
          <MobileSlider products={products} />
        </div>
      </div>
    </div>
  );
};

export default BentoCollections;
