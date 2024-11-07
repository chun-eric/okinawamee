import { useState, useRef } from "react";
import PropTypes from "prop-types";

const ProductCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false); // to check if the slider is being dragged
  const [startX, setStartX] = useState(0); // to store the starting position of the slider
  const [scrollLeft, setScrollLeft] = useState(0); // to store the scroll position of the slider
  const sliderRef = useRef(null); // reference to the slider element
  const [buttonVisible, setButtonVisible] = useState(false); // to control the visibility of the buttons

  return (
    <div className='w-full h-[calc(100vh)] bg-white '>
      <div className='w-full  h-full relative py-12 px-8 '>
        {/* Desktop View /*/}
        <div className='hidden lg:grid lg:grid-cols-3 gap-3 w-full h-full max-h-[830px] '>
          {items?.map((item, index) => (
            <div
              key={index}
              className='relative w-full h-full border rounded-md  border-slate-900'
            >
              {item.type === "video" ? (
                <video
                  className='w-full h-full object-cover'
                  loop
                  autoPlay
                  muted
                  playsInline
                  src={item.src}
                />
              ) : (
                <img
                  className='w-full h-full object-cover'
                  src={item?.src || "https://placehold.co/600x800"}
                  alt={item?.title || "Product Image"}
                />
              )}
              {/* Contents Overlay */}
              <div className='absolute inset-0 flex flex-col justify-between p-6'>
                <div className='mt-8'>
                  <h2 className='font-bold'>{item?.title}</h2>
                  <p className='font-inter mt-2 tracking-[1px]'>
                    {item?.subtitle}
                  </p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 mb-4 xl:flex-row  font-inter'>
                  <button className='rounded flex-1 w-[180px] h-[48px] max-w-[180px] max-h-[48px] font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white px-8 py-3 text-sm'>
                    SHOP MEN
                  </button>
                  <button className='rounded flex-1 w-[180px] h-[48px] max-w-[180px] max-h-[48px] font-bold  inline-block bg-white transition-colors hover:bg-primary hover:text-white px-8 py-3 text-sm'>
                    SHOP WOMEN
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View /*/}
        <div
          className='lg:hidden w-full h-full overflow-x-auto snap-x snap-mandatory select-none'
          style={{}}
        >
          <div className='flex w-full h-full'>{}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};
