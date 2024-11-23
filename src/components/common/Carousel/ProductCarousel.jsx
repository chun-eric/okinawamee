import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCarousel = ({ items }) => {
  const [isDragging, setIsDragging] = useState(false); // to check if the slider is being dragged
  const [startX, setStartX] = useState(0); // to store the starting X position of the slider
  const [scrollLeft, setScrollLeft] = useState(0); // to store the inital horizontal scroll position of the slider
  const sliderRef = useRef(null); // reference to the slider element
  const [buttonVisible, setButtonVisible] = useState(false); // to control the visibility of the buttons
  const [isScrolling, setIsScrolling] = useState(false); // to check if the slider is being scrolled
  const [isInitalized, setIsInitalized] = useState(false);

  // Get the original items (excluding clones)
  const originalItems = items.slice(1, -1);

  // Initialize carousel
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isInitalized) return;

    slider.style.scrollBehavior = "auto"; // Disable smooth scrolling initially

    // Re-enable smooth scrolling after initial position is set
    requestAnimationFrame(() => {
      slider.scrollLeft = slider.clientWidth; // Set initial scroll position to first real item
      setIsInitalized(true); // Mark as initialized
      setTimeout(() => {
        slider.style.scrollBehavior = "smooth";
      }, 50);
    });
  }, [isInitalized]);

  const handleInfiniteScroll = () => {
    if (!sliderRef.current || isScrolling) return;

    const slider = sliderRef.current;
    const scrollWidth = slider.scrollWidth;
    const clientWidth = slider.clientWidth;
    const currentScroll = slider.scrollLeft;

    console.log(
      "Scroll position:",
      currentScroll,
      "Client width:",
      clientWidth,
      "Scroll width:",
      scrollWidth
    ); // Add this for debugging

    // Improved threshold calculations
    const rightThreshold = scrollWidth - clientWidth * 2;
    const leftThreshold = clientWidth;

    // When scrolling to the last clone (moving right)
    if (currentScroll >= rightThreshold) {
      setIsScrolling(true);

      requestAnimationFrame(() => {
        slider.scrollLeft = clientWidth;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "smooth";
          setIsScrolling(false);
        });
      });
    }

    // When scrolling to the first clone (moving left)
    else if (currentScroll <= leftThreshold * 0.1) {
      setIsScrolling(true);

      // First, instantly jump to the end (before last clone)
      slider.style.scrollBehavior = "auto";

      requestAnimationFrame(() => {
        slider.scrollLeft = scrollWidth - clientWidth * 2;

        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "smooth";
          setIsScrolling(false);
        });
      });
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      if (!isScrolling) {
        handleInfiniteScroll();
      }
    };
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  });

  const handleDragStart = (e) => {
    setIsDragging(true);
    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    setStartX(pageX);
    setScrollLeft(sliderRef.current.scrollLeft);

    // Disable smooth scrolling during drag
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
    }
  };

  // Handles the drag move
  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const pageX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const walk = (pageX - startX) * 1.5; // Added multiplier for more responsive dragging

    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  // Ends the drag
  const handleDragEnd = () => {
    if (!isDragging || !sliderRef.current) return;

    const slider = sliderRef.current;
    setIsDragging(false);

    // Re-enable smooth scrolling
    slider.style.scrollBehavior = "smooth";

    // Check infinite scroll after a short delay
    setTimeout(() => {
      handleInfiniteScroll();
    }, 50);
  };

  // const handleHover = () => {};

  return (
    <div className='w-full  bg-white '>
      <div className='w-full h-full relative py-12 px-8 '>
        {/* Desktop View /*/}
        <div className='hidden lg:grid lg:grid-cols-3 gap-3 w-full h-fit '>
          {originalItems?.map((item, index) => (
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
                  <button className='rounded flex-1 w-[180px] h-[48px] max-w-[180px] max-h-[48px] font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white px-8 py-3 text-sm '>
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
            className='flex gap-2 flex-row w-full overflow-x-auto cursor-grab active:cursor-grabbing touch-pan-x scroll-smooth'
            style={{
              scrollSnapType: "x mandatory",

              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              WebkitOverflowScrolling: "touch",
              // "&::-webkit-scrollbar": {
              //   display: "none" /* Chrome, Safari, and Opera */,
              // },
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
                style={{
                  WebkitTapHighlightColor: "transparent",
                  scrollSnapAlign: "center",
                }}
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
                    <h2 className='text-2xl  md:text-3xl  font-bold'>
                      {item?.title}
                    </h2>
                    <p className='mt-2 text-xs sm:text-base'>
                      {item?.subtitle}
                    </p>
                  </div>
                  <div className='flex justify-center  gap-2 mb-4 xl:flex-row  font-inter '>
                    <Link
                      to='/products/id'
                      className='whitespace-nowrap rounded flex-1 w-auto font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white px-3 sm:px-5 md:px-8 py-3 text-[0.6rem] sm:text-base text-center'
                    >
                      SHOP NOW
                    </Link>
                    <Link
                      to='/collections/mens'
                      className='whitespace-nowrap rounded  flex-1 sm:w-auto  font-bold inline-block bg-white transition-colors hover:bg-primary hover:text-white  px-3 sm:px-5 md:px-8 py-3 text-[0.6rem] sm:text-base text-center'
                    >
                      COLLECTION
                    </Link>
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
