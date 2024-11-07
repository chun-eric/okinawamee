import { useState, useRef } from "react";
import PropTypes from "prop-types";

const ProductCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false); // to check if the slider is being dragged
  const [startX, setStartX] = useState(0); // to store the starting position of the slider
  const [scrollLeft, setScrollLeft] = useState(0); // to store the scroll position of the slider
  const sliderRef = useRef(null); // reference to the slider element

  return (
    <div className='w-full h-[calc(100vh-100px)] bg-white '>
      <div className='w-full h-full relative py-12 px-8 '>
        {/* Desktop View /*/}
        <div className='hidden lg:grid lg:grid-cols-3 gap-3 w-full h-full overflow-hidden'>
          {items?.map((item, index) => (
            <div
              key={index}
              className='relative w-full h-full border  border-slate-900'
            >
              {item.type === "video" ? (
                <video
                  loop
                  autoPlay
                  muted
                  playsInline
                  className=''
                  src={item.src}
                />
              ) : (
                <img
                  src={item?.src || "https://placehold.co/600x800"}
                  alt={item?.title || "Product Image"}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View /*/}
        <div className='lg:hidden w-full h-full overflow-x-auto snap-x snap-mandatory select-none'></div>
      </div>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};
