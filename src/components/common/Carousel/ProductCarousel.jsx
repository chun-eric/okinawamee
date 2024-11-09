import { useState, useRef } from "react";
import PropTypes from "prop-types";

const ProductCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false); // to check if the slider is being dragged
  const [startX, setStartX] = useState(0); // to store the starting X position of the slider
  const [scrollLeft, setScrollLeft] = useState(0); // to store the inital horizontal scroll position of the slider
  const sliderRef = useRef(null); // reference to the slider element
  // const [buttonVisible, setButtonVisible] = useState(false); // to control the visibility of the buttons

  const handleDragStart = (e) => {
    setIsDragging(true);
    // get the starting X coordinate position from either mouse or touch
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    // sets the initial horizontal scroll position of the slider
    setStartX(pageX);
    // the below .scrollLeft is a property of the slider element in the DOM and not the scrollLeft state variable
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  // Handles the drag move
  const handleDragMove = (e) => {
    // exit if not dragging
    if (!isDragging) return;
    // prevent default scrolling
    e.preventDefault();

    // get the current x position
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;

    // calculate the distance moved
    // add 2 to make the slider move faster
    const distance = (pageX - startX) * 2;

    // Update the scroll position
    // checking if the sliderRef.current has been assigned. Yes we already assigned it to the carousel div element.
    // meaning the sliderRef.current is not null
    if (sliderRef.current) {
      // update the new slider position
      // this equation is quite deceptive
      // Right Drag (scrollLeft - distance): Carousel scrolls left as content shifts left.
      // Left Drag (scrollLeft - distance): Carousel scrolls right as content shifts right.
      // I got confused here
      sliderRef.current.scrollLeft = scrollLeft - distance;
    }
  };

  // Ends the drag
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // const handleHover = () => {};

  return (
    <div className='w-full  bg-white '>
      <div className='w-full h-full relative py-12 px-8 '>
        {/* Desktop View /*/}
        <div className='hidden lg:grid lg:grid-cols-3 gap-3 w-full h-fit '>
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
                    SHOP NOW
                  </button>
                  <button className='rounded flex-1 w-[180px] h-[48px] max-w-[180px] max-h-[48px] font-bold  inline-block bg-white transition-colors hover:bg-primary hover:text-white px-8 py-3 text-sm'>
                    COLLECTION
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View /*/}
        <div className='lg:hidden w-full snap-x snap-mandatory select-none  scrollbar-hide'>
          <div
            className='flex gap-2 flex-row w-full overflow-x-auto cursor-grab active:cursor-grabbing touch-pan-x'
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              WebkitOverflowScrolling: "touch",
              "&::-webkit-scrollbar": {
                display: "none" /* Chrome, Safari and Opera */,
              },
            }}
            ref={sliderRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
          >
            {items?.map((item, index) => (
              <div
                key={index}
                className='min-w-full relative snap-center aspect-[3/4]  sm:h-[calc(100vh-theme(spacing.32))]'
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                <div className='absolute inset-0 rounded-md border border-slate-900'>
                  {item.type === "video" ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className='w-full h-full object-cover'
                      src={item?.src}
                    />
                  ) : (
                    <img
                      className='w-full h-full object-cover'
                      src={item?.src || "https://placehold.co/600x800"}
                      alt={item?.title || "Product Image"}
                    />
                  )}
                </div>

                {/* Contents Overlay */}
                <div className='absolute inset-0 flex flex-col justify-between p-5 sm:p-8 md:p-12'>
                  <div className='text-white'>
                    <h2 className='text-lg  md:text-3xl  font-bold'>
                      {item?.title}
                    </h2>
                    <p className='mt-2 text-xs sm:text-base'>
                      {item?.subtitle}
                    </p>
                  </div>
                  <div className='flex justify-center  gap-2 mb-4 xl:flex-row  font-inter '>
                    <button className='whitespace-nowrap rounded flex-1 w-auto font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white px-3 sm:px-5 md:px-8 py-3 text-[0.6rem] sm:text-base'>
                      SHOP NOW
                    </button>
                    <button className='whitespace-nowrap rounded  flex-1 sm:w-auto  font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white  px-3 sm:px-5 md:px-8 py-3 text-[0.6rem] sm:text-base'>
                      COLLECTION
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  items: PropTypes.array.isRequired,
};
